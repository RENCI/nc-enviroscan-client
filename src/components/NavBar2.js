import React from "react";
import { Link } from "@reach/router";
import { NavbarData } from "./NavbarData";

import { Menu, Image } from "semantic-ui-react";

import logo from "../images/enviroscan_logo_300x.png";
import NavLinks from "./NavLinks";

const NavBar2 = () => {

  return (
    <div className="header-bar">
      <div id="top-bar"></div>
      <Menu borderless widths="5" id="navbar">
        {/* Logo */}
        <Menu.Item header as={Link} to="/">
          <Image src={logo} alt="ENVIROSCAN logo" size="small" />
        </Menu.Item>
        {/* Nav Links */}
        {NavbarData.map((item, index) => {
          return <NavLinks item={item} key={index} />;
        })}
      </Menu>
    </div>
  );
};

export default NavBar2;
