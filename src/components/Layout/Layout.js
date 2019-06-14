import React from "react";
import Auxillary from "../../hoc/Auxillary";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.css";

const Layout = props => (
  <Auxillary>
    <div> Toolbar,Sidebar,Backdrop</div>
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </Auxillary>
);

export default Layout;
