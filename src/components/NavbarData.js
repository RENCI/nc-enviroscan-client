import React from 'react'
import * as RiIcons from 'react-icons/ri'

export const NavbarData = [
    {
        name: "About NC ENVIROSCAN",
        to: "/"
    },
    {
        text: "Environmental Indicators",
        icon: <RiIcons.RiArrowLeftSLine />,
        iconOpen: <RiIcons.RiArrowDownSLine />,
        subNav: [
            {
                name: "Water",
                to: `/environmental-indicators/water`
            },
            {
                name: "Soil",
                to: `/environmental-indicators/soil`
            },
            {
                name: "Air",
                to: `/environmental-indicators/air`
            }
        ]

    },
    {
        name: "Sociodemographic Indicators",
        to: "/sociodemographic-indicators"
    },
    {
        name: "Health Outcomes",
        to: "/health-outcomes"
    }
]