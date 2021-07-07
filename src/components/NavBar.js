import React from "react"
import { Menu, Input, Form } from "semantic-ui-react"
import { Image } from "semantic-ui-react"
import { Link, useLocation } from '@reach/router'

import logo from "../images/logo_300x.png"

const NavBar = () => {

  return (
    <Menu borderless widths='7' >
      {/* Logo */}
      <Menu.Item header>
        <Image src={logo} alt='logo' size='small' as={Link} to="/" />
      </Menu.Item>
      {/* Nav Links */}
      <Menu.Item as={Link} exact to="#">About NC Enviroscan</Menu.Item>
      <Menu.Item as={Link} to="/environmental-outcomes">Environmental Indicators</Menu.Item>
      <Menu.Item as={Link} to="/health-outcomes">Health Outcomes</Menu.Item>
      <Menu.Item as={Link} to="/social-stressors">Social Stressors</Menu.Item>
      <Menu.Item as={Link} to="/environmental-justice">Environmental Justice</Menu.Item>
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