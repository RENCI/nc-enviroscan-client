import React from "react";
import { Link, useLocation, useMatch } from "@reach/router";
import { Dropdown, Menu } from "semantic-ui-react";

const NavLinks = ({ item }) => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const path = pathname;
  //match on the submenu items
  const match = useMatch("environmental-indicators/:topicId");

  return (
    <>
      {item.subNav ? (
        // format if there's a submenu
        <Dropdown item text={item.text} icon={item.icon}>
          <Dropdown.Menu>
            {item.subNav.map((subitem, index) => (
              <Dropdown.Item
                as={Link}
                key={index}
                text={subitem.name}
                name={subitem.name}
                to={subitem.to}
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
