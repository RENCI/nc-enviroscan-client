import { CircularProgress, makeStyles } from '@mui/material'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const LoadingIndicator = () => {
  const classes = useStyles()
  
  return (
    <div className={ classes.container }>
      <CircularProgress />
    </div>
  )
}