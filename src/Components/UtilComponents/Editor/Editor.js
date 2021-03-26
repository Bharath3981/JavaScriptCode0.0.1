import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';


export default function Editor( props ) {
    const { language, displayName,
    value,
    onChage } = props;
    function handleChange( editor,data, value ) {
        onChage( value );
    }
    return (
        <ControlledEditor
            onBeforeChange={handleChange}
            editorDidMount={(editor) => {
                editor.refresh();
            }}
            value={value}
            className="jsc-code-mirror-wrapper"
            options={{
                lineWrapping: true,
                ling: true,
                mode: language,
                lineNumbers: true
            }}>
        </ControlledEditor>
    );
}
