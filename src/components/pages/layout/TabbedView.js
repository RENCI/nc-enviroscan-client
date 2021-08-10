import React from 'react'
import { Tab } from 'semantic-ui-react'

const TabbedView = props => {
    const panes = [
        {menuItem: 1}, {menuItem: 2}, {menuItem: 3}, {menuItem: 4}]

    return (
        <div>
            <Tab
                menu={{ fluid: true, vertical: true, tabular: true}}
                panes={panes}
            />
        </div>
    )
}

export default TabbedView
