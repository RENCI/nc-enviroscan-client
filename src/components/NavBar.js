import React, { useState } from "react"
import { Menu, Input } from "semantic-ui-react"
import { Image } from "semantic-ui-react"

import logo from "../images/logo_screenshot.JPG"

const NavBar = () => {
  const [active, setActive] = useState(false)
  const activate = () => setActive(!active)

  return (
    <Menu borderless widths='6'>
      <Menu.Item header>
        <Image src={logo} alt='logo' size='medium' />
      </Menu.Item>
      <Menu.Item name='home' href='' onClick={activate} className={`${active ? 'active' : ''}`} >Home</Menu.Item>
      <Menu.Item name='environment'  href='#environment' onClick={activate} className={`${active ? 'active' : ''}`}>Environmental Factors</Menu.Item>
      <Menu.Item name='health'  href='#health' onClick={activate} className={`${active ? 'active' : ''}`}>Health Outcomes</Menu.Item>
      <Menu.Item name='stressors'  href='#stressors' onClick={activate} className={`${active ? 'active' : ''}`}>Social Stressors</Menu.Item>
      <Menu.Item position='right'>
        <Input className='icon' icon='search' placeholder='Search...' />
      </Menu.Item>
    </Menu>
  )
};

export default NavBar