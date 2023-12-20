import pandas as pd
import json
# import gdown
import wget
import os
import shutil
import numpy as np
# from pytube import YouTube


def _process_session_meta(session_meta):
    # process session info into pandas
    flatten_sessions = []
    # print(paper_meta)

    for idx, session in enumerate(session_meta):
        for order, paper_id in enumerate(session["papers"]):
            curr_meta = {
                "paper_id": paper_id,
                "session_id": idx,
                "paper_order": order,
                "session": session["session"],
            }
            flatten_sessions.append(curr_meta)
    return pd.DataFrame(flatten_sessions)


def merge_data(paper_meta, session_meta, video_meta):
    """
    Loads the data from the given path and merges it into a single dataframe.
    """
    paper_meta = paper_meta[paper_meta["Decision"].isin(["ACCEPT", "accept?"])]
    paper_meta = paper_meta[["#", "Author", "Title"]]
    paper_meta.columns = ["paper_id", "authors", "title"]

    """
    video_meta = video_meta[["Paper Number",
                             "Primary Author", "Contact Email", "Video URL"]]
    video_meta.columns = ["paper_id", "primary_author", "email", "video_url"]
    """
    print(paper_meta)

    paper_meta["title"] = paper_meta["title"].apply(lambda x: x.strip())
    # print(session_meta["title"])
    session_meta = _process_session_meta(session_meta)
    meta = paper_meta.merge(session_meta, on="paper_id", how="left")
    # fill in N/A with -1
    meta = meta.fillna(-1)
    # add a type -- if session is -1 then it's a poster
    meta["type"] = meta["session_id"].apply(
        lambda x: "Poster" if x == -1 else "Talk")
    # meta = meta.merge(video_meta, on="paper_id", how="left")
    print(meta)
    # meta = meta[["paper_id", "session_id", "paper_order", "type",
    #             "is_encore", "title", "authors",
    #            "primary_author", "email", "video_url"]]
    meta["paper_id"] = meta["paper_id"].astype(int)
    return meta


def name_papers(type, row, postfix, year):
    return f'CHI_TRAIT_{year}_{type}_{row["paper_id"]}.{postfix}'


def download_videos(row, year, output_dir):
    url = row["video_url"]
    paper_id = row["paper_id"]
    try:
        # if True:
        outfilename = f"{output_dir}/{year}/{name_papers('Video', row, 'mp4', year)}"
        if "drive.google" in url:
            gdown.download(
                url, output=outfilename,
                quiet=True, fuzzy=True)
        elif "youtu" in url:
            yt = YouTube(url)
            yt = yt.streams.filter(progressive=True, file_extension='mp4').order_by(
                'resolution').desc().first().download(output_dir)
        else:
            filename = wget.download(url, out=output_dir)
            os.rename(f"{output_dir}/{filename}", outfilename)
        return True
    except Exception as e:
        print("No video for [{}]".format(paper_id))
        print(e)
    return False


def rename_videos(row, year, output_dir):
    paper_id = row["paper_id"]
    session_id = row["session_id"]
    paper_order = row["paper_order"]
    try:
        shutil.copy(
            f'videos/{name_papers("Video", row, "mp4", year)}',
            f'{output_dir}/S{session_id+1}-{paper_order}_{paper_id}_{row["title"]}.mp4'
        )
        return True
    except:
        print("No video for [{}]".format(paper_id))
    return False


def download_papers(row, year, output_dir):
    paper_id = row["paper_id"]
    try:
        shutil.copy(
            f'./raw_papers/TRAIT_{year}_paper_{paper_id}.pdf',
            f'{output_dir}/{year}/{name_papers("Paper", row, "pdf", year)}')
        return True
    except:
        print("No paper for [{}]".format(paper_id))
    return False


if __name__ == "__main__":
    year = 2023
    session_meta_path = f"{year}_session_meta.json"
    paper_meta_path = f"{year}_paper_meta.csv"
    # video_meta_path = "video_meta.csv"
    session_meta = json.load(open(session_meta_path))
    paper_meta = pd.read_csv(paper_meta_path)
    video_meta = []  # pd.read_csv(video_meta_path)
    meta = merge_data(paper_meta, session_meta, video_meta)

    meta["paper_status"] = np.array(
        [download_papers(row, 2023, "../public/papers") for _, row in meta.iterrows()])
    """
    meta["video_status"] = np.array(
        [download_videos(row, "../public/videos") for _, row in meta.iterrows()])
    """
    meta.to_csv("meta.csv")

    # output = [rename_videos(row, "./videos_renamed")
    #          for _, row in meta.iterrows()]
    json.dump(meta[["paper_id", "session_id", "paper_order", "title", "authors", "type"]].to_dict(
        orient="records"), open(f"{year}_meta.json", "w"), indent=2)
    meta.to_csv(f"{year}_meta.csv")
