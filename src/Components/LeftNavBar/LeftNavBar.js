import LeftNavToggleIcon from '../LeftNavToggleIcon/LeftNavToggleIcon';
import BrandLogo from '../BrandLogo/BrandLogo';
import LeftNavBarMenus from '../LeftNavBarMenus/LeftNavBarMenus';
import { Collapse } from 'react-bootstrap';
import React from 'react';
import { AppContext } from '../../AppContext/AppContext';

class LeftNavBar extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
        <div className="d-flex align-items-center jsc-logo-content">
          <LeftNavToggleIcon></LeftNavToggleIcon>
          <BrandLogo></BrandLogo>
        </div>
        <Collapse  in={ this.context.toggleLeftNav } >
          <div className="navbar-collapse" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar">
              <LeftNavBarMenus></LeftNavBarMenus>
            </div>
          </div>
        </Collapse>
      </nav>
    );
  }
}

export default LeftNavBar;
