import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import arrayImg from './images/Array.svg';
class Arrays extends React.Component {

  componentDidMount() {
    document.title = 'Arrays';
  }
  
  render() {
    return (
      <TopicCard params={{title: 'Arrays'}}>
        {/* Arrays */}
        {renderHTML(`<p><strong>JavaScript array</strong> is an object that represents a collection of elements and each element specified by an index.&nbsp;</p>
          <p>Since arrays are <strong>objects</strong>, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array.</p>`)}
        <div className="text-center jsc-topic-image"><img alt="Array" src={arrayImg} /></div>
      </TopicCard>
    );
  }
}


export default Arrays;
