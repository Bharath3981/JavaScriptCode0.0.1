import LeftNavMenuItem from '../UtilComponents/LeftNavMenuItem/LeftNavMenuItem';
//import LeftNavMenuSubItem from '../UtilComponents/LeftNavMenuSubItem/LeftNavMenuSubItem';
import Context from '../../Store/context';
import { useContext } from 'react';

const  LeftNavBarMenus = () => {
  const globalState = useContext(Context);
  const topics = globalState.leftNavMenus;
  return (
    <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
      {
        topics.map( topic =>  <LeftNavMenuItem key={topic.topicId} params={{menuIcon: topic.topicIcon,
            menuLabel: topic.topicLabel, topic: topic.subTopic}}></LeftNavMenuItem> )
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
      </li> */}
    </ul>
  );
}

export default LeftNavBarMenus;
