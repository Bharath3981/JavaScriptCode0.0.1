import {  Switch, Route } from 'react-router-dom';
import History  from '../JavaScriptTopic/History';
import Prototype  from '../JavaScriptTopic/Prototype';
import Context from '../../../Store/context';
import { useContext } from 'react';
import { FaHistory } from 'react-icons/fa';
import { GrInherit } from 'react-icons/gr';

function JavaScriptTopic() {
  const { leftNavMenus, setLeftNavMenusHandler } = useContext(Context);
  //setLeftNavMenusHandler( [] );
  const topics = [
    { topicId: 1, topicIcon: FaHistory, topicLabel: 'History', subTopic: 'javascript'},
    { topicId: 2, topicIcon: GrInherit, topicLabel: 'Prototype', subTopic: 'javascript/prototype'}
  ];
  return ( 
    <Switch>
      <Route path="/javascript" exact component={History}></Route>
      <Route path="/javascript/prototype" exact component={Prototype}></Route>
    </Switch>
  );
}

export default JavaScriptTopic;
