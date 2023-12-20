import { ReactElement, useState } from "react";
import { CFP, Overview } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Grid } from "@material-ui/core";
import { Email } from "@material-ui/icons";

const AboutDiv = ({
  overview,
  cfp,
}: {
  overview: Overview;
  cfp: CFP;
}): ReactElement => {
  return (
    <>
      <div className="about-div">
        <Grid container spacing={3} className="dates">
          {cfp.dates.map((date, i) => {
            if (date.type === "Camera ready") {
              return null;
            }
            return (
              <Grid item md={3} sm={6} xs={12} key={i}>
                <div className="col">
                  <span className="col-key">{date.type}</span>
                  <div
                    className={clsx("col-value", {
                      "passed-date": date.isPassed,
                    })}
                  >
                    {date.date}
                  </div>
                </div>
              </Grid>
            );
          })}
          <Grid item md={3} sm={6} xs={12}>
            <div className="col">
              <span className="col-key">contact</span>
              <div className="col-value">
                <Email className="icon" fontSize="small" color="primary" />{" "}
                <a href={`mailto:${overview.contact}`}>{overview.contact}</a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="description">{overview.description}</div>
      </div>
    </>
  );
};
export default AboutDiv;
