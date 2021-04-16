import {  Switch, Route, Redirect } from 'react-router-dom';
import JavaScriptTopic from '../TopicComponents/JavaScriptTopic/JavaScriptTopic';
import DataStructuresTopic from '../TopicComponents/DataStructuresTopic/DataStructuresTopic';
import React from 'react';
import HtmlEditor from '../HtmlEditor/HtmlEditor';
import JSEditor from '../UtilComponents/Editor/JSEditor';

class RoutingContent extends React.Component {
  render() {
    return (
      <div className="jsc-content-space">
        <div id="scriptContentArea"></div>
      <Switch>
        <Route path="/javascript">
          <JavaScriptTopic />
        </Route>
        <Route path="/" exact>
          <Redirect to="/javascript" />
        </Route>
        
        <Route path="/datastructures" component={DataStructuresTopic}></Route>
        <Route path="/editor" component={HtmlEditor}></Route>
        <Route path="/jseditor">
        <JSEditor  scriptElement={document.getElementById('scriptContentArea')}></JSEditor>
        </Route>
      </Switch>
      </div>
    );
  }
}

export default RoutingContent;
