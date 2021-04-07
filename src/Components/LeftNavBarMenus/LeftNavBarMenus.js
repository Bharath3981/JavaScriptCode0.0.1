import LeftNavMenuItem from '../UtilComponents/LeftNavMenuItem/LeftNavMenuItem';
import React from 'react';
import { AppContext } from '../../AppContext/AppContext';


class LeftNavBarMenus extends React.Component {
  static contextType = AppContext;
  render() {
    const topics = this.context.leftNavMenus;
    return (
      <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
        {
          topics.map( topic =>  <LeftNavMenuItem key={topic.id} data={{topic: topic}}></LeftNavMenuItem> )
        }
      </ul>
    );
  }
}



export default LeftNavBarMenus;
