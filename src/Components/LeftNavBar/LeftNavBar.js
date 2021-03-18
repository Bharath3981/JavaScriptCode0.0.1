import LeftNavToggleIcon from '../LeftNavToggleIcon/LeftNavToggleIcon';
import BrandLogo from '../BrandLogo/BrandLogo';
import LeftNavBarMenus from '../LeftNavBarMenus/LeftNavBarMenus';
import { Collapse } from 'react-bootstrap';

function LeftNavBar( props ) {
  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
      <div className="d-flex align-items-center">
        <LeftNavToggleIcon></LeftNavToggleIcon>
        <BrandLogo></BrandLogo>
      </div>
      <Collapse  in={props.sharedData.toggleTopNavBar} >
        <div className="navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content scrollbar">
            <LeftNavBarMenus></LeftNavBarMenus>
          </div>
        </div>
      </Collapse>
    </nav>
  );
}

export default LeftNavBar;
