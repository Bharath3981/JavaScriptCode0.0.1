import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/closebrackets';
import { Controlled as ControlledEditor } from 'react-codemirror2';


export default function Editor( props ) {
    const { language, value, onChage, editorType } = props;
    const editorHeight = props.height || '300px';
    const readOnly = props.readOnly || false;
    const styleActiveLine = props.styleActiveLine;
    function handleChange( editor,data, value ) {
        onChage( value );
    }
    let editorOptions = {
        theme: 'material',
        lineNumbers: true,
        autofocus: false,
        lineWrapping: true,
        mode: language,
        styleActiveLine: styleActiveLine,
        autoRefresh: true,
        readOnly: readOnly
    };
    if( editorType === 'HTML' ) {
        editorOptions.autoCloseTags = true;
    } else if( editorType === 'CSS' ) {
        editorOptions.autoCloseBrackets = true;
    } else if( editorType === 'JS' ) {
        editorOptions.autoCloseBrackets = true;
    } 
    return (
        <ControlledEditor
            editorDidMount={editor => { document.querySelector('.jsc-code-mirror-wrapper .CodeMirror-wrap').style.height = editorHeight; }}
            onBeforeChange={handleChange}
            value={value}
            className="jsc-code-mirror-wrapper"
            height='500px'
            options={editorOptions}>
        </ControlledEditor>
    );
}
