import { Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ReactElement } from "react";
import { CFP } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";

const CFPText = ({ cfp }: { cfp: CFP }): ReactElement => {
  return (
    <div className="cfp-text">
      <Grid container spacing={3} className="info-block-wrapper">
        <Grid item md={7} sm={12}>
          <div className="info-block">
            <div className="info-title">Important Dates</div>
            {cfp.dates.map((date, i) => (
              <div key={i}>
                <div className="row">
                  <div className="row-key long">{date.type}</div>
                  <div
                    className={clsx("row-value", {
                      "passed-date": date.isPassed,
                    })}
                  >
                    {date.date}
                  </div>
                </div>
                {date.description && (
                  <div className="description">{date.description}</div>
                )}
              </div>
            ))}
          </div>
        </Grid>
        <Grid item md={5} sm={12}>
          <div className="info-block">
            <div className="info-title">Submission format</div>
            <div className="row">
              <div className="row-key">Platform</div>
              <a className="row-value" href={cfp.submit.platform.url}>
                {cfp.submit.platform.name}
              </a>
            </div>
            <div className="row">
              <div className="row-key">Format</div>
              <div className="row-value">{cfp.submit.format}</div>
            </div>{" "}
            <div className="row">
              <div className="row-key">Types</div>
              <div className="row-value">{cfp.submit.type}</div>
            </div>{" "}
          </div>
        </Grid>
      </Grid>
      <div className="info-title">Description</div>
      <p>{cfp.description}</p>
      <p>Themes include, but are not limited to:</p>
      <ul>
        {cfp.themes.map((theme, i) => (
          <li key={i}>{theme}</li>
        ))}
      </ul>
    </div>
  );
};
export default CFPText;
