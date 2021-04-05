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
      { 
        id: 1, 
        icon: FaHistory, 
        label: 'History', 
        path: 'javascript'
      },
      { 
        id: 2, 
        icon: GrInherit, 
        label: 'Prototype', 
        path: 'javascript/',
        subTopics: [
          {
            id: 201, 
            icon: GrInherit, 
            label: 'Prototype1', 
            path: 'javascript/prototype',
          },{
            id: 202, 
            icon: GrInherit, 
            label: 'Prototype2', 
            path: 'javascript/prototype2',
          }
        ]
      }
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
