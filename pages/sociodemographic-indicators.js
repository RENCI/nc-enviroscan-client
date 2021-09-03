import { Fragment } from 'react'
import { Link } from '../components/link'
import { Hero } from '../components/hero'
import { MainContent } from '../components/layout'
import { List, ListItem, Typography } from '@material-ui/core'
import { Markdown } from '../components/markdown'

const content = {
  title: 'Sociodemographic Indicators',
  markdown: `
## Sociodemographic Indicators

NC ENVIROSCAN contains information on social and demographic indicators that are important
for understanding the population characteristics in an area. Exploring these indicators
allows users to examine whether certain populations may be more vulnerable than others to
exposure to toxic chemicals or particular health outcomes.

### Why are we concerned about these indicators?

Certain groups of people, including those living in poverty and certain racial or ethnic
groups, can be disproportionately burdened by exposure to pollution in the environment,
and as result, at greater risk of experiencing adverse health outcomes.

### Which sociodemographic indicators can I explore?

#### Poverty

People living in poverty are less likely to have access to resources and medical care that
can help prevent or treat illnesses caused by environmental exposures. Poverty in the
United States is measured against one out of 48 possible poverty thresholds, which vary by
the size of the family and age of the members. ENVIROSCAN maps the percentage of the population
in a census tract with an income level below the poverty threshold for their family size.

##### For more information

- [How the US Census Measures Poverty](https://www.census.gov/topics/income-poverty/poverty/about.html)
- Map poverty in NC (Link to launch mapping tool with preconfigured view of poverty indicator)

#### Race & Ethnicity

Research has shown that certain racial and ethnic groups are disproportionately affected by
exposure to toxic environmental chemicals. In ENVIROSCAN, users can map the percentage of
the population in a given Census tract that identify as the following races: Asian, Black
or African American, Native American, Native Hawaiian or Pacific Islander, or White. Users
can also map the percentage of the population that identify as Hispanic.

##### For more information
- [About Race](https://www.census.gov/topics/population/race/about.html) (US Census)
- [About Hispanic Origin](https://www.census.gov/topics/population/hispanic-origin/about.html) (US Census)

#### Linguistic Isolation

Linguistic isolation means living in a household in which all members aged 14 years and older
speak a non-English language and do not speak English “very well.” Linguistically isolated
populations may experience a language barrier that prevents them from accessing resources
that enable them to prevent and manage illness resulting from environmental exposures.

##### For more information

- [About Language Use](https://www.census.gov/topics/population/language-use/about.html)

### How do we map the data?

In ENVIROSCAN, we provide sociodemographic data as a percentage of the total population in each US Census tract.

### When and where were these data collected?

These data were retrieved from the 2019 U.S. Census American Community Survey. They are
based on a 5-year estimate, which is a "period" estimate that represents data collected
over a period of time, to increase statistical reliability.
`
}

export default function SociodemographicIndicators() {
  return (
    <Fragment>
      <Hero
        title={ content.title }
        backgroundImage={ 'https://picsum.photos/1280/402' }
      />
      <MainContent>
        <Markdown
          src={ content.markdown }
        />
      </MainContent>
    </Fragment>
  )
}
