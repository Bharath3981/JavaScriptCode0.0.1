import Banner from '../Banner/Banner';
import RoutingContent from '../RoutingContent/RoutingContent';
import React from 'react';

class ViewContent extends React.Component {
  render() {
    return (
      <div className="content">
        <Banner></Banner>
        <RoutingContent></RoutingContent>
      </div>
    );
  }
}

export default ViewContent;
