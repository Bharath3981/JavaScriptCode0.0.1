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
    function handleChange( editor,data, value ) {
        onChage( value );
    }
    let editorOptions = {
        theme: 'material',
        lineNumbers: true,
        autofocus: true,
        lineWrapping: true,
        ling: true,
        mode: language,
        styleActiveLine: true,
        autoRefresh: true
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
            onBeforeChange={handleChange}
            value={value}
            className="jsc-code-mirror-wrapper"
            options={editorOptions}>
        </ControlledEditor>
    );
}
