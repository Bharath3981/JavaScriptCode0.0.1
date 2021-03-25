import { NavLink } from 'react-router-dom';
import React from 'react';

class LeftNavMenuItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <NavLink to={'/'+this.props.params.topic} className="nav-link" role="button" exact={true} activeClassName="active">
          <div className="d-flex align-items-center"><span className="nav-link-icon">
            {this.props.params.menuIcon()}
            </span><span className="nav-link-text ps-1">{this.props.params.menuLabel}</span>
          </div>
        </NavLink>
      </li>
    );
  }
}


export default LeftNavMenuItem;
