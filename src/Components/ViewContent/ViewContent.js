import Banner from '../Banner/Banner';
import RoutingContent from '../RoutingContent/RoutingContent';

function ViewContent(props) {
  return (
    <div className="content">
      <Banner sharedData={props.sharedData}></Banner>
      <RoutingContent></RoutingContent>
    </div>
  );
}

export default ViewContent;
