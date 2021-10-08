import { Fragment } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

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
});

const content = {
  title: 'Soil',
}

export const SoilPage = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h2">{ content.title }</Typography>

      <Typography paragraph>Coming soon.</Typography>
    </Fragment>
  )
}
