import { Fragment } from 'react'
import Image from 'next/image'
import { Hero } from '../../components/hero'
import { MainContent } from '../../components/layout'
import heroImage from '../../images/hero-images/environmental-indicators.jpg'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Accordion } from '../../components/accordion'
import { Markdown } from '../../components/markdown'
import { ElementTabs } from '../../components/tabbed-elements'

import wellWaterIcon from '../../images/icons/well-water.png'
import arsenicIcon from '../../images/icons/arsenic.png'
import cadmiumIcon from '../../images/icons/cadmium.png'
import leadIcon from '../../images/icons/lead.png'
import manganeseIcon from '../../images/icons/manganese.png'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  media: {
    flex: '1 0 120px',
    backgroundSize: '75px',
    backgroundPosition: 'center 1.5rem',
  },
  content: {
  },
});

const content = {
  title: 'Water',
  blurb: 'Some drinking water contaminants are harmful to human health but do not cause any noticeable changes to the taste, smell, or color of the water. NC ENVIROSCAN visualizes select measures of pollution in drinking water in North Carolina.',
  sections: [
    {
      title: 'Private Well Water',
      content: `When contaminants enter groundwater, they can influence the quality and safety of drinking water drawn from private wells and potentially impact human health.`
    },
  ],
  faqs: [
    {
      question: `Which environmental indicators can I explore?`,
      answer: `In the NC ENVIROSCAN Mapping tool, we provide data on toxic metals &mdash; including arsenic, cadmium, lead, and manganese &mdash; that have been documented in private well water in North Carolina`,
    },
    {
      question: `Why are we concerned about these toxic metals?`,
      answer: `We are focusing on these metals because of their known human health risks.`,
    },
    {
      question: `How do we map data?`,
      answer: `In NC ENVIROSCAN, we currently provide data as median, mean, or percent above standard at the US Census tract level. Standards align with federal or state regulations as required and are as follows: ...?`,
    },
    {
      question: `When and where were these data collected?`,
      answer: `The toxic metals data used in NC ENVIROSCAN comprise well water test results from 19982019 retrieved from an electronic database maintained by the NC Division of Public Health (DPH) State Laboratory of Public Health Househol well water samples were collected by the NCDHHS DPH State Laboratory orf Public Health and Epidemiology Section, which provides groundwater monitoring assistance to North Carolina homeowners.`,
    },
  ],
  elements: [
    {
      name: 'Arsenic',
      icon: arsenicIcon,
      content: `
Exposure has been linked to many health problems, such as cancer (bladder, ling, and skin), diabetes, heart and lung disease, liver and kidney damage, impaired cognitive development in children, and skin lesions.

##### For more information
- The Agency for Toxic Substances and Disease Registry ha more information on arsenic and associated health risks. TaxFAQ (pdf)
- Protect Yourself from Arsenic in Well Water (NC Department of Health & Human Services)
- Map arsenic contamination in private well water (Link to laucnh mapping tool with preconfigured view of an arsenic indicator)
      `
    },
    {
      name: 'Cadmium',
      icon: cadmiumIcon,
      content: `
Associated with vomiting and diarrhea if ingested in high amounts over a short amouunt of time. Exposure to cadmium in drinking water over long periods can damage your bones, kidneys, and lungs.

##### For More Information
- The Agency for Toxic Substances & Disease Registry has more information on lead and associated health risks. TaxFAQ (pdf)
- Cadmium & Private Wells (NC Department of Health and Human Services)
- Map cadmium contamination in private well water (Link to laucnh mapping tool with preconfigured view of an cadmium indicator)
      `
    },
    {
      name: 'Lead',
      icon: leadIcon,
      content: `
Exposure is harmful to children and adults and is linked with kidney and brain damage, including reduced IQ and learning disabilities and other health problems, such as anemia dn high blood pressure in older adults.

##### For More Information
- The Agency for Toxic Substances & Disease Registry has more information on lead and associated health risks. TaxFAQ (pdf)
- Lead & Private Wells (NC Department of Health and Human Services)
- Map lead contamination in private well water (Link to laucnh mapping tool with preconfigured view of an lead indicator)
      `
    },
    {
      name: 'Manganese',
      icon: manganeseIcon,
      content: `
Manganese is an essential element that is required in small amounts to stay healthy. However, too much manganese may cause neurological effects in vulnerable populations, such as infants children, and pregnant women. Studies in children have suggested that extremely high levels of manganese exposure may affect brain development.

##### For More Information
- ToxFAQ Link to ATSDR for more information
- Manganese Fact Sheet ( NC Department of Health and Human Services
- Map manganese contamination in private well water (Link to launchmapping tool with preconfigured view of manganese indicator.`
    },
  ],
}

export const WaterPage = () => {
  const classes = useStyles()

  return (
    <Fragment>
      {
        content.sections.map(section => (
          <Card className={ classes.card } elevation={ 0 } key={ `water_${ section.title }`}>
            <CardMedia image={ wellWaterIcon.src } className={ classes.media } />
            <CardContent className={ classes.content }>
              <Typography variant="h3">{ section.title }</Typography>
              <Typography paragraph>
                { section.content }
              </Typography>
            </CardContent>
          </Card>
        ))
      }

      <br /><br />
      <Typography variant="h3">Explore Contaminants</Typography>
      <br /><br />

      <ElementTabs elements={ content.elements } />
      
      <br /><br />
      <Typography variant="h3">Frequently Asked Questions</Typography>
      <br /><br />
      
      <Accordion
        items={
          content.faqs.map(faq => ({
            summary: faq.question,
            details: <Markdown src={ faq.answer } />,
          }))
        }
      />

    </Fragment>
  )
}
