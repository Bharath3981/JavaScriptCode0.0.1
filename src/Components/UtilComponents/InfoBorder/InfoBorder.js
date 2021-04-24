import React from 'react';
import './info-border.css';

class InfoBorder extends React.Component {
  render() {
    return (
      <div className="info-border info">
        {this.props.children}
      </div>  
    );
  }
}


export default InfoBorder;
