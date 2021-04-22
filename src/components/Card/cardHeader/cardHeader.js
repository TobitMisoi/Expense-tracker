import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import { makeStyles } from '@material-ui/core'
import styles from './styles'
const useStyles = makeStyles(styles)

export default function cardHeader(props) {
  const classes = useStyles()
  const { className, children, plain, icon, stats, color, ...rest } = props

  const cx = cs({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  })

  return (
    <div className={cx} {...rest}>
      {children}
    </div>
  )
}

cardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
}
