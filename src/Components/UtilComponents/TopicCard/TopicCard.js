import DropDownMenu from '../DropDownMenu/DropDownMenu';
import React from 'react';
import { Card } from 'react-bootstrap';

class TopicCard extends React.Component {
  render() {
    return (
      // <div className="row jsc-routing-content">
      //   <div className="col-sm-12">
      //     <div className="card">
      //       <div className="card-header d-flex flex-between-center py-2">
      //         <h4 className="mb-0">{this.props.params.title}</h4>
      //         <div className="dropdown font-sans-serif btn-reveal-trigger">
      //           <DropDownMenu></DropDownMenu>
      //         </div>
      //       </div>
      //       <div className="card-body py-2">
      //         {this.props.children}
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Card>
        <Card.Header className="d-flex flex-between-center py-2">
          <h4 className="mb-0 fw-bold">{this.props.params.title}</h4>
          <div className="dropdown font-sans-serif btn-reveal-trigger">
            <DropDownMenu></DropDownMenu>
          </div>
        </Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text> */}
          {this.props.children}
        </Card.Body>
      </Card>
    );
  }
}


export default TopicCard;
