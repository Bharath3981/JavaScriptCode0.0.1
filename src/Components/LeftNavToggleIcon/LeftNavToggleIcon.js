import React from 'react';

class LeftNavToggleIcon extends React.Component {
  render() {
    return (
      <div className="toggle-icon-wrapper">
        <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" onClick={() => document.getElementById('top').classList.toggle('navbar-vertical-collapsed')}>
          <span className="navbar-toggle-icon"><span className="toggle-line"></span></span>
        </button>
      </div>
    );
  }
}


export default LeftNavToggleIcon;
