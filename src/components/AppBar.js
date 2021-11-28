// in src/MyAppBar.js
import React from 'react'
import { AppBar as RAAppbar, UserMenu as RAUserMenu, MenuItemLink } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import jwtDecode from 'jwt-decode'

import { ReactComponent as Logo } from './../logo.svg'

const styles = {
  logoWrapper: {
    flex: 1,
    textAlign: 'center'
  }
}

const UserMenu = props => {
  let username = 'Profile'
  const token = localStorage.getItem('token')
  if (token) {
    const user = jwtDecode(token)
    username = user.username
  }

  return (
    <RAUserMenu {...props}>
      <MenuItemLink to="/mon-profile" primaryText={username} leftIcon={<SettingsIcon />} />
    </RAUserMenu>
  )
}

const AppBar = withStyles(styles)(({ classes, ...props }) => (
  <RAAppbar {...props} color="primary" userMenu={<UserMenu />}>
    <div className={classes.logoWrapper}>
      <Logo />
    </div>
  </RAAppbar>
))

export default AppBar
