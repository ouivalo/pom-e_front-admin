import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const compostriTheme = createMuiTheme({
  palette: {
    primary: { main: '#A4C538' },
    secondary: { main: '#E86134' },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'white' // Some CSS
      }
    }
  }
})

export default compostriTheme
