import { NavLink } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../../AppContext/AppContext';
import { BsChevronDown } from 'react-icons/bs';
import LeftNavMenuSubItem from '../LeftNavMenuSubItem/LeftNavMenuSubItem';
import { Collapse } from 'react-bootstrap';

class LeftNavMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {subTopic: false};
  }
  componentDidMount() {
  }
  static contextType = AppContext;
  render() {
    
    const leftNavClickHandler = ( subTopicsAvailable ) => {
      //this.setState( previousState => ({ subTopic: !previousState.subTopic }) );
      if( this.context.previousState ) {
        this.context.previousState.setState({subTopic: false});
      }
      if( subTopicsAvailable ) {
        this.setState({subTopic: !this.state.subTopic});
      } else {
        this.context.setToggleLeftNav(false);
      }
      this.context.previousState = this;
    };

    return (
      <li className="nav-item">
        <NavLink to={ this.props.data.topic.subTopics? '': '/'+this.props.data.topic.path} className="nav-link" 
          onClick={()=> leftNavClickHandler( this.props.data.topic.subTopics? true: false )} role="button" exact={true} activeClassName="active">
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">{this.props.data.topic.icon()}</span>
            <span className="nav-link-text ps-1">{this.props.data.topic.label}</span>
            {this.props.data.topic.subTopics && <span className={this.state.subTopic? 'ms-auto jsc-icon-rotation-180': 'ms-auto jsc-icon-rotation-0'}><BsChevronDown /></span>}
          </div>
        </NavLink>
        <Collapse appear={true}  in={this.state.subTopic} >
          <ul className="nav" id="email">
          { this.props.data.topic.subTopics &&
            this.props.data.topic.subTopics.map( subTopic =>  
            <LeftNavMenuSubItem key={subTopic.id} data={{topic: subTopic}}></LeftNavMenuSubItem> )
          }
          </ul>
        </Collapse>
      </li>
    );
  }
}


export default LeftNavMenuItem;
