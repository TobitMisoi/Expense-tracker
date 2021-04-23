import React from 'react'
import { makeStyles } from '@material-ui/core'
import useTransactions from '../../../useTransactions'
import { grayColor } from '../../../assets/styles/jss/main'

const styles = {
  cardTitle: {
    color: grayColor[2],
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: grayColor[1],
      fontWeight: '400',
      lineHeight: '1'
    }
  }
}

const useStyles = makeStyles(styles)

// eslint-disable-next-line react/prop-types
const Figure = ({ title }) => {
  const classes = useStyles()
  const { total } = useTransactions(title)

  return (
    <h3 color='red' className={classes.cardTitle} title={title}>
      <small>$</small> {total}
    </h3>
  )
}

export default Figure
