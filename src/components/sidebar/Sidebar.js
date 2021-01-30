import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__dashboard">D</p>
      <div className="sidebar__icons">
        <IconButton
          onClick={() => {
            console.log("pressed");
          }}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => {
            console.log("pressed");
          }}
        >
          <LocationOnIcon fontSize="large" style={{ color: "#785ceb" }} />
        </IconButton>
        <IconButton>
          <SettingsIcon fontSize="large" color="disabled" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
