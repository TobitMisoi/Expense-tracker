import React from "react";
import { Icon, makeStyles } from "@material-ui/core";
import { FaCreditCard } from "react-icons/fa";
import { GiBank } from "react-icons/gi";

import { GridContainer, GridItem } from "../../components/Grid";
import {
  CardHeader,
  CardIcon,
  CardFooter,
  CardBody,
} from "../../components/Card";
import { Danger, Warning } from "../../components/typography";
import Card from "../../components/Card/card";
import styles from "./styles";
import Form from "../../components/Form/Form";
import Figure from "./components/figure";
import { Lists } from "../../components/Main";
import Chart from "./components/chartData";

const useStyles = makeStyles(styles);

function dashboard() {
  const classes = useStyles();

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color='primary'>
              <h2>Expense tracker</h2>
            </CardHeader>
            <CardBody>
              <Form />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='success'>
              <CardIcon color='rose'>
                <Icon color='primary'>
                  <FaCreditCard />
                </Icon>
              </CardIcon>
              <p className={classes.cardTitleWhite}>Income</p>
              <Figure title='Income' />
            </CardHeader>
            <CardBody>
              <Chart title='Income' />
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href='#pablo' onClick={(e) => e.preventDefault()}></a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='warning'>
              <CardIcon>
                <Icon color='primary'>
                  <GiBank />
                </Icon>
              </CardIcon>
              <p className={classes.cardTitleWhite}>Expense</p>
              <Figure title='Expense' />
            </CardHeader>
            <CardBody>
              <Chart title='Expense' />
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href='#pablo' onClick={(e) => e.preventDefault()}></a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem lg={6} xs={12}>
          <Card>
            <CardHeader>
              <h4>Recent Activity</h4>
            </CardHeader>
            <CardBody>
              <Lists />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default dashboard;
