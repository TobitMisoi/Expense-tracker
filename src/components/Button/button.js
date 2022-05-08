/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import React from "react";
import styles from "./styles";

const useStyles = makeStyles(styles);

function Button({ children, ...rest }) {
  const classes = useStyles();

  const csx = classNames({
    [classes.button]: true,
  });

  return (
    <button
      className={csx}
      //   style={{ background: "transparent", padding: "1rem" }}
    >
      {children}
    </button>
  );
}

export default Button;
