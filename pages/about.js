import { MainContent } from '../components/layout'
import { Typography } from '@material-ui/core'
import { Markdown } from '../components/markdown'

const content = {
  title: 'About NC Enviroscan',
  description: `
NC ENVIROSCAN was developed to provide a user-friendly tool that increases North
Carolina communities’ awareness of key environmental indicators of concern, key
social stressors of concern and health outcome information, such as that related
to COVID-19 cases. It is also designed to be a tool for NC public health
researchers to identify communities at greatest public health risk to inform
research to action. This project will help researchers understand environmental
contributions to COVID-19 and other health outcomes.

### Background

NC ENVIROSCAN is a project of the UNC Superfund Research Program (UNC SRP) and
UNC Institute of Environmental Health Solutions (UNC IEHS) in partnership with
the Renaissance Computing Institute (RENCI). 

The idea for NC ENVIROSCAN was born out of a creativity hub brainstorming
session by a team of researchers from the UNC Gillings School of Global
Public Health, UNC School of Medicine, Carolina Consortium on Human Development,
UNC Institute for the Environment, UNC School of Social Work, and UNC Health. 

Initial funding to support NC ENVIROSCAN was provided in the form of an
administrative supplement from the National Institute of Environmental Health
Sciences to UNC SRP’s Data Management & Analysis Core (DMAC) (#P42 ES031007).

The Renaissance Computing Institute (RENCI), directed by DMAC Leader Stan
Ahalt, developed the mapping tool and user interface.  RENCI is a
multidisciplinary data science research institute at UNC-Chapel Hill, whose
Earth Data Science Group uses leading edge cyberinfrastructure and advanced
environmental modeling to enable research discovery and practical applications.

The development team is particularly grateful for the review and feedback
provided by our external advisors and their constituents, including the NC
Department of Health & Human Services’ Occupational and Environmental Epidemiology
Branch, and UNC SRP Public Health Action Committee (PHAC) community partners
Clean Water for North Carolina, Winyah Rivers Alliance & the Lumber Riverkeeper,
and other SRP PHAC members.

We would like to acknowledge the hard work of individuals on the initial
development team including:

### UNC SRP
Rebecca Fry, Center Director
Andrew George, Community Engagement Coordinator
Kathleen Gray, Community Engagement Core Leader
Lauren Eaves, SRP Trainee
Julia Rager, Data Management & Analysis Core Leader
Megan Rodgers, Research Translation Assistant
Sarah Yelton, Research Translation Coordinator
RENCI 
- Chris Lenhardt, Domain Scientist
- Marcus Anderson, Visual Arts Specialist
- Laurie Bernadel, Web Developer
- Jim McManus, Research Software Developer
- Matt Watson, Web Architect
- External Advisors
- Jefferson Currie, Winyah Rivers Alliance
- Kim Gaetz, NC Department of Health & Human Services
- Virginia Guidry, NC Department of Health & Human Services
- Crystal Lee Pow Jackson, NC Department of Health & Human Services
- Amanda Strawderman: Clean Water for North Carolina
- Rachel Velez, Clean Water for North Carolina
`,
}

export default function About() {
  const { title, description } = content
  return (
    <MainContent>
      <Typography variant="h2">{ title }</Typography>
      <Markdown src={ description } />
    </MainContent>
  )
}
