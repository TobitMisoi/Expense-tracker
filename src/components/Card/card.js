import React from 'react'
import cs from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(styles)

export default function Card(props) {
  const classes = useStyles()
  const { className, children, plain, profile, chart, ...rest } = props
  const cardClasses = cs({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
}
