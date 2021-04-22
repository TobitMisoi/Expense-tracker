import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'

import useStyles from './styles'

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles()

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity='success'
          elevation={6}
          variant='filled'
        >
          Transaction succesfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

CustomizedSnackbar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.bool
}

export default CustomizedSnackbar
