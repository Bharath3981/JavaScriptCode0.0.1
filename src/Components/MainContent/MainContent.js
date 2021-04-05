import React from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import ViewContent from '../ViewContent/ViewContent';
import { BrowserRouter as Router } from 'react-router-dom';

class MainContent extends React.Component {
  render() {
    return (
      <main id="top">
        <div className="container-fluid" data-layout="container">
          <Router>
          <LeftNavBar></LeftNavBar>
          <ViewContent></ViewContent>
          </Router>
        </div>
      </main>
    );
  }
}


export default MainContent;
