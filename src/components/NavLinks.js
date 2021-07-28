import React, { useState } from "react";
import { Link, useLocation } from "@reach/router";
import { Dropdown, Menu } from "semantic-ui-react";

const NavLinks = ({ item }) => {
  let closedIcon = item.icon;
  let openIcon = item.iconOpen;

  const [submenu, setSubmenu] = useState(false);
  const [subIcon, setSubIcon] = useState(closedIcon);

  // track if submenu is open
  const openSubnav = () => {
    setSubmenu(!submenu);
    toggleIcon();
  };

  const toggleIcon = () => {
    if (!closedIcon) {
      setSubIcon(openIcon);
    } else {
      setSubIcon(closedIcon);
    }
  };

  //assigning location variable
  const { pathname } = useLocation();

  let active = () => {
    let name = item.name.toLowerCase();
    return pathname.includes(name);
  };

  return (
    <>
      {item.subNav ? (
        // format if there's a submenu
        <Dropdown item text={item.text} icon={subIcon} onClick={openSubnav} active={active}>
          <Dropdown.Menu>
            {item.subNav.map((subitem, index) => (
              <Dropdown.Item
                as={Link}
                key={index}
                text={subitem.name}
                name={subitem.name}
                to={subitem.to}
                className="nav-link submenu"
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        // if no submenu, create a singular nav item
        <Menu.Item as={Link} name={item.name} to={item.to}>
          {item.name}
        </Menu.Item>
      )}
    </>
  );
};

export default NavLinks;
