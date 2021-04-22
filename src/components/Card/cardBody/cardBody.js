import React from 'react'
// proptypes import
import PropTypes from 'prop-types'
// classnames
import cs from 'classnames'
import { makeStyles } from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

function cardBody(props) {
  const classes = useStyles()

  const { children, className, plain, profile, ...rest } = props

  const cx = cs({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  })

  return (
    <div className={cx} {...rest}>
      {children}
    </div>
  )
}

cardBody.propTypes = {
  children: PropTypes.node,
  plain: PropTypes.bool,
  profile: PropTypes.bool
}

export default cardBody
