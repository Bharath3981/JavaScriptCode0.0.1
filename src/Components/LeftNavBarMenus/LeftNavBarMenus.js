import { FaChartPie, FaCalendarAlt, FaEnvelopeOpen } from 'react-icons/fa';
import LeftNavMenuItem from '../UtilComponents/LeftNavMenuItem/LeftNavMenuItem';

function LeftNavBarMenus(props) {
  return (
    <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
      <LeftNavMenuItem params={{menuIcon: FaChartPie, menuLabel: 'Default', menuClasses: 'active'}}></LeftNavMenuItem>
      <LeftNavMenuItem params={{menuIcon: FaCalendarAlt, menuLabel: 'Calendar'}}></LeftNavMenuItem>
      <li className="nav-item">
        <a className="nav-link" href="app/calendar.html" role="button">
          <div className="d-flex align-items-center"><span className="nav-link-icon">
            <FaCalendarAlt/>
            </span><span className="nav-link-text ps-1">Calendar</span>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link dropdown-indicator" href="#email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="email">
          <div className="d-flex align-items-center"><span className="nav-link-icon">
            <FaEnvelopeOpen />
            </span><span className="nav-link-text ps-1">Email</span>
          </div>
        </a>
        <ul className="nav collapse" id="email">
          <li className="nav-item"><a className="nav-link" href="email/inbox.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">Inbox</span>
              </div>
            </a>
          </li>
          <li className="nav-item"><a className="nav-link" href="email/email-detail.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">Email detail</span>
              </div>
            </a>
          </li>
          <li className="nav-item"><a className="nav-link" href="email/compose.html">
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">Compose</span>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default LeftNavBarMenus;
