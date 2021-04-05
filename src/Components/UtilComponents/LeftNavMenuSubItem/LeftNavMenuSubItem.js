import React from 'react';

class LeftNavMenuSubItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="email/inbox.html">
          <div className="d-flex align-items-center">
            <span className="nav-link-text ps-1">{this.props.data.topic.label}</span>
          </div>
        </a>
      </li>
    );
  }
}



export default LeftNavMenuSubItem;
