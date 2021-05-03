import TopicCard from '../../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import JSEditor from '../../../UtilComponents/Editor/JSEditor';
import InfoBorder from '../../../UtilComponents/InfoBorder/InfoBorder';
import prototypeImg from '../images/Prototype.PNG';
import objectCreateImag from './images/Object_create.svg';
import objectWithPropertyImg from './images/ObjectWithProperty.svg';

class Prototype extends React.Component {
  componentDidMount() {
    document.title = 'Prototype';
  }
  render() {
    return (
      <TopicCard params={{title: 'Prototype'}}>
        {/* JavaScript Prototype */}
        {renderHTML(`<h5>Prototype</h5>
          <p>Prototypes are the mechanism by which JavaScript objects inherit features from one another.</p>
          <p>JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a&nbsp;<em>prototype</em>&nbsp;property inside a function,&nbsp;<strong>Prototype property</strong> is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.</p>`)}
        
        <InfoBorder>
          <b>Prototype</b> is a special object, whenever we create a <code>Object</code> or <code>Array</code> or <code>functions</code> using JavaScript, JavaScript engine adds a&nbsp;<em>prototype</em>&nbsp;object.
        </InfoBorder>

        <div className="jsc-topic-image"><img style={{width: '100%'}}  alt="Array" src={prototypeImg} /></div>

        {renderHTML(`<code>var obj = new Object();</code>`)}

        <div className="jsc-topic-image"><img alt="Array" src={objectCreateImag} /></div>

        {renderHTML(`<code>obj.a = 8;`)}

        <div className="jsc-topic-image"><img alt="Array" src={objectWithPropertyImg} /></div>
      </TopicCard> 
    );
  }
}

export default Prototype;
