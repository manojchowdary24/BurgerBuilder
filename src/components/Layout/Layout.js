import React from "react";
import Auxillary from "../../hoc/Auxillary";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.css";
import ToolBar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Auxillary>
    <ToolBar />
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </Auxillary>
);

export default Layout;
