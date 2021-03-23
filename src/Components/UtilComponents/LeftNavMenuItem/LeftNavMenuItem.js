import { NavLink } from 'react-router-dom';

function LeftNavMenuItem(props) {
  return (
    <li className="nav-item">
      
      <NavLink to={'/'+props.params.topic} className="nav-link" role="button" exact={true} activeClassName="active">
        <div className="d-flex align-items-center"><span className="nav-link-icon">
          {props.params.menuIcon()}
          </span><span className="nav-link-text ps-1">{props.params.menuLabel}</span>
        </div>
        </NavLink>
      
    </li>
  );
}

export default LeftNavMenuItem;
