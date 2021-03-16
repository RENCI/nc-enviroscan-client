import React from "react"
import { Menu, Input, Form } from "semantic-ui-react"
import { Image } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

import logo from "../images/logo_screenshot.jpg"

const NavBar = () => {

  return (
    <Menu borderless widths='6' >
      {/* Logo */}
      <Menu.Item header>
        <Image src={logo} alt='logo' size='medium' />
      </Menu.Item>
      {/* Nav Links */}
      <Menu.Item as={NavLink} to="/">Home</Menu.Item>
      <Menu.Item as={NavLink} to="/environmental-outcomes">Environmental Topics</Menu.Item>
      <Menu.Item as={NavLink} to="/health-outcomes">Health Outcomes</Menu.Item>
      <Menu.Item as={NavLink} to="/social-stressors">Social Stressors</Menu.Item>
      {/* Search field */}
      <Menu.Item position='right'>
        <Form>
          <Form.Field>
            <Input className='icon' action={{icon: 'search'}} placeholder='Search...' />
          </Form.Field>
        </Form>
      </Menu.Item>
    </Menu>
  )
};


export default NavBar;