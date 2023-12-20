import { ReactElement, useState } from "react";
import { Paper, Schedule } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Description, Videocam } from "@material-ui/icons";
import { Chip } from "@material-ui/core";

const PaperSession = ({
  schedule,
  papers,
  year,
}: {
  schedule: Schedule;
  papers: Paper[];
  year: number;
}): ReactElement => {
  console.log(papers);
  return (
    <>
      {papers.map((paper) => (
        <div className="paper" key={paper.paper_id}>
          <div className="paper-title">
            {paper.type in ["short", "long"] && (
              <Chip
                label={paper.type + (paper.is_encore ? ", encore" : "")}
                color="secondary"
                size="small"
                variant="outlined"
                className="paper-type"
              />
            )}
            {paper.title}

            <a
              href={`${process.env.PUBLIC_URL}/papers/${year}/CHI_TRAIT_${year}_Paper_${paper.paper_id}.pdf`}
            >
              <Description fontSize="small" className="icon" />
            </a>

            {/*
            <a
              href={`${process.env.PUBLIC_URL}/videos/CHI_TRAIT_2022_Video_${paper.paper_id}.mp4`}
            >
              <Videocam fontSize="small" className="icon" />
      </a>*/}
          </div>
          <div className="paper-author">{paper.authors}</div>
        </div>
      ))}
    </>
  );
};

const ScheduleEntry = ({
  schedule,
  papers,
  year,
}: {
  schedule: Schedule;
  papers: Paper[];
  year: number;
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(schedule.type === "paper");
  let description: ReactElement | null = null;
  let format: ReactElement | null = null;
  if (
    schedule.type === "keynote" ||
    schedule.type === "panel" ||
    schedule.type === "paper"
  ) {
    format = (
      <span>
        {schedule.format}; Moderator: {schedule.leader}
      </span>
    );
  } else {
    format = <span>{schedule.format}</span>;
  }

  if (schedule.type === "paper" || schedule.type === "poster") {
    description = (
      <PaperSession
        schedule={schedule}
        year={year}
        papers={papers
          .filter((p) => p.session_id === schedule.sessionId)
          .sort((a, b) => a.paper_order - b.paper_order)}
      />
    );
  } else {
    description = <span>{schedule.description}</span>;
  }
  /*<div className="schedule">
      <div className="time">
        {schedule.start} -- {schedule.end}
      </div>
      <div className="theme">
        
        {schedule.title}
        <Visibility
          onClick={() => setIsOpen(!isOpen)}
          className={clsx("icon", { visible: schedule.description })}
          fontSize="small"
          color="secondary"
        />
        <div className={clsx("description", { visible: isOpen })}>
          {schedule.description}
        </div>
      </div>
      <div></div>
  </div>*/

  return (
    <div className="schedule" key={JSON.stringify(schedule)}>
      <div className="schedule-title">
        <span className="time">
          {schedule.start} -- {schedule.end}
        </span>
        <span className="theme">{schedule.title}</span>
        <span className="format">{format}</span>
      </div>
      <div className="schedule-description">{description}</div>
    </div>
  );
};
const ScheduleList = ({
  schedules,
  papers,
  year,
}: {
  schedules: Schedule[];
  papers: Paper[];
  year: number;
}): ReactElement => {
  if (schedules.length === 0) {
    return <i>To be updated!</i>;
  }
  return (
    <div className="schedule-list">
      {schedules.map((schedule, index) => (
        <ScheduleEntry
          schedule={schedule}
          papers={papers}
          key={index}
          year={year}
        />
      ))}
    </div>
  );
};
export default ScheduleList;
