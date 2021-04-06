import {  Switch, Route } from 'react-router-dom';
import History  from './History';
import Prototype  from '../JavaScriptTopic/Prototype';
import React from 'react';
import { AppContext } from '../../../AppContext/AppContext';

import { FaHistory } from 'react-icons/fa';
import { GrInherit } from 'react-icons/gr';
import { RiBracketsFill } from 'react-icons/ri';
import Arrays from './Arrays';

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
        icon: RiBracketsFill, 
        label: 'Arrays', 
        path: '',
        subTopics: [
          {
            id: 201, 
            label: 'What is an array?', 
            path: 'javascript/arrays',
          }
        ]
      },
      { 
        id: 3, 
        icon: GrInherit, 
        label: 'Prototype', 
        path: 'javascript/prototype'
      }
    ];
    this.context.setLeftNavMenus(topics);
  }

  render() {
    return ( 
      <Switch>
        <Route path="/javascript" exact component={History}></Route>
        <Route path="/javascript/arrays" exact component={Arrays}></Route>
        <Route path="/javascript/prototype" exact component={Prototype}></Route>
      </Switch>
    );
  }
}


export default JavaScriptTopic;
