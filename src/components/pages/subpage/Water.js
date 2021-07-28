import React from "react";
import { Header } from "semantic-ui-react";

const Water = props => {
  return (
    <div className="page-contain">
      <Header as="h1" className="page-title">
        Environmental Indicators
      </Header>
      <Header.Subheader className="page-subtitle" as="h2">Water</Header.Subheader>
    </div>
  );
}

export default Water;