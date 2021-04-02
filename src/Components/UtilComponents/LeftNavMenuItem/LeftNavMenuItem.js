import { NavLink } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../../AppContext/AppContext';

class LeftNavMenuItem extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <li className="nav-item">
        <NavLink to={'/'+this.props.params.topic} className="nav-link" onClick={()=> this.context.setToggleLeftNav( false )} role="button" exact={true} activeClassName="active">
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
