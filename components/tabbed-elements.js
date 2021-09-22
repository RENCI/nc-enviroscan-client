import { Fragment, useMemo, useState } from 'react'
import { Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core'
import { Markdown } from './markdown'

const useStyles = makeStyles(theme => ({
  tab: {
    minWidth: 'unset',
    flex: 1,
    filter: 'opacity(0.5) saturate(0.5)',
  },
  active: {
    filter: 'opacity(1.0)',
  },
  tabPanel: {
    padding: `${ theme.spacing(3) }px 0`,
    '& h4': {
      color: 'var(--color-enviro)',
      textAlign: 'center',
    },
  },
}))

const TabPanel = ({ element }) => {
  const classes = useStyles()
  return (
    <div className={ classes.tabPanel }>
      <Typography variant="h4">{ element.name }</Typography>
      <br />
      <Markdown src={ element.content } />
    </div>
  )
}

export const ElementTabs = ({ elements }) => {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState(0)

  const handleChangeTab = (event, value) => setCurrentTab(value)

  return (
    <Fragment>
      <Tabs
        value={ currentTab }
        onChange={ handleChangeTab }
        aria-label="water contaminants"
        TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
      >
        {
          elements.map((element, i) => (
            <Tab
              key={ `contaminant-tab-${ element.name }` }
              className={ `${ classes.tab } ${ currentTab === i ? classes.active : undefined }` }
              icon={ <img src={ element.icon.src } width="70" aria-label={ element } /> }
            />
          ))
        }
      </Tabs>
      <TabPanel element={ elements[currentTab] } />
    </Fragment>
  )
}
