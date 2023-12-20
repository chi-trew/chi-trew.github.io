import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { PageIds } from "../../stores/Interfaces";
import { NavLink } from "react-router-dom";

import "./styles.scss";
import { MoreVert, ExpandMore } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Header = ({
  logo,
  years,
}: {
  logo: string;
  years: number[];
}): ReactElement => {
  {
    /* <header className="app-header">
      <h1>TRAIT</h1>
      <nav>
        <ul>
          {Object.values(PageIds).map((value) => (
            <li className="option">
              <a href={`#${value}`} key={value}>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
          </header>*/
  }
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [yearAnchorEl, setYearAnchorEl] = React.useState(null);
  const isYearOpen = Boolean(yearAnchorEl);
  const [year, setYear] = React.useState(2024);

  const logoimg =
    year === 2024 ? "logo_word_white_2024.png" : "logo_word_white.png";
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleYearMenuClose = () => {
    setYearAnchorEl(null);
  };

  const handleYearMenuOpen = (event: any) => {
    setYearAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const yearMenuId = "primary-search-account-menu-year";

  const renderYearMenu = (
    <Menu
      anchorEl={yearAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={yearMenuId}
      keepMounted={false}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isYearOpen}
      onClose={handleYearMenuClose}
    >
      {years.map((key) => (
        <NavLink
          className="menu-option"
          exact
          to={`/${key}`}
          onClick={handleYearMenuClose}
        >
          <MenuItem
            key={key}
            onClick={() => {
              setYear(key);
              handleYearMenuClose();
            }}
            //onClick={handleMobileMenuClose}
          >
            {key}
          </MenuItem>
        </NavLink>
      ))}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted={false}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {Object.keys(PageIds).map((key) => (
        <NavLink
          className="menu-option"
          exact
          to={`/${year}/${key}`}
          onClick={handleMobileMenuClose}
        >
          <MenuItem
            key={key}

            //onClick={handleMobileMenuClose}
          >
            {PageIds[key as keyof typeof PageIds]}
          </MenuItem>
        </NavLink>
      ))}
    </Menu>
  );
  const classes = useStyles();
  return (
    <AppBar className="app-header" position="sticky">
      <Toolbar variant="dense" className="toolbar">
        <span>
          <IconButton
            aria-label="show more"
            aria-controls={yearMenuId}
            aria-haspopup="true"
            onClick={handleYearMenuOpen}
            color="inherit"
          >
            <span>
              <img
                className="logo"
                src={`${process.env.PUBLIC_URL}/images/${logoimg}`}
              ></img>
            </span>
            <div className="year">
              {`${year}`}
              <ExpandMore />
            </div>
          </IconButton>
        </span>

        <nav className={classes.sectionDesktop}>
          <ul>
            {Object.keys(PageIds).map((key) => (
              <li className="option" key={key}>
                <NavLink exact to={`/${year}/${key}`}>
                  {PageIds[key as keyof typeof PageIds]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
      {renderYearMenu}
    </AppBar>
  );
};
export default Header;
