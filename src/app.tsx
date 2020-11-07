import CssBaseline from '@material-ui/core/CssBaseline'
import { Hidden, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import * as React from 'react'

import { Route, Switch } from 'react-router'
import { Header } from './components/header/header'
import { Loader } from './components/loader/loader'
import { NavigationDrawer } from './components/navigation/navigationdrawer'
import { theme } from './theme/theme'

interface AppProps {
  loadAppConfig: () => void
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export const App = () => {
  const classes = useStyles()
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Loader>
      <Header/>
      <div className={classes.container}>
        <Hidden smDown implementation='css'>
          <NavigationDrawer variant='permanent' />
        </Hidden>
        <div className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path='/'>
              <p>DASHBOARD</p>
            </Route>
            <Route path='/about'>
              <p>ABOUT US</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Loader>
  </ThemeProvider>
}
