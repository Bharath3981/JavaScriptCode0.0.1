import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContext } from '../../../AppContext/AppContext';
import { MdViewArray } from 'react-icons/md';
import { BsViewStacked } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import Stacks from './Stacks';
import Queues from './Queues';
import LinkedList from './LinkedList';

class DataStructuresTopic extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    const topics = [
      { id: 1, icon: BsViewStacked, label: 'Stacks', path: 'datastructures'},
      { id: 2, icon: MdViewArray, label: 'Queues', path: 'datastructures/queues'},
      { id: 3, icon: BiLink, label: 'Linked List', path: 'datastructures/linkedlist'}
    ];
    this.context.setLeftNavMenus(topics);
    console.log(this.context);
  }
  render() {
    return (
      <Switch>
        <Route path="/datastructures" exact component={Stacks}></Route>
        <Route path="/datastructures/queues" exact component={Queues}></Route>
        <Route path="/datastructures/linkedlist" exact component={LinkedList}></Route>
      </Switch>
    );
  }
}
export default DataStructuresTopic;
