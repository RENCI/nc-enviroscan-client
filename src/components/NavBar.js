import React from "react"
import { Menu, Input, Form } from "semantic-ui-react"
import { Image } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

import logo from "../images/logo_300x.png"

const NavBar = () => {

  return (
    <Menu borderless widths='6' >
      {/* Logo */}
      <Menu.Item header>
        <Image src={logo} alt='logo' size='small' />
      </Menu.Item>
      {/* Nav Links */}
      <Menu.Item as={NavLink} exact to="/">Home</Menu.Item>
      <Menu.Item as={NavLink} to="/environmental-outcomes">Environmental Indicators</Menu.Item>
      <Menu.Item as={NavLink} to="/health-outcomes">Health Outcomes</Menu.Item>
      <Menu.Item as={NavLink} to="/social-stressors">Social Stressors</Menu.Item>
      <Menu.Item as={NavLink} to="/environmental-justice">Environmental Justice</Menu.Item>
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