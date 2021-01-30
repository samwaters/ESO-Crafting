import { push } from 'connected-react-router'
import * as React from 'react'
import { connect } from 'react-redux'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface NavigationDrawerProps {
  open?: boolean
  onClose?: () => void
  navigate: (path: string) => void
  variant: 'permanent' | 'temporary'
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerContainer: {
    overflow: 'auto'
  },
  drawerPaper: {
    backgroundColor: theme.palette.background.default,
    width: 240
  },
  svg: {
    color: theme.palette.text.primary
  }
}))

const NavigationDrawerComponent: React.FunctionComponent<NavigationDrawerProps> = (props) => {
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
        <ListItem button key='alchemy' onClick={() => props.navigate('/alchemy')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Alchemy</ListItemText>
        </ListItem>
        <ListItem button key='blacksmithing' onClick={() => props.navigate('/blacksmithing')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Blacksmithing</ListItemText>
        </ListItem>
        <ListItem button key='clothing' onClick={() => props.navigate('/clothing')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Clothing</ListItemText>
        </ListItem>
        <ListItem button key='enchanting' onClick={() => props.navigate('/enchanting')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Enchanting</ListItemText>
        </ListItem>
        <ListItem button key='jewellery' onClick={() => props.navigate('/jewellery')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14A6,6 0 0,1 12,20A6,6 0 0,1 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,10.8 18.2,8.1 15.5,6.8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Jewellery</ListItemText>
        </ListItem>
        <ListItem button key='provisioning' onClick={() => props.navigate('/provisioning')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Provisioning</ListItemText>
        </ListItem>
        <ListItem button key='woodworking' onClick={() => props.navigate('/woodworking')}>
          <ListItemIcon>
            <SvgIcon>
              <path className={classes.svg} d="M3,3V5A2,2 0 0,1 5,7V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V7A2,2 0 0,1 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Woodworking</ListItemText>
        </ListItem>
      </List>
    </div>
  </Drawer>
}

export const NavigationDrawer = connect(
  () => ({}),
  (dispatch) => ({
    navigate: (path: string) => dispatch(push(path))
  })
)(NavigationDrawerComponent)
