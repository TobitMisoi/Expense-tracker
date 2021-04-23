import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const useStyles = makeStyles(styles)

export default function GridItem(props) {
  const classes = useStyles()

  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props

  return (
    <Grid item className={classes.grid} {...rest}>
      {children}
    </Grid>
  )
}

GridItem.propTypes = {
  children: PropTypes.node
}
