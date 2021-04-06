import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
import EditorView from '../../UtilComponents/Editor/EditorView';

class History extends React.Component {
  
  componentDidMount() {
    document.title = 'History';
    
  }
  
  render() {
    return (
      <TopicCard params={{title: 'History'}}>
        {/* <EditorView></EditorView> */}
        {/* History Of the JavaScript */}
        {renderHTML(`<h2>History</h2>
          <p>The NCSA Mosaic web browser was released in 1993. As the first web browser with a GUI, it played a important role in the World Wide Web.&nbsp;The lead developers of Mosaic then founded the&nbsp;<a title="Netscape" href="https://en.wikipedia.org/wiki/Netscape">Netscape</a>&nbsp;corporation, which released a more polished browser,&nbsp;<a title="Netscape Navigator" href="https://en.wikipedia.org/wiki/Netscape_Navigator">Netscape Navigator</a>, in 1994. Netscape Navigator quickly became the most used browser.</p>
          <p>During these growing years of the Web, web-page could only be static, lacking the capability for dynamic behavior. To remove this limitation, so in 1995, Netscape decided to add a <a title="Scripting language" href="https://en.wikipedia.org/wiki/Scripting_language">scripting language</a> to Navigator. And they collaborated with <a title="Sun Microsystems" href="https://en.wikipedia.org/wiki/Sun_Microsystems">Sun Microsystems</a>&nbsp;to embed the&nbsp;<a title="Java (programming language)" href="https://en.wikipedia.org/wiki/Java_(programming_language)">Java</a>&nbsp;<a title="Programming language" href="https://en.wikipedia.org/wiki/Programming_language">programming language</a>, and also hired <a title="Brendan Eich" href="https://en.wikipedia.org/wiki/Brendan_Eich">Brendan Eich</a>&nbsp;to embed the&nbsp;<a title="Scheme (programming language)" href="https://en.wikipedia.org/wiki/Scheme_(programming_language)">Scheme</a>&nbsp;language.</p>
          <p>JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications.</p>`)}
        {/* What is JavaScript */}
        {renderHTML(`<h2>What is JavaScript ?</h2>
          <p>JavaScript is a scripting language that is one of the three core languages used to develop websites. Whereas HTML and CSS give a website structure and style, JavaScript lets you add functionality and behaviors to your website.</p>
          <p>JavaScript is primarily a client-side language, meaning it runs on your computer within your browser. However, more recently the introduction of Node.js has allowed JavaScript to also execute code on servers.</p>`)}
         
      </TopicCard>
    );
  }
}


export default History;
