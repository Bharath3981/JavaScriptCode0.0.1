import LeftNavMenuItem from '../UtilComponents/LeftNavMenuItem/LeftNavMenuItem';
import React from 'react';
import { AppContext } from '../../AppContext/AppContext';
import { BiNetworkChart } from 'react-icons/bi';
import LeftNavMenuSubItem from '../UtilComponents/LeftNavMenuSubItem/LeftNavMenuSubItem';

class LeftNavBarMenus extends React.Component {
  static contextType = AppContext;
  render() {
    const topics = this.context.leftNavMenus;
    return (
      <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
        {
          topics.map( topic =>  <LeftNavMenuItem key={topic.id} data={{topic: topic}}></LeftNavMenuItem> )
        }
         {/* <li className="nav-item">
          <a className="nav-link dropdown-indicator" href="#?" 
            role="button" data-bs-toggle="collapse" onClick={(event)=> document.querySelector('.navbar .nav-item .nav.collapse#email').classList.toggle('show')} aria-expanded="false" aria-controls="email">
            <div className="d-flex align-items-center">
              <span className="nav-link-icon"><BiNetworkChart /></span>
              <span className="nav-link-text ps-1">Email</span>
            </div>
          </a>
          <ul className="nav collapse show" id="email">
            <LeftNavMenuSubItem params={{menuLabel: 'Submenu1'}}></LeftNavMenuSubItem>
            <LeftNavMenuSubItem params={{menuLabel: 'Submenu2'}}></LeftNavMenuSubItem>
            <LeftNavMenuSubItem params={{menuLabel: 'Submenu3'}}></LeftNavMenuSubItem>
          </ul>
        </li>  */}
      </ul>
    );
  }
}



export default LeftNavBarMenus;
