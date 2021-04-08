import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import arrayImg from './images/Array.svg';
import JSEditor from '../../UtilComponents/Editor/JSEditor';
import * as Code from './ArrayCodeSnippets';
class Arrays extends React.Component {

  componentDidMount() {
    document.title = 'Arrays';
  }
  
  render() {
    return (
      <TopicCard params={{title: 'Array'}}>
        {/* Arrays */}
        {renderHTML(`<p><strong>JavaScript array</strong> is an object that represents a collection of elements and each element specified by an index.&nbsp;</p>
          <p>Since arrays are <strong>objects</strong>, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array.</p>`)}
        <div className="text-center jsc-topic-image"><img alt="Array" src={arrayImg} /></div>
        
        {/* Creating an Array */}
        { renderHTML(`<h3><strong>Creating an Array</strong></h3><p>There are two syntaxes for creating an array.</p>`)}
        <JSEditor value={Code.CREATING_ARRAY} height='110px'></JSEditor>

        {/* Accessing an Array elements */}
        { renderHTML(`<h3><strong>Accessing array elements</strong></h3>
          <p>JavaScript arrays are zero-indexed. The first element of an array is at index&nbsp;<code>0</code>, and the last element is the lenght of the array.</p>`)}
        <JSEditor value={Code.ACCESSING_ARRAY} height='110px'></JSEditor>
      </TopicCard>
    );
  }
}


export default Arrays;
