import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { People, PageIds } from "../../stores/Interfaces";

import "./styles.scss";
import clsx from "clsx";
import { Language, Twitter, Web } from "@material-ui/icons";

const OrganizerEntry = ({ organizer }: { organizer: People }): ReactElement => {
  const [isSeeDescription, setIsSeeDescription] = React.useState(false);
  const icons = (
    <>
      {organizer.webpage && (
        <a href={organizer.webpage}>
          <Language className="iconlink" color="primary" fontSize="small" />
        </a>
      )}
      {organizer.twitter && (
        <a href={organizer.twitter}>
          <Twitter className="iconlink" color="primary" fontSize="small" />
        </a>
      )}
    </>
  );
  return (
    <div
      //href={organizer.webpage}
      onMouseOut={() => setIsSeeDescription(false)}
      onMouseOver={() => {
        setIsSeeDescription(true);
      }}
      className="entry"
    >
      <Avatar
        className="avatar"
        alt={organizer.name}
        src={`${process.env.PUBLIC_URL}/images/${organizer.img}`}
      />
      <div>
        <div className={clsx("description", { visible: isSeeDescription })}>
          <div>{icons}</div>

          {organizer.description}
        </div>
        <div className="name">{organizer.name}</div>
        <div className="affiliation">{organizer.affliation}</div>
      </div>
    </div>
  );
};

const OrganizerList = ({
  organizers,
}: {
  organizers: People[];
}): ReactElement => {
  return (
    <Grid container spacing={3} className="organizer-list">
      {organizers.map((organizer: People) => (
        <Grid item lg={3} md={3} sm={3} xs={12} key={organizer.name}>
          <OrganizerEntry organizer={organizer} />
        </Grid>
      ))}
    </Grid>
  );
};
export default OrganizerList;
