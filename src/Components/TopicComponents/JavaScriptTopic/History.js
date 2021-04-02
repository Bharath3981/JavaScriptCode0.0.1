import TopicCard from '../../UtilComponents/TopicCard/TopicCard';
import React from 'react';
import renderHTML from 'react-render-html';
//import EditorView from '../../UtilComponents/Editor/EditorView';

class History extends React.Component {
  
  render() {
    return (
      <TopicCard params={{title: 'History'}}>
        {/* <EditorView></EditorView> */}
        {renderHTML(`<h1>JavaScript</h1>
<div>
<div>&nbsp;</div>
<p class="summary"><span class="seoSummary"><strong>JavaScript</strong>&nbsp;(<strong>JS</strong>) is a lightweight, interpreted, or&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/Just-in-time_compilation" rel=" noopener">just-in-time</a>&nbsp;compiled programming language with&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function">first-class functions</a>. While it is most well-known as the scripting language for Web pages,&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages" rel=" noopener">many non-browser environments</a>&nbsp;also use it, such as&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js">Node.js</a>,&nbsp;<a class="external" href="https://couchdb.apache.org/" rel=" noopener">Apache CouchDB</a>&nbsp;and&nbsp;<a class="external" href="http://www.adobe.com/devnet/acrobat/javascript.html" rel=" noopener">Adobe Acrobat</a>.</span>&nbsp;JavaScript is a&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming">prototype-based</a>, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript">about JavaScript</a>.</p>
<p>This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/API">API</a>&nbsp;specifics to Web pages, please see&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/API">Web APIs</a>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/DOM">DOM</a>.</p>
<p>The standard for JavaScript is&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources">ECMAScript</a>. As of 2012, all&nbsp;<a class="external" href="https://kangax.github.io/compat-table/es5/" rel=" noopener">modern browsers</a>&nbsp;fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015,&nbsp;<a class="external" href="https://www.ecma-international.org/" rel=" noopener">ECMA International</a>&nbsp;published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently&nbsp;<a class="external" href="https://tc39.github.io/ecma262/" rel=" noopener">ECMAScript 2020</a>.</p>
<p>Do not confuse JavaScript with the&nbsp;<a class="external" href="https://en.wikipedia.org/wiki/Java_(programming_language)" rel=" noopener">Java programming language</a>. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantic, and use.&nbsp;</p>
</div>`)}
      </TopicCard>
    );
  }
}


export default History;
