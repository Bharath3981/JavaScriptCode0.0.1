import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import arrayImg from './images/Array.svg';
import JSEditor from '../../UtilComponents/Editor/JSEditor';
class Arrays extends React.Component {

  componentDidMount() {
    document.title = 'Arrays';
  }
  
  render() {
    const creatingAnArray = `let arr1 = new Array();
let arr2 = [];
console.log(arr1);
console.log(arr2);`;
    return (
      <TopicCard params={{title: 'Arrays'}}>
        {/* Arrays */}
        {renderHTML(`<p><strong>JavaScript array</strong> is an object that represents a collection of elements and each element specified by an index.&nbsp;</p>
          <p>Since arrays are <strong>objects</strong>, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array.</p>`)}
        <div className="text-center jsc-topic-image"><img alt="Array" src={arrayImg} /></div>
        
        {/* Creating an Array */}
        { renderHTML(`<h3>Creating an Array</h3><p>There are two syntaxes for creating an array.</p>`)}
        <JSEditor value={creatingAnArray} height='110px'></JSEditor>
      </TopicCard>
    );
  }
}


export default Arrays;
