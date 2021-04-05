
//import { FaSearch } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { ImTree } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';
import Button from 'react-bootstrap/Button';
// import { FaHistory } from 'react-icons/fa';
// import { GrInherit } from 'react-icons/gr';
import React from 'react';

class Banner extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
          {<Button className="navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" onClick={() => this.context.setToggleLeftNav( !this.context.toggleLeftNav )} aria-controls="navbarVerticalCollapse" aria-expanded={this.context.toggleLeftNav}><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></Button> }
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center"><img className="me-2"  alt="" width="40" /><span className="font-sans-serif">JS</span></div>
          </a>
          <ul className="navbar-nav align-items-center d-none d-lg-block">
            <li className="nav-item">
              {/* <div className="search-box" data-list='{"valueNames":["title"]}'>
                <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                  <span className="search-box-icon"><FaSearch /></span>
                </form>
                <button className="btn-close position-absolute end-0 top-50 translate-middle shadow-none p-1 me-1 fs--2" type="button" data-bs-dismiss="search"></button>
              </div> */}
            </li>
          </ul>
          
          <ul className="navbar-nav navbar-nav-icons flex-row align-items-center d-none d-sm-inline user-menu">
            <li className="nav-item">
              <a className="nav-link pe-0" id="navbarDropdownUser" role="button" href="#!" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="avatar avatar-xl">
                  <img className="rounded-circle" src="" alt="" />
                </div>
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav ms-auto topics">
            <li>
              <NavLink to="/javascript" activeClassName="active" className="jsc-route-menu">
                <SiJavascript></SiJavascript><span className="d-none d-sm-inline">&nbsp;JavaScript</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/datastructures" activeClassName="active" className="jsc-route-menu">
                <ImTree></ImTree><span className="d-none d-sm-inline">&nbsp;DataStructures</span>
              </NavLink>
            </li>
          </ul>
        </nav>
    );
  }
}
export default Banner;
