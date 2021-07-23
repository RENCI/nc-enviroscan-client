import React, { useState} from "react";
import { Link } from "@reach/router";
import { Dropdown, Menu } from "semantic-ui-react";

const NavLinks = ({ item }) => {
    const [subIcon, setSubIcon] = useState(item.icon)
    
//   //assigning location variable
//     const location = useLocation();

//   //destructuring pathname from location
//     const { pathname } = location;
//     const path = pathname;

  return (
    <>
      {item.subNav ? (
        // format if there's a submenu
        <Dropdown item text={item.text} icon={subIcon}>
          <Dropdown.Menu >
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
