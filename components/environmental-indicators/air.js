import { Fragment, useState } from 'react'
import { Hero } from '../../components/hero'
import { MainContent } from '../../components/layout'
import heroImage from '../../images/hero-images/environmental-indicators.jpg'
import airPollutionIcon from '../../images/icons/air-pollution.png'
import { Card, CardHeader, CardContent, CardMedia, Collapse, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { KeyboardArrowDown as CollapseIcon } from '@material-ui/icons'
import { Markdown } from '../../components/markdown'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  media: {
    flex: '1 0 220px',
    backgroundSize: '175px',
    alignItems: 'center',
    backgroundPosition: 'center 1.5rem',
  },
});

const content = {
  title: 'Air',
  blurb: 'The air we breathe can sometimes be harmful to human health, but you may not be able to tell if the air is polluted by how it looks. NC ENVIROSCAN visualizes select measures of air pollution in North Carolina.',
  sections: [
    {
      title: 'Air Pollution',
      content: `When contaminants enter the air they can change the quality and safety of the air we breathe and potentially impact human health.`
    },
    {
      title: 'Which environmental indicators can I explore?',
      content: `In the ENVIROSCAN mapper tool we provide data on commonly measured air pollution chemicals in North Carolina.`
    },
    {
      title: `Why are we concerned about air pollutants?`,
      content: `We are focusing on these air pollutants because of their known human health risks.`
    },
  ],
  pollutants: [
    {
      name: 'Carbon Monoxide',
      id: 'carbon-monoxide',
      disabled: true,
      description: `Carbon Monoxide (CO) is a colorless, odorless gas. It is primarily released into the air when something is burned or through vehicle exhaust.  CO can also be released in the home through sources like gas stoves, unvented kerosene heaters, and wood burning fireplaces or furnaces.`,
      healthEffects: `Inhaled CO can reduce the amount of oxygen that can be transported to the heart and brain. High exposure to CO can cause symptoms such as dizziness, confusion, unconsciousness, and death.  Similar to other air pollutants, individuals who have heart or lung disease can be more vulnerable to effects of CO exposure.`,
      moreInformation: `
- The Environmental Protection Agency has [more information on carbon monoxide](https://www.epa.gov/co-pollution/basic-information-about-carbon-monoxide-co-outdoor-air-pollution#What%20is%20CO) and its associated health risks.
      `,
    },
    {
      name: 'Lead',
      id: 'lead',
      disabled: true,
      description: `Lead is a naturally occurring heavy metal.  In its natural state, it is most often found in the ground. Lead can get into the air through ore and metal mining processes, engine operation, and through lead-based fuels that are commonly used in aviation. Some manufacturing processes, such as the creation of batteries, and the disposal of waste can also contribute to lead levels in the air.`,
      healthEffects: `Airborne lead can enter the body through the lungs and travel through the blood.  Lead is known to affect a variety of organ systems, including the nervous, cardiovascular, immune, and reproductive systems. The most commonly discussed health effects of lead are behavioral problems, learning deficits, and lower IQ in children.  Children and infants are the most sensitive to nervous system effects of lead exposure, as their brains are still developing.`,
      moreInformation: `
- The Environmental Protection Agency has [more information on lead](https://www.epa.gov/lead-air-pollution/basic-information-about-lead-air-pollution#how) and its associated health risks.
      `,
    },
    {
      name: 'Nitrogen Dioxide',
      id: 'nitrogen-dioxide',
      disabled: true,
      description: `Nitrogen Dioxide (NO2) is a highly reactive gas.  It is primarily released into the air during the burning of fuel or from vehicle and industrial emissions.`,
      healthEffects: `NO2 exposure can cause airway irritation, coughing, wheezing, and difficulty breathing.  Exposure can also lead to hospital admissions and emergency room visits.  Similar to other air pollutants, individuals who have lung disease, like asthma, as well as children can be more vulnerable to effects of NO2 exposure.`,
      moreInformation: `
The Environmental Protection Agency has [more information on nitrogen dioxide](https://www.epa.gov/no2-pollution/basic-information-about-no2#What%20is%20NO2) and its associated health risks.
      `,
    },
    {
      name: 'Ozone',
      id: 'ozone',
      disabled: false,
      description: `Ozone is a gas made of three oxygen molecules. Ground-level ozone is formed by chemical reactions between common pollutants emitted by cars, power plants, and industrial manufacturing facilities, and sunlight.  As sunlight is necessary for this reaction, days with high levels of ozone in the air will mostly likely occur on hot, sunny days in urban environments. As ozone is a gas, it can also be transported from heavily polluted urban areas by wind to more rural areas. Ozone can affect all areas of North Carolina.`,
      healthEffects: `Ground-level ozone is known to cause coughing, irritated throat, and difficulty breathing in healthy individuals. In individuals who already have lung disease (ex: asthma, chronic bronchitis, COPD), ozone can have more serious effects. It can increase the frequency of symptoms and aggravate existing airway disease. Even some healthy individuals can be more susceptible to ozone-related symptoms.  If you are older, active or work outdoors, a child, or have certain genetic characteristics, you may experience a higher risk of ozone-related health effects.`,
      moreInformation: `
- The Environmental Protection Agency has [more information on ozone](https://www.epa.gov/ground-level-ozone-pollution/health-effects-ozone-pollution) and its associated health risks.
- [Printable pamphlets on ozone effects on air quality and health](https://www.epa.gov/ground-level-ozone-pollution/pamphlets-about-ozone-effects-air-quality-and-health)
- Realtime air quality index [by location](https://www.airnow.gov/). Air quality guide for ozone ([PDF](https://www.epa.gov/sites/default/files/2017-12/documents/air-quality-guide_ozone_2015.pdf)).
- Map ozone in North Carolina air.
      `,
    },
    {
      name: 'Particulate Matter',
      id: 'particulate-matter',
      disabled: false,
      description: `Particulate matter is a mixture of solid particles and liquid droplets in the air.  Particulate matter can include particles from dust, dirt, or smoke. These particles can be made up of hundreds of different chemicals. Particles can come from sources like construction sites, unpaved roads, fires, or as smoke from industrial buildings, but they can also be formed through chemical reactions in the air when mixing with other pollutant chemicals.\n\nParticulate matter is typically assessed by size, as the size of the particulate influences how far it can travel through the airway when inhaled. The most common sizes are PM10 and PM2.5. PM10 are particles that are generally 10 micrometers and smaller. PM2.5 are particles that are generally 2.5 micrometers and smaller. The tiny size of the particles can mean that they are very hard to see, but you can imagine their size by thinking about the thickness of a human hair. The thickness of a strand of human hair is 30 times larger than a PM2.5 particle.`,
      healthEffects: `PM10 and PM2.5 can be inhaled into your lungs and the smaller the particle, the further it can be inhaled. Some very small particulate can even get into the bloodstream through your airways. Particulate matter has been linked to health effects in both the lungs and the heart. These health effects can include lower lung function, irritated airways, cough, trouble breathing, heart attacks, and irregular heart rhythms. Individuals at most risk of these health effects, as well as worsened existing disease include individuals with heart or lung disease, children, and older adults.`,
      moreInformation: `
- The Environmental Protection Agency has [more information on particulate matter](https://www.epa.gov/pm-pollution/health-and-environmental-effects-particulate-matter-pm) and its associated health risks.
- Realtime air quality index [by location](https://www.airnow.gov/). Air quality guide for particulate matter ([PDF](https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1001EX6.txt)).
- Map ozone in North Carolina air.
      `,
    },
    {
      name: 'Sulfur Dioxide',
      id: 'sulfur-dioxide',
      disabled: true,
      description: `Sulfur Dioxide (SO2) is a toxic gas responsible for the smell of burnt matches. It is released naturally during volcanic activity, but can also be released through metal extraction processes, and by burning fossil fuels.`,
      healthEffects: `SO2 exposures have been shown to harm the lungs, including making breathing difficult. Similar to other air pollutants, individuals who have lung disease, as well as children can be more vulnerable to effects of SO2 exposure.`,
      moreInformation: `
The Environmental Protection Agency has [more information on sulfur dioxide](https://www.epa.gov/so2-pollution/sulfur-dioxide-basics#what%20is%20so2) and its associated health risks.
      `,
    },
  ],
}

