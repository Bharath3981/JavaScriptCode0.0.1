import TopicCard from '../../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import InfoBorder from '../../../UtilComponents/InfoBorder/InfoBorder';
import prototypeInheritiance from './images/ProtototypeInheritance.svg';
import JSEditor from '../../../UtilComponents/Editor/JSEditor';
import * as Code from './PrototypeCodeSnippets';

class PrototypeInheritiance extends React.Component {
  componentDidMount() {
    document.title = 'Inheritance';
  }
  render() {
    return (
      <TopicCard params={{title: 'Prototype Inheritance'}}>
        {/* JavaScript Prototype */}
        {renderHTML(`<h5>Prototype Inheritance</h5>
          <p>All JavaScript objects inherit properties and methods from a prototype object.</p>`)}
        
        <InfoBorder>
        <p>In Javascript, every object has its own hidden, internal property,&nbsp;<code>[[Prototype]]</code>. We can access that&nbsp;<code>[[Prototype]]</code>&nbsp;using the&nbsp;<code>__proto__</code>&nbsp;property.</p>
        </InfoBorder>

        <div className="text-center jsc-topic-image"><img alt="Object Inhertiance" src={prototypeInheritiance} /></div>
        <br></br>
        <JSEditor value={Code.PROTOTYPE_INHERITIANCE} uniqueId={'jsArrayPop'} height='170px'></JSEditor>

      </TopicCard> 
    );
  }
}

export default PrototypeInheritiance;
