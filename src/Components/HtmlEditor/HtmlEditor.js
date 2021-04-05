import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


class HtmlEditor extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }
  render() {
    return (
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="ouj1h7i4i3k25oak04j8gvtq920q97odiczytr2oyfmj27jd"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'codesample code'
          ],
          codesample_languages: [
            {text: 'HTML/XML', value: 'markup'},
            {text: 'JavaScript', value: 'javascript'},
            {text: 'CSS', value: 'css'},
            {text: 'PHP', value: 'php'},
            {text: 'Ruby', value: 'ruby'},
            {text: 'Python', value: 'python'},
            {text: 'Java', value: 'java'},
            {text: 'C', value: 'c'},
            {text: 'C#', value: 'csharp'},
            {text: 'C++', value: 'cpp'}
          ],
          toolbar:
            `undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help | codesample code`
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default HtmlEditor;
