import React from "react"
import { Link, useLocation } from '@reach/router'

import { Menu, Input, Form } from "semantic-ui-react"
import { Image } from "semantic-ui-react"

import logo from "../images/enviroscan_logo_300x.png"
import topBar from "../images/shapes/top_bar_300x-8.png"

const NavBar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    const path = pathname

    let navClass = {
        home: `nav-link ${path === "/" ? "active" : ""}`,
        environment: `nav-link ${path === "/environmental-indicators" ? "active" : ""}`,
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
        <Menu.Item as={Link} name="Environmental Indicators" to="/environmental-indicators" className={navClass.environment}>Environmental Indicators</Menu.Item>
        <Menu.Item as={Link} name="Sociodemographic Indicators" to="/sociodemographic-indicators" className={navClass.sociodemographic}>Sociodemographic Indicators</Menu.Item>
        <Menu.Item as={Link} name="Health Outcomes" to="/health-outcomes" className={navClass.health}>Health Outcomes</Menu.Item>
        {/* Search field */}
        {/* <Menu.Item position='right'>
          <Form>
            <Form.Field>
              <Input className='icon' size="small" action={{icon: 'search', className: "search-btn"}} placeholder='Search...' />
            </Form.Field>
          </Form>
        </Menu.Item> */}
      </Menu>
    </div>
  )
};


export default NavBar;