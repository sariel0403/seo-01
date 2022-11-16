import React, { useState } from "react";
import Switch from "react-switch";

import useStore from "../../useStore";

import logo from "../../assets/image/logo.webp";
import sun from "../../assets/image/sun.png";
import moon from "../../assets/image/moon.png";
import "../../assets/css/menu.scss";

const Menu = () => {
  const [themeMode, setThemeMode] = useState("light");
  const { update } = useStore();

  const handleThemeModeChange = () => {
    if (themeMode === "light") setThemeMode("dark");
    else setThemeMode("light");
    update({ theme: themeMode });
  };

  return (
    <div className="menu">
      <div className="container inline">
        <img src={logo} alt="logo" width={100} height={100} />
        <div className="inline">
          <label>
            <Switch
              checked={themeMode === "light" ? true : false}
              onChange={handleThemeModeChange}
              checkedIcon={<img src={sun} alt="sun" className="switch-icon" />}
              uncheckedIcon={
                <img src={moon} alt="moon" className="switch-icon" />
              }
            />
          </label>
          <ul>
            <li>
              <a href="#aboutus">About us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#capabilities">Capabilities</a>
            </li>
          </ul>
          <button className="contact-us">Contact us</button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
