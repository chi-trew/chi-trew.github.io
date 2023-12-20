import { ReactElement, useState } from "react";
import { Overview } from "../../stores/Interfaces";
import clsx from "clsx";
import "./styles.scss";
import { Visibility } from "@material-ui/icons";

const LandingDiv = ({ overview }: { overview: Overview }): ReactElement => {
  return (
    <>
      <div
        style={
          {
            //backgroundImage: `url(${process.env.PUBLIC_URL}/images/${overview.backgroundImg})`,
          }
        }
        className="landing"
      >
        <div className="landing-title">
          <img
            className="landing-logo"
            src={`${process.env.PUBLIC_URL}/images/${overview.logoWithWord}`}
          ></img>{" "}
          <p style={{ zIndex: 999 }} className="landing-description">
            <b>{overview.fullName}</b>, at {overview.confName} {overview.year}
          </p>
        </div>
        <img
          className="img"
          src={`${process.env.PUBLIC_URL}/images/${overview.backgroundImg}`}
        />
      </div>
    </>
  );
};
export default LandingDiv;
