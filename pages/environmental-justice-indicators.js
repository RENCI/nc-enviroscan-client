import { Fragment } from 'react'
import { Link } from '../components/link'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { Typography } from '@material-ui/core'
import { Markdown } from '../components/markdown'
import { Accordion } from '../components/accordion'
import heroImage from '../images/hero-images/environmental-justice-indicators.jpg'

const content = {
  title: 'Environmental Justice Indicators',
  markdown: `
NC ENVIROSCAN contains information from the US Environmental Protection Agency (USEPA)
in the form of environmental justice (EJ) indices. An EJ Index combines demographic
factors with a single environmental factor. For example, the EJ Index for traffic is a
combination of the following populations residing in the Census block group:

- The traffic indicator
- The low-income population
- The minority population

Note that an EJ index does not combine various environmental factors into a cumulative
score &mdash; each environmental indicator has its own EJ Index.

To calculate a single EJ Index, EJSCREEN uses a formula to combine a single environmental
factor with the demographic indicator. It considers how much the local demographics are
above the national average. It does this by looking at the difference between the
demographic composition of the block group, as measured by the Demographic Index, and the
national average (which is approximately 35%). It also considers the population size of the
block group, although most block groups are similar in population size.

EJSCREEN calculates the EJ Index by multiplying together three items:

_EJ Index = (The Environmental Indicator)
  &times; (Demographic Index for Block Group &minus; Demographic Index for US)
  &times; (Population count for Block Group)_

The EJ Index is higher in block groups with large numbers of mainly low-income and/or
minority residents with a higher environmental indicator value.`,
  faqs: [
    {
      summary: 'Why are we concerned about these indicators?',
      details: `Exposure to environmental contaminants can result in negative health outcomes. Certain
populations are more vulnerable to effects of these environmental exposures and may be more
likely to experience adverse health outcomes. The EJ index data provided by USEPA allows
users to map each environmental factor along with the block groups that contribute the most
toward the nationwide disparity in that environmental factor. By "disparity" in this case
we mean the difference between the environmental indicator's average value among these
demographic groups and the average in the US population.`,
    },
    {
      summary: 'Which environmental justice indicators can I explore?',
      details: `There are eleven EJ Indexes in EJSCREEN reflecting the
eleven [environmental indicators](https://www.epa.gov/ejscreen/overview-environmental-indicators-ejscreen) that are
mapped in EJSCREEN. We have added all eleven to the ENVIROSCAN mapping tool.
The eleven EJ Index names are:

- National Scale Air Toxics Assessment Air Toxics Cancer Risk
- National Scale Air Toxics Assessment Respiratory Hazard Index
- National Scale Air Toxics Assessment Diesel PM (DPM)
- Particulate Matter (PM2.5)
- Ozone
- Lead Paint Indicator
- Traffic Proximity and Volume
- Proximity to Risk Management Plan Sites
- Proximity to Treatment Storage and Disposal Facilities
- Proximity to National Priorities List Sites
- Wastewater Discharge Indicator

**For more information** about [EJSCREEN](https://www.epa.gov/ejscreen) and
the [EJ Index scores](https://www.epa.gov/ejscreen),
please visit the [USEPA EJSCREEN website](https://www.epa.gov/ejscreen/what-ejscreen).`,
    },
    {
      summary: 'How do we map the data?',
      details: `In ENVIROSCAN, the EJ Index data is mapped by census block group. **Please Note**: Since these EJ indices already combine demographic and environmental indicator information, these layers are best viewed on the single map view that does not allow layering with other indicators. `,
    },
    {
      summary: 'When and where were these data collected?',
      details: 'These are the 2020 data retrieved from the [USEPA’s EJScreen website](https://www.epa.gov/ejscreen/download-ejscreen-data).',
    },
  ]
}

export default function EnvironmentalJusticeIndicators() {
  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ heroImage.src }
      />
      <MainContent>
        <Typography variant="h2">{ content.title }</Typography>
        <Markdown src={ content.markdown } />
        <Accordion items={ content.faqs.map(faq => ({ summary: faq.summary, details: <Markdown src={ faq.details } /> })) } />
      </MainContent>
    </Fragment>
  )
}
