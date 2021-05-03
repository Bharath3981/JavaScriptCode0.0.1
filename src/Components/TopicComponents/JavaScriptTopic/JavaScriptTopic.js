import {  Switch, Route } from 'react-router-dom';
import History  from './History';
import Prototype  from './Prototype/Prototype';
import React from 'react';
import { AppContext } from '../../../AppContext/AppContext';

import { FaHistory } from 'react-icons/fa';
import { GrInherit } from 'react-icons/gr';
import { RiBracketsFill } from 'react-icons/ri';
import Arrays from './Array/Arrays';
import ArrayMethods from './Array/ArrayMethods';
import PrototypeInheritiance from './Prototype/PrototypeInheritiance';

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
            label: 'Array', 
            path: 'javascript/arrays',
          },
          {
            id: 202, 
            label: 'Array Methods', 
            path: 'javascript/arraymethods',
          }
        ]
      },
      { 
        id: 3, 
        icon: GrInherit, 
        label: 'Prototype', 
        path: '',
        subTopics: [
          {
            id: 301, 
            label: 'Prototype', 
            path: 'javascript/prototype',
          },{
            id: 302, 
            label: 'Inheritance', 
            path: 'javascript/prototypeinheritance',
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
        <Route path="/javascript/arrays" exact component={Arrays}></Route>
        <Route path="/javascript/arraymethods" exact component={ArrayMethods}></Route>
        <Route path="/javascript/prototype" exact component={Prototype}></Route>
        <Route path="/javascript/prototypeinheritance" exact component={PrototypeInheritiance}></Route>
      </Switch>
    );
  }
}


export default JavaScriptTopic;
