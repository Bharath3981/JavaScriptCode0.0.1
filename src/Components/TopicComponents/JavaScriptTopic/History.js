import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import EditorView from '../../UtilComponents/Editor/EditorView';

class History extends React.Component {
  render() {
    return (
      <TopicCard params={{title: 'History'}}>
        <EditorView></EditorView>
      </TopicCard>
    );
  }
}


export default History;
