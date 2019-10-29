import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import theme from '../theme'
import { TextField } from 'react-admin'

const useStyles = {
  note: {
    color: '#fff',
    textAlign: 'center'
  },
  note0: {
    backgroundColor: theme.palette.secondary.main
  },
  note1: {
    backgroundColor: theme.palette.secondary.main
  },
  note2: {
    backgroundColor: '#FBB447'
  },
  note3: {
    backgroundColor: theme.palette.primary.main
  }
}

const NoteField = withStyles(useStyles)(({ classes, ...props }) => {
  return <TextField className={[classes[`note${props.record[props.source]}`], classes.note]} {...props} />
})

export default NoteField
