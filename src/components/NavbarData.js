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
                slug: "water",
                to: () => {return `/environmental-indicators/${this.slug}`}
            },
            {
                name: "Soil",
                slug: "soil",
                to: () => {return `/environmental-indicators/${this.slug}`}
            },
            {
                name: "Air",
                slug: "air",
                to: () => {return `/environmental-indicators/${this.slug}`}
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