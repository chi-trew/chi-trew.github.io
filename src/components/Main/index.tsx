import React, { ReactElement } from "react";
import { makeStyles, Menu, MenuItem, Paper } from "@material-ui/core";
import "./styles.scss";
import { Metadata, PageIds } from "../../stores/Interfaces";
import OrganizerList from "../OrganizerList";
import "./styles.scss";
import CommmitteeList from "../CommitteeList";
import CFPText from "../CFPText";
import ScheduleList from "../ScheduleList";
import LandingDiv from "../Landing";
import AboutDiv from "../About";
import SpeakerList from "../Speaker";
import { Alert } from "@material-ui/lab";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export type PageBlock =
  | "cfp"
  | "about"
  | "organizers"
  | "committee"
  | "schedule";

const Main = ({
  metas,
  types,
}: {
  metas: Metadata[];
  types: PageBlock[];
}): ReactElement => {
  let currYear = metas[metas.length - 1].overview.year;
  console.log(currYear);
  let { year } = useParams() as any;
  if (year !== undefined) currYear = year;

  console.log(year, currYear);
  const meta = metas.find((m) => m.overview.year === currYear);
  if (meta === undefined) return <div>Not Found</div>;
  return (
    <div key={types.join("-")}>
      <LandingDiv overview={meta.overview} />
      <div className="app-main">
        {meta.announce && (
          <Alert severity="warning" className="warning">
            {meta.announce}
          </Alert>
        )}
        {types.includes("about") && (
          <div className="section">
            <div className="title">About</div>
            <AboutDiv overview={meta.overview} cfp={meta.cfp} />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">
              Schedule{" "}
              <small>
                in <b>{meta.overview.timezone}</b>
              </small>
            </div>

            <ScheduleList
              schedules={meta.schedule}
              papers={meta.papers}
              year={Number(meta.overview.year)}
            />
          </div>
        )}
        {types.includes("schedule") && (
          <div className="section">
            <div className="title">Speakers & Panelists</div>
            <SpeakerList speakers={meta.speakers} />
          </div>
        )}
        {types.includes("cfp") && (
          <div className="section">
            <div className="title">Call for Papers</div>
            <CFPText cfp={meta.cfp} />
          </div>
        )}
        {types.includes("organizers") && (
          <div className="section">
            <div className="title">Organizers</div>
            <OrganizerList organizers={meta.organizers} />
          </div>
        )}
        {types.includes("committee") && (
          <div className="section">
            <div className="title">Program Committees</div>
            <CommmitteeList members={meta.pcs} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;
