import { CircularProgress, makeStyles } from '@material-ui/core'

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