import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from '@reach/router'

const Environment = props => (
    <Dropdown.Item as={Link} key={`envTopic-${props.id}`} name={props.name} text={props.name} to={`/environmental-indicators/${props.id}`} className="nav-link submenu" active={props.active} />
);

export default Environment;