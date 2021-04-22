import React from 'react'
import cs from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

export default function CardFooter(props) {
  const classes = useStyles()
  const { className, children, plain, profile, stats, chart, ...rest } = props
  const cx = cs({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  })
  return (
    <div className={cx} {...rest}>
      {children}
    </div>
  )
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
}
