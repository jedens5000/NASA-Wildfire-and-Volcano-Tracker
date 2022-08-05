import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="header">
      <span>
        <div>
          <h1>
            <Icon icon="mdi:fire-alert" className="header-fire" /> Wildfire &
            Volcano Tracker (Powered by NASA){" "}
            <Icon icon="noto:volcano" className="header-volcano" />
          </h1>
          <p>
            This displays all wildfires and new volcano activity within the last
            12 months.
          </p>
        </div>
      </span>
    </header>
  );
};

export default Header;
