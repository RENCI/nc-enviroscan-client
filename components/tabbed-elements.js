import { Fragment, useMemo, useState } from 'react'
import { Box, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Markdown } from './markdown'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  tabsContainer: {
    minWidth: '75px',
  },
  flexContainer: {
    gap: theme.spacing(2),
  },
  tab: {
    minWidth: 'unset',
    flex: 1,
    filter: 'opacity(0.5) saturate(0.5)',
  },
  active: {
    filter: 'opacity(1.0)',
  },
  tabPanel: {
    padding: `0 ${ theme.spacing(1) }px`,
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
  const largeScreen = useMediaQuery('(min-width: 800px)')

  const handleChangeTab = (event, value) => setCurrentTab(value)

  return (
    <Box sx={{ display: 'flex', gap: '2rem', flexDirection: largeScreen ? 'row' : 'column', marginLeft: '1rem' }}>
      <Tabs
        orientation={ largeScreen ? 'vertical' : 'horizontal' }
        value={ currentTab }
        onChange={ handleChangeTab }
        aria-label="water contaminants"
        TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
        classes={{ root: classes.tabsContainer, flexContainer: classes.flexContainer }}
      >
        {
          elements.map((element, i) => (
            <Tab
              key={ `contaminant-tab-${ element.name }` }
              className={ `${ classes.tab } ${ currentTab === i ? classes.active : undefined }` }
              icon={ <Image src={ element.icon.src } aria-label={ element } width={ 75 } height={ 75 } /> }
            />
          ))
        }
      </Tabs>
      <TabPanel element={ elements[currentTab] } />
    </Box>
  )
}
