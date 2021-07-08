import React from "react"
import { Link, useLocation } from '@reach/router'

import { Menu, Input, Form } from "semantic-ui-react"
import { Image } from "semantic-ui-react"

import logo from "../images/logo_300x.png"
import topBar from "../images/shapes/top_bar_300x-8.png"

const NavBar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    const path = pathname

    let navClass = {
        home: `nav-link ${path === "/" ? "active" : ""}`,
        indicators: `nav-link ${path === "/environmental-indicators" ? "active" : ""}`,
        health: `nav-link ${path === "/health-outcomes" ? "active" : ""}`,
        stressors: `nav-link ${path === "/social-stressors" ? "active" : ""}`,
        justice: `nav-link ${path === "/environmental-justice" ? "active" : ""}`
    };
  
  return (
    <div className="header-bar">
      <img src={topBar} alt="" id="nav-topbar" />
      <Menu borderless widths='7' id="navbar">
        {/* Logo */}
        <Menu.Item header as={Link} to="/">
          <Image src={logo} alt='Enviroscan logo' size='small'/>
        </Menu.Item>
        {/* Nav Links */}
        <Menu.Item as={Link} name="About NC Enviroscan" to="/" className={navClass.home}>About NC Enviroscan</Menu.Item>
        <Menu.Item as={Link} name="Environmental Indicators" to="/environmental-indicators" className={navClass.indicators}>Environmental Indicators</Menu.Item>
        <Menu.Item as={Link} name="Health Outcomes" to="/health-outcomes" className={navClass.health}>Health Outcomes</Menu.Item>
        <Menu.Item as={Link} name="Social Stressors" to="/social-stressors" className={navClass.stressors}>Social Stressors</Menu.Item>
        <Menu.Item as={Link} name="Environmental Justice" to="/environmental-justice" className={navClass.justice}>Environmental Justice</Menu.Item>
        {/* Search field */}
        <Menu.Item position='right'>
          <Form>
            <Form.Field>
              <Input className='icon' size="small" action={{icon: 'search', className: "search-btn"}} placeholder='Search...' />
            </Form.Field>
          </Form>
        </Menu.Item>
      </Menu>
    </div>
  )
};


export default NavBar;