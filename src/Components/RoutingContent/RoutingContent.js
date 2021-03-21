import TopicCard from '../UtilComponents/TopicCard/TopicCard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JavaScriptTopic from '../TopicComponents/JavaScriptTopic/JavaScriptTopic';
import DataStructuresTopic from '../TopicComponents/DataStructuresTopic/DataStructuresTopic';

function RoutingContent() {
  return (
    <Switch>
      <Route path="/" exact component={JavaScriptTopic}></Route>
      <Route path="/datastructures" component={DataStructuresTopic}></Route>
    </Switch>
  );
}

export default RoutingContent;
