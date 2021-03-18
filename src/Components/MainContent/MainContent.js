import React, {useState} from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import ViewContent from '../ViewContent/ViewContent';

function MainContent() {
  const [toggleTopNavBar, setToggleTopNavBar] = useState(false);
  function toggleCollpase( value ) {
    setToggleTopNavBar( value );
  }
  return (
    <main id="top">
      <div className="container-fluid" data-layout="container">
        <LeftNavBar sharedData={{toggleTopNavBar: toggleTopNavBar}}></LeftNavBar>
        <ViewContent sharedData={{toggleCollpase: toggleCollpase, toggleTopNavBar: toggleTopNavBar}}></ViewContent>
      </div>
    </main>
  );
}

export default MainContent;
