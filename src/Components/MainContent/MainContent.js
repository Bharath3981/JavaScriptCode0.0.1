import React, {useState} from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import ViewContent from '../ViewContent/ViewContent';
import { BrowserRouter as Router } from 'react-router-dom';

function MainContent() {
  const [toggleTopNavBar, setToggleTopNavBar] = useState(false);
  function toggleCollpase( value ) {
    if( value ) {
      document.querySelector('.navbar.navbar-top').style.borderBottom = 'none';
    } else {
      document.querySelector('.navbar.navbar-top').style.borderBottom = '1px solid #5e6e82';
    }
    setToggleTopNavBar( value );
  }
  return (
    <main id="top">
      <div className="container-fluid" data-layout="container">
        <Router>
        <LeftNavBar sharedData={{toggleTopNavBar: toggleTopNavBar}}></LeftNavBar>
        <ViewContent sharedData={{toggleCollpase: toggleCollpase, toggleTopNavBar: toggleTopNavBar}}></ViewContent>
        </Router>
      </div>
    </main>
  );
}

export default MainContent;
