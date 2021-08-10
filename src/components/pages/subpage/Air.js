import React from 'react'
import { Header } from "semantic-ui-react";
import TabbedView from '../layout/TabbedView';

const Air = () => {
    return (
        <div className="page-contain">
            <Header as="h1" className="page-title">
                Environmental Indicators
            </Header>
            <Header.Subheader className="page-subtitle" as="h2">Air</Header.Subheader>
            <TabbedView />
        </div>
    )
}

export default Air
