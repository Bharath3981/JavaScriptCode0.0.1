import {  Switch, Route, Redirect } from 'react-router-dom';
import JavaScriptTopic from '../TopicComponents/JavaScriptTopic/JavaScriptTopic';
import DataStructuresTopic from '../TopicComponents/DataStructuresTopic/DataStructuresTopic';
import React from 'react';

class RoutingContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/javascript">
          <JavaScriptTopic />
        </Route>
        <Route path="/" exact>
          <Redirect to="/javascript" />
        </Route>
        
        <Route path="/datastructures" component={DataStructuresTopic}></Route>
      </Switch>
    );
  }
}

export default RoutingContent;
