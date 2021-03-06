import { push } from 'connected-react-router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AppBar, IconButton, Hidden, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Info, Menu, SportsEsports } from '@material-ui/icons'

import { NavigationDrawer } from '../navigation/navigationdrawer'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1
  }
}))

interface HeaderProps {
  navigate: (path: string) => void
}

const header = (props: HeaderProps) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  return <div>
    <AppBar className={classes.appBar} position='fixed'>
      <Toolbar>
        <Hidden mdUp implementation='css'>
          <IconButton
            aria-label='menu'
            edge='start'
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden smDown implementation='css'>
          <IconButton aria-label='menu' edge='start' color='inherit' onClick={() => props.navigate('/')}>
            <SportsEsports />
          </IconButton>
        </Hidden>
        <Typography className={classes.title} variant="h6">
          ESO Crafting
        </Typography>
        <IconButton
          color='inherit'
          onClick={() => props.navigate('/about')}
        >
          <Info />
        </IconButton>
      </Toolbar>
    </AppBar>
    <NavigationDrawer open={drawerOpen} onClick={(item: string) => props.navigate(`/${item}`)} onClose={() => setDrawerOpen(false)} variant='temporary' />
  </div>
}

export const Header = connect(
  () => ({

  }),
  (dispatch) => ({
    navigate: (path: string) => dispatch(push(path))
  })
)(header)
