import { Fragment } from 'react'
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core'
import { ExpandMore as ExpandIcon } from '@material-ui/icons'

const useStyles = makeStyles({
  details: {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const Accordion = ({ items }) => {
  const classes = useStyles()
  return (
    <Fragment>
      {
        items.map(item => (
          <MuiAccordion key={ item.summary }>
            <AccordionSummary expandIcon={ <ExpandIcon /> }>
              { item.summary }
            </AccordionSummary>
            <AccordionDetails className={ classes.details }>
              { item.details }
            </AccordionDetails>
          </MuiAccordion>
        ))
      }
    </Fragment>
  )
}