import { FaChartPie, FaCalendarAlt } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { GrInherit } from 'react-icons/gr';
import LeftNavMenuItem from '../UtilComponents/LeftNavMenuItem/LeftNavMenuItem';
import LeftNavMenuSubItem from '../UtilComponents/LeftNavMenuSubItem/LeftNavMenuSubItem';
//import Context from '../../Store/context';
//import { useContext } from 'react';

const  LeftNavBarMenus = () => {
  //const state = useContext(Context);
  const topics = [
    { topicId: 1, topicIcon: GrInherit, topicLabel: 'Prototype', menuClass: 'active'}
  ];
  return (
    <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
      {
        topics.map( topic =>  <LeftNavMenuItem key={topic.topicId} params={{menuIcon: topic.topicIcon,
            menuLabel: topic.topicLabel, menuClasses: 'active'}}></LeftNavMenuItem> )
      }
      
      <LeftNavMenuItem params={{menuIcon: FaCalendarAlt, menuLabel: 'Calendar'}}></LeftNavMenuItem>
      <LeftNavMenuItem params={{menuIcon: FaCalendarAlt, menuLabel: 'Calendar'}}></LeftNavMenuItem>
      <li className="nav-item">
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
      </li>
    </ul>
  );
}

export default LeftNavBarMenus;
