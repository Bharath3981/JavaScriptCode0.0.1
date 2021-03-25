import DropDownMenu from '../DropDownMenu/DropDownMenu';
import React from 'react';

class TopicCard extends React.Component {
  render() {
    return (
      <div className="row jsc-routing-content">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex flex-between-center py-2">
              <h4 className="mb-0">{this.props.params.title}</h4>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <DropDownMenu></DropDownMenu>
              </div>
            </div>
            <div className="card-body py-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TopicCard;
