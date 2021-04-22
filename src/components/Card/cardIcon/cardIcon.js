import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import cs from 'classnames'

import styles from './styles'

const useStyles = makeStyles(styles)

export default function CardIcon(props) {
  const classes = useStyles()
  const { className, children, color, ...rest } = props

  const cardIconClasses = cs({
    [classes.cardIcon]: true,
    [classes[color + 'CardHeader']]: color,
    [className]: className !== undefined
  })
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  )
}

CardIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ])
}
