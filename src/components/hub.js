import React from "react";
import {Switch, Route} from "react-router-dom";

import Beranda from "./Beranda";
import HariBesar from "./Haribesar";
import Gallery from "./Gallery";

const Hub = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/Haribesar" component={HariBesar} />
        <Route path="/Gallery" component={Gallery} />
    </Switch>
)

export default Hub;