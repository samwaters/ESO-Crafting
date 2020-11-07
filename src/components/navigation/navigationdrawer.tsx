import * as React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface NavigationDrawerProps {
  open?: boolean
  onClose?: () => void
  variant: 'permanent' | 'temporary'
}

const useStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerContainer: {
    overflow: 'auto'
  },
  drawerPaper: {
    width: 240
  }
})

export const NavigationDrawer: React.FunctionComponent<NavigationDrawerProps> = (props) => {
  const classes = useStyles()
  return <Drawer
    className={classes.drawer}
    variant={props.variant}
    classes={{
      paper: classes.drawerPaper
    }}
    onClose={props.onClose}
    open={props.open}
  >
    <div className={classes.drawerContainer}>
      { props.variant === 'permanent' && <Toolbar /> }
      <List>
        <ListItem button key='alchemy'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Alchemy</ListItemText>
        </ListItem>
        <ListItem button key='blacksmithing'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Blacksmithing</ListItemText>
        </ListItem>
        <ListItem button key='clothing'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Clothing</ListItemText>
        </ListItem>
        <ListItem button key='enchanting'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Enchanting</ListItemText>
        </ListItem>
        <ListItem button key='jewelry'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Jewelry</ListItemText>
        </ListItem>
        <ListItem button key='provisioning'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Provisioning</ListItemText>
        </ListItem>
        <ListItem button key='woodworking'>
          <ListItemIcon>
            <SvgIcon>
              <path fill="currentColor" d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Woodworking</ListItemText>
        </ListItem>
      </List>
    </div>
  </Drawer>
}
