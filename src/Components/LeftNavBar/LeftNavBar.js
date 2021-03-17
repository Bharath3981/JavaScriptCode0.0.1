import LeftNavToggleIcon from '../LeftNavToggleIcon/LeftNavToggleIcon';
import BrandLogo from '../BrandLogo/BrandLogo';
import LeftNavBarMenus from '../LeftNavBarMenus/LeftNavBarMenus';

function LeftNavBar() {
  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
      <div className="d-flex align-items-center">
        <LeftNavToggleIcon></LeftNavToggleIcon>
        <BrandLogo></BrandLogo>
      </div>
      <LeftNavBarMenus></LeftNavBarMenus>
    </nav>
  );
}

export default LeftNavBar;
