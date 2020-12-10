import CssBaseline from '@material-ui/core/CssBaseline'
import { Hidden, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import * as React from 'react'
import { Route, Switch } from 'react-router'

import { AlchemyComponent } from './components/alchemy/alchemy'
import { BlacksmithingComponent } from './components/blacksmithing/blacksmithing'
import { ClothingComponent } from './components/clothing/clothing'
import { EnchantingComponent } from './components/enchanting/enchanting'
import { Header } from './components/header/header'
import { JewelleryComponent } from './components/jewellery/jewellery'
import { Loader } from './components/loader/loader'
import { NavigationDrawer } from './components/navigation/navigationdrawer'
import { NotFoundComponent } from './components/notfound/notfound'
import { ProvisioningComponent } from './components/provisioning/provisioning'
import { theme } from './theme/theme'
import { WoodworkingComponent } from './components/woodworking/woodworking'

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
            <Route path='/alchemy' component={AlchemyComponent} />
            <Route path='/blacksmithing' component={BlacksmithingComponent} />
            <Route path='/clothing' component={ClothingComponent} />
            <Route path='/enchanting' component={EnchantingComponent} />
            <Route path='/jewellery' component={JewelleryComponent} />
            <Route path='/provisioning' component={ProvisioningComponent} />
            <Route path='/woodworking' component={WoodworkingComponent} />
            <Route path='*' component={NotFoundComponent} />
          </Switch>
        </div>
      </div>
    </Loader>
  </ThemeProvider>
}
