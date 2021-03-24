import { FaEllipsisH } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import React from 'react';

class DropDownMenu extends React.Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="link" className="btn-sm" id="dropdown-basic">
          <FaEllipsisH></FaEllipsisH>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}


export default DropDownMenu;
