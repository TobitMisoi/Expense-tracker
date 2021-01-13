import { Grid } from '@material-ui/core';
import React from 'react';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import './index.css';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();


    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }} >
                <Grid item xs={12} sm={4} >
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Details title="Expense" />
                </Grid>
            </Grid>
            App
        </div>
    )
}

export default App;
