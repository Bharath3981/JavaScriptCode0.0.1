import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { SiAdobeaftereffects } from 'react-icons/si';
import React from 'react';

class TopicCard extends React.Component {
  render() {
    return (
      <div className="row g-0 jsc-routing-content">
        <div className="col-sm-12 mb-3 mb-xxl-0">
          <div className="card">
            <div className="card-header d-flex flex-between-center py-2">
              <h6 className="mb-0">{this.props.params.title}</h6>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <DropDownMenu></DropDownMenu>
              </div>
            </div>
            <div className="card-body py-2">
              <SiAdobeaftereffects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TopicCard;
