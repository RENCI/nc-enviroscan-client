import React from "react"
import { Link, useLocation, useMatch } from '@reach/router'

import { Menu, Dropdown } from "semantic-ui-react"
import { Image } from "semantic-ui-react"

import logo from "../images/enviroscan_logo_300x.png"
import topBar from "../images/shapes/top_bar_300x-8.png"
import Environment from "./pages/main/Environment"

const NavBar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    const path = pathname
    //match on the submenu items
    const match = useMatch("environmental-indicators/:topicId")
    
    // console.log("this is path", path)
    // path.includes("/environmental-indicators") ? console.log("YES") : console.log("NO")
    // console.log("match is", match ? match.uri : match)

    // submenu link info
    const envSubmenu = [
      { id: "water", name: "Water" },
      { id: "soil", name: "Soil" },
      { id: "air", name: "Air" }
    ]
    // aids in recognition of active submenu item
    let current = (id) => {
      if (match != null && match.topicId === id) {
        return true
      }
    }
    // aide in recognition of active parent/main menu item
    let navClass = {
        home: `nav-link ${path === "/" ? "active" : ""}`,
        environment: `menu-parent ${path.includes("environmental-indicators") ? "active" : ""}`,
        health: `nav-link ${path === "/health-outcomes" ? "active" : ""}`,
        sociodemographic: `nav-link ${path === "/sociodemographic-indicators" ? "active" : ""}`,
    };

  return (
    <div className="header-bar">
      <img src={topBar} alt="" id="nav-topbar" />
      <Menu borderless widths='5' id="navbar">
        {/* Logo */}
        <Menu.Item header as={Link} to="/">
          <Image src={logo} alt='ENVIROSCAN logo' size='small'/>
        </Menu.Item>
        {/* Nav Links */}
        <Menu.Item as={Link} name="About NC ENVIROSCAN" to="/" className={navClass.home}>About NC ENVIROSCAN</Menu.Item>
        <Dropdown item text="Environmental Indicators" className={navClass.environment}>
          <Dropdown.Menu>
              {envSubmenu.map(({id, name}) => (
                <Environment name={name} id={id} active={current({id})} />
              ))}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} name="Sociodemographic Indicators" to="/sociodemographic-indicators" className={navClass.sociodemographic}>Sociodemographic Indicators</Menu.Item>
        <Menu.Item as={Link} name="Health Outcomes" to="/health-outcomes" className={navClass.health}>Health Outcomes</Menu.Item>
      </Menu>
    </div>
  )
};


export default NavBar;