import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import Home from "../../../pages/home/Home"
import Intro from "../../../pages/intro/Intro"
import Searching from '../../../pages/searching/Searching'
import Statistic from '../../../pages/statistic/Statistic'
import "./ContentBody.css";

class ContentBody extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="ContentBody">
        <Switch>
          <Route exact = {true} path="/" component={Home} />
          <Route path= "/menu-content" component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/searching" component={Searching} />
          <Route path="/statistic" component={Statistic} />
          <Route render={() => <div className="NotFoundMessage">404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }

  componentDidMount () {
  }
}

export default ContentBody;