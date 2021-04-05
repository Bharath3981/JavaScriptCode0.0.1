import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../AppContext/AppContext';

class LeftNavMenuSubItem extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <li className="nav-item">
        <NavLink to={'/'+this.props.data.topic.path} className="nav-link" 
          onClick={()=> this.context.setToggleLeftNav(false)} role="button" exact={true} activeClassName="active">
          <div className="d-flex align-items-center">
            <span className="nav-link-text ps-1">{this.props.data.topic.label}</span>
          </div>
        </NavLink>
      </li>
    );
  }
}



export default LeftNavMenuSubItem;
