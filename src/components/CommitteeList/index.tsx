import { Grid, Avatar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { ProgramCommittee } from "../../stores/Interfaces";

import "./styles.scss";
const CommmitteeList = ({
  members,
}: {
  members: ProgramCommittee[];
}): ReactElement => {
  if (members.length === 0) {
    return <i>To be updated!</i>;
  }
  return (
    <div className="committee-list">
      {members.map((member, index) => (
        <div className="member" key={member.name}>
          <span className="name">{member.name}</span>
          <span className="affiliation">{member.affiliation}</span>
        </div>
      ))}
    </div>
  );
};
export default CommmitteeList;
