import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContext } from '../../../AppContext/AppContext';
import { MdViewArray } from 'react-icons/md';
import { BsViewStacked } from 'react-icons/bs';
import Stacks from './Stacks';
import Queues from './Queues';

class DataStructuresTopic extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    const topics = [
      { topicId: 1, topicIcon: BsViewStacked, topicLabel: 'Stacks', subTopic: 'datastructures'},
      { topicId: 2, topicIcon: MdViewArray, topicLabel: 'Queues', subTopic: 'datastructures/queues'}
    ];
    this.context.setLeftNavMenus(topics);
    console.log(this.context);
  }
  render() {
    return (
      <Switch>
        <Route path="/datastructures" exact component={Stacks}></Route>
        <Route path="/datastructures/queues" exact component={Queues}></Route>
      </Switch>
    );
  }
}
export default DataStructuresTopic;
