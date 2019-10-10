// in src/MyAppBar.js
import React from 'react'
import { AppBar as RAAppbar } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'

import { ReactComponent as Logo } from './../logo.svg'

const styles = {
  logoWrapper: {
    flex: 1,
    textAlign: 'center'
  }
}

const AppBar = withStyles(styles)(({ classes, ...props }) => (
  <RAAppbar {...props} color="primary">
    <div className={classes.logoWrapper}>
      <Logo />
    </div>
  </RAAppbar>
))

export default AppBar
