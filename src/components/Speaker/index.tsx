import { Grid, Avatar, Divider, Chip } from "@material-ui/core";
import React, { ReactElement } from "react";
import { People, PageIds, Speaker } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";

const SpeakerEntry = ({ speaker }: { speaker: Speaker }): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  return (
    <div className="speaker">
      <Avatar
        className="avatar"
        alt={speaker.name}
        src={`${process.env.PUBLIC_URL}/images/${speaker.img}`}
      />
      <div>
        <b className="name">
          <Chip
            label={speaker.type}
            color="primary"
            size="small"
            variant="outlined"
          />
          <a href={speaker.webpage} style={{ marginLeft: 10 }}>
            {speaker.name}
          </a>
        </b>
        , <i className="affiliation">{speaker.affliation}</i>
        <p>{speaker.description}</p>
      </div>
    </div>
  );
};

const SpeakerList = ({ speakers }: { speakers: Speaker[] }): ReactElement => {
  if (speakers.length === 0) {
    return <i>To be updated!</i>;
  }
  return (
    <div className="speaker-list">
      {speakers.map((speaker) => (
        <>
          <SpeakerEntry speaker={speaker} key={speaker.name} />
          <Divider key={speaker.name} className="divider" />
        </>
      ))}
    </div>
  );
};
export default SpeakerList;
