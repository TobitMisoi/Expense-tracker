import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import Form from '../Form/Form'
import List from './List/List'
import useStyles from './styles'

const Main = () => {
  const classes = useStyles()
  const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card classes={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance ${balance}
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        ></Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent classes={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
