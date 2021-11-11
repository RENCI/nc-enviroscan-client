import { Fragment } from 'react'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { Typography } from '@mui/material'
import { Markdown } from '../components/markdown'
import heroImage from '../images/hero-images/health-outcomes.jpg'

const content = {
  title: 'Health Outcomes',
  blurb: 'NC ENVIROSCAN contains information on certain diseases and other health outcomes in populations that can indicate the health of a community.',
  concern: `
Exposure to environmental contaminants can result in negative health outcomes. Certain populations are more vulnerable to effects of these environmental exposures and may be more likely to experience adverse health outcomes. ENVIROSCAN allows users to map these health outcome data by geographic area and relate them to data on population characteristics and known environmental contaminants in these same area. 
`,
  outcomes: [
    {
      name: 'Respiratory Health',
      description: `
The air we breathe can sometimes be harmful to human health due to the presence of pollution or germs, but you may not be able to tell if the air is polluted just by how it looks.

### COVID-19

#### What is COVID-19?

COVID-19 is the disease caused by infection with the virus, severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). SARS-CoV-2 is present in populations across the world, making COVID-19 a pandemic-level disease. SARS-CoV-2 is a respiratory virus and can spread through respiratory droplets or aerosols – small droplets in the air that can contain viral particles.

#### Why are we concerned about COVID-19?

COVID-19 has a broad range of health effects.  Infected individuals can have no symptoms, be asymptomatic, or have symptoms ranging from mild to severe. Symptoms can appear from 2-14 days post infection with the virus and typically include fever or chills, cough, difficulty breathing, fatigue, muscle/body aches, headache, new loss of taste and/or smell, sore throat, congestion, nausea or vomiting, and diarrhea.

#### For more information

The Centers for Disease Control (CDC) has more information on [COVID-19](https://www.cdc.gov/coronavirus/2019-ncov/your-health/about-covid-19.html), its [symptoms](https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html), and [how you can protect yourself](https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html) from SARS-CoV-2.
`,
    },
    {
      name: 'Maternal/Child health',
      description: `
The health and wellbeing of women, children, and families is intertwined and influenced by many factors, such as access to health services and education, clean air and water, adequate nutrition, and cultural and psychosocial factors. The period of time right before and after birth is a particularly crucial time for both moms and babies, as many common pregnancy complications may result in detrimental short- and long-term health outcomes.

### Preterm Birth

Preterm birth, defined as being born before 37 weeks of gestation, is the leading cause of newborn mortality. In 2019, 1 in 9 babies were born preterm in North Carolina and the rate of preterm birth in NC is highest for black infants (13.9%). 

### Why are we concerned about preterm birth? 

Being born too soon increases risk for long-term health and developmental problems that may last a lifetime, including intellectual disabilities and behavioral problems associated with brain development and breathing problems such as asthma that are associated with lung development. 

#### For more information about maternal-child health please visit [https://www.apha.org/topics-and-issues/maternal-and-child-health](https://www.apha.org/topics-and-issues/maternal-and-child-health) and [https://mchb.hrsa.gov/](https://mchb.hrsa.gov/).

#### For more information about the risks associated with preterm birth please see "Fighting premature birth: The Prematurity Campaign" [https://www.marchofdimes.org/mission/prematurity-campaign.aspx](https://www.marchofdimes.org/mission/prematurity-campaign.aspx).
`,
    }
  ],
  howToMap: `
In ENVIROSCAN, we provide health outcomes data in a variety of ways, depending on the data. 

Data on COVID-19 is provided by zip code and presented by total numbers of COVID cases, the number of cases per 10,000 and 100,000 residents and the number of COVID-related deaths.  

Data on preterm birth is provided at the Census tract level. 
`,
  dataCollection: `
The data related to COVID-19 were retrieved from the NC Department of Health and Human Services. 

The data related to preterm birth were obtained from birth certificate records through the North Carolina Birth Defects Monitoring Program, as part of the WELLWISE study (Principal Investigators Alex Keil and Rebecca Fry). Using  these records, live births in NC of mothers with known date of last menstrual period (LMP) between August 14, 2002 and February 19, 2013 (i.e. gestational age > 20 weeks by January 1, 2003 and < 45 weeks by December 31, 2013) were extracted. Records missing accurate information to geolocate or gestational age estimate were removed. Records were geolocated by using latitude and longitude coordinates provided on the birth certificate, if available, otherwise records were geocoded using ArcGIS to determine coordinates from reported maternal residence at birth. Records were merged in a spatial join in ArcGIS with US census boundaries for 2010 for census tracts and counties in NC. 
`,
}

export default function HealthOutcomes() {
  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ heroImage.src }
      />
      <MainContent>
        <Typography variant="h2">{ content.title }</Typography>

        <Typography paragraph>
          { content.blurb }
        </Typography>

        <Typography variant="h3">Why are we concerned about these indicators?</Typography>

        <Markdown src={ content.concern } />

        <Typography variant="h3">What health outcomes can I explore?</Typography>

        {
          content.outcomes.map(outcome => (
            <Fragment key={ outcome.name }>
              <Typography variant="h4">{ outcome.name }</Typography>
              <Markdown src={ outcome.description } />
            </Fragment>
          ))
        }        

        <Typography variant="h3">How do we map the data?</Typography>

        <Markdown src={ content.howToMap } />

        <Typography variant="h3">When and where were these data collected?</Typography>

        <Markdown src={ content.dataCollection } />

      </MainContent>
    </Fragment>
  )
}