export const AirPage = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h2">{ content.title }</Typography>
      <Typography paragraph>
        { content.blurb }
      </Typography>
      <Card className={ classes.card } elevation={ 0 }>
        <CardMedia image={ airPollutionIcon.src } className={ classes.media }/>
        <CardContent>

      {
        content.sections.map(section => {
          return (
            <Fragment key={ `section-${ section.title }` }>
              <Typography variant="h3">{ section.title }</Typography>
                  <Typography paragraph>
                    { section.content }
                  </Typography>
            </Fragment>
          )
        })
      }
                </CardContent>
              </Card>

      <Grid container spacing={ 4 }>
        {
          content.pollutants
            .sort((p, q) => p.disabled && !q.disabled ? 1 : -1)
            .map(pollutant => {
            return (
              <Grid item xs={ 12 } key={ pollutant.name }>
                <CollapsibleCard
                  key={ `pollutant-card-${ pollutant.name }` }
                  disabled={ pollutant.disabled }
                  title={ pollutant.name }
                >
                  <Typography variant="h5">What is it?</Typography>
                  <Markdown src={ pollutant.description } />

                  <Typography variant="h5">What are the health effects?</Typography>
                  <Markdown src={ pollutant.healthEffects } />

                  <Typography variant="h5">Where can I find more information?</Typography>
                  <Markdown src={ pollutant.moreInformation } />
                </CollapsibleCard>
              </Grid>
            )
          })
        }
      </Grid>
    </Fragment>
  )
}

const CollapsibleCard = ({ title, children, disabled = false }) => {
  const [expanded, setExpanded] = useState(false)

  const handleToggleExpanded = () => setExpanded(!expanded)

  return (
    <Card>
      <CardHeader
        title={ title }
        action={ disabled ? <div style={{ paddingTop: '14px', fontSize: '80%' }}>Coming Soon</div> : <IconButton onClick={ handleToggleExpanded }><CollapseIcon /></IconButton> }
      />
      <Collapse in={ expanded } timeout="auto" unmountOnExit>
        <CardContent>
          { children }
        </CardContent>
      </Collapse>
    </Card>

  )
}
