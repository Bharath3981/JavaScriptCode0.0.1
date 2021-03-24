import React from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import ViewContent from '../ViewContent/ViewContent';
import { BrowserRouter as Router } from 'react-router-dom';

class MainContent extends React.Component {
  render() {
    // const [toggleTopNavBar, setToggleTopNavBar] = useState(false);
    // function toggleCollpase( value ) {
    //   setToggleTopNavBar( value );
    // }
    return (
      <main id="top">
        <div className="container-fluid" data-layout="container">
          <Router>
          <LeftNavBar /*sharedData={{toggleTopNavBar: toggleTopNavBar}}*/></LeftNavBar>
          <ViewContent /*sharedData={{toggleCollpase: toggleCollpase, toggleTopNavBar: toggleTopNavBar}}*/></ViewContent>
          </Router>
        </div>
      </main>
    );
  }
}


export default MainContent;
