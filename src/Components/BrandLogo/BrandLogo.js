import React from 'react';

class BrandLogo extends React.Component {
  render() {
    return (
      <a className="navbar-brand" href="index.html">
        <div className="d-flex align-items-center"><img className="me-2"  alt="" width="40" /><span className="font-sans-serif">JS</span></div>
      </a>
    );
  }
}


export default BrandLogo;
