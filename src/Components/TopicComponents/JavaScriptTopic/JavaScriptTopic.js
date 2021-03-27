import {  Switch, Route } from 'react-router-dom';
import History  from '../JavaScriptTopic/History';
import Prototype  from '../JavaScriptTopic/Prototype';
import React from 'react';
import { AppContext } from '../../../AppContext/AppContext';

import { FaHistory } from 'react-icons/fa';
import { GrInherit } from 'react-icons/gr';

class JavaScriptTopic extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    const topics = [
      { topicId: 1, topicIcon: FaHistory, topicLabel: 'History', subTopic: 'javascript'},
      { topicId: 2, topicIcon: GrInherit, topicLabel: 'Prototype', subTopic: 'javascript/prototype'}
    ];
    this.context.setLeftNavMenus(topics);
  }

  render() {
    return ( 
      <Switch>
        <Route path="/javascript" exact component={History}></Route>
        <Route path="/javascript/prototype" exact component={Prototype}></Route>
      </Switch>
    );
  }
}


export default JavaScriptTopic;
