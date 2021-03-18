import { FaChartPie, FaCalendarAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { Collapse } from 'react-bootstrap';

function LeftNavBarMenus(props) {
  return (
    <Collapse  in={props.sharedData.toggleTopNavBar} >
    <div className="navbar-collapse" id="navbarVerticalCollapse">
      <div className="navbar-vertical-content scrollbar">
        <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html" role="button">
              <div className="d-flex align-items-center"><span className="nav-link-icon"><span className=""><FaChartPie /></span></span><span className="nav-link-text ps-1">Default</span></div>
            </a>
            <a className="nav-link" href="app/calendar.html" role="button">
              <div className="d-flex align-items-center"><span className="nav-link-icon"><span className=""><FaCalendarAlt/></span></span><span className="nav-link-text ps-1">Calendar</span></div>
            </a>
            <a className="nav-link dropdown-indicator" href="#email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="email">
              <div className="d-flex align-items-center"><span className="nav-link-icon"><span className=""><FaEnvelopeOpen /></span></span><span className="nav-link-text ps-1">Email</span></div>
            </a>
            <ul className="nav collapse" id="email">
              <li className="nav-item"><a className="nav-link" href="email/inbox.html">
                  <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Inbox</span></div>
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="email/email-detail.html">
                  <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Email detail</span></div>
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="email/compose.html">
                  <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Compose</span></div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </Collapse>
  );
}

export default LeftNavBarMenus;
