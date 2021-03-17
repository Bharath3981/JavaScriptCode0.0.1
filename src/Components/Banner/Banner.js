import brandLogoImage from '../../assets/img/illustrations/falcon.png';
import { FaSearch } from 'react-icons/fa';

function Banner() {
  return (
    <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
        <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
        <a className="navbar-brand me-1 me-sm-3" href="index.html">
          <div className="d-flex align-items-center"><img className="me-2" src={brandLogoImage} alt="" width="40" /><span className="font-sans-serif">falcon</span></div>
        </a>
        <ul className="navbar-nav align-items-center d-none d-lg-block">
          <li className="nav-item">
            <div className="search-box" data-list='{"valueNames":["title"]}'>
              <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                <span className="search-box-icon"><FaSearch /></span>
              </form><button className="btn-close position-absolute end-0 top-50 translate-middle shadow-none p-1 me-1 fs--2" type="button" data-bs-dismiss="search"></button>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
          <li className="nav-item dropdown">
            <a className="nav-link pe-0" id="navbarDropdownUser" role="button" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-xl">
                <img className="rounded-circle" src="" alt="" />
              </div>
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Banner;