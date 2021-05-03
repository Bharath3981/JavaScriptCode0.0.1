import TopicCard from '../../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';

class PrototypeInheritiance extends React.Component {
  componentDidMount() {
    document.title = 'Inheritance';
  }
  render() {
    return (
      <TopicCard params={{title: 'Prototype Inheritance'}}>
        {/* JavaScript Prototype */}
        {renderHTML(`<h5>Prototype</h5>
          <p>Prototypes are the mechanism by which JavaScript objects inherit features from one another.</p>
          <p>JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a&nbsp;<em>prototype</em>&nbsp;property inside a function,&nbsp;<strong>Prototype property</strong> is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.</p>`)}
        
        
      </TopicCard> 
    );
  }
}

export default PrototypeInheritiance;
