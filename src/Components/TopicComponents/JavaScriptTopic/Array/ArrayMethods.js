import TopicCard from '../../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import JSEditor from '../../../UtilComponents/Editor/JSEditor';
import * as Code from './ArrayCodeSnippets';
class ArrayMethods extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = 'Array Methods';
  }
  
  render() {
    return (
      <TopicCard params={{title: 'Array Methods'}}>
        {/* Manipulating JavaScript Arrays */}
        {renderHTML(`<h5>Manipulating JavaScript Arrays:</h5>
          <p>In this tutorial, you explore arrays in more depth, and learn how to use various methods of the&nbsp;<code>Array</code>&nbsp;object to manipulate arrays.</p>`)}
        
        {/* Adding and removing elements */}
        {renderHTML(`<h5>Adding and removing elements:</h5>`)}

        {renderHTML(`<p><strong>Push: </strong>Adds items to the end.</p>`)}
        <JSEditor value={Code.ARRAY_PUSH} uniqueId={'jsArrayPush'} height='110px'></JSEditor>

        {renderHTML(`<p><strong>Pop: </strong>Extracts an item from the end.</p>`)}
        <JSEditor value={Code.ARRAY_POP} uniqueId={'jsArrayPop'} height='110px'></JSEditor>

        {renderHTML(`<p><strong>Shift: </strong>Extracts an item from the beginning.</p>`)}
        <JSEditor value={Code.ARRAY_SHIFT} uniqueId={'jsArrayShift'} height='110px'></JSEditor>

        {renderHTML(`<p><strong>Unshift: </strong>Adds items to the beginning.</p>`)}
        <JSEditor value={Code.ARRAY_UNSHIFT} uniqueId={'jsArrayUnShift'} height='110px'></JSEditor>

        {renderHTML(`<p><strong>Splice:</strong> The <strong><code>splice()</code></strong> method changes the contents of an array by removing or replacing existing elements</p>
          <strong>Syntax:</strong><code>Array.splice( start, remove_count, item_list );</code>`)}
        <JSEditor value={Code.ARRAY_SPLICE} uniqueId={'jsArraySplice'} height='110px'></JSEditor>
        
      </TopicCard>
    );
  }
}


export default ArrayMethods;
