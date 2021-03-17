import LeftNavBar from '../LeftNavBar/LeftNavBar';
import ViewContent from '../ViewContent/ViewContent';

function MainContent() {
  return (
    <main id="top">
      <div className="container-fluid" data-layout="container">
        <LeftNavBar></LeftNavBar>
        <ViewContent></ViewContent>
      </div>
    </main>
  );
}

export default MainContent;
