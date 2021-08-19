import React from 'react'
import { Tab, Item } from 'semantic-ui-react'

import As from "../../../images/contaminants/Arsenic_icon.png"
import Cd from "../../../images/contaminants/Cadmium_icon.png"
import Pb from "../../../images/contaminants/Lead_icon.png"
import Mn from "../../../images/contaminants/Manganese_icon.png"

const TabbedView = props => {
    const panes = [
        {
            menuItem: "Arsenic", render: () => (
                <Item>
                    <Item.Image src={As} size="small" />
                </Item>
            )
        }, 
        {
            menuItem: "Cadmium", render: () => (
                <Item>
                    <Item.Image src={Cd} size="small" />
                </Item>
            )
        }, 
        {
            menuItem: "Lead",
            render: () => (
                <Item>
                    <Item.Image src={Pb} size="small" />
                </Item>
            )
        }, 
        {
            menuItem: "Manganese",
            render: () => (
                <Item>
                    <Item.Image src={Mn} size="small" />
                </Item>
            )
        }
    ]

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
