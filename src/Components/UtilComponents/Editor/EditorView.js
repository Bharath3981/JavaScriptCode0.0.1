import React, { useState, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di';
import { BsDisplayFill } from 'react-icons/bs';
import { VscDebugConsole } from 'react-icons/vsc';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import Editor from './Editor';


export default function EditorView() {
    const [editorTab, setEditorTab] = useState('html');
    const [runTab, setRunTab] = useState('display');
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [javascript, setJavascript] = useState('console.log("Hi")');
    const [srcDoc, setSrcDoc] = useState();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
            </html>
        `);
        }, 500);
        return () => clearTimeout(timeout);
    });
    
    return (
        <Row>
            <Col md={6} sm={12}>
                <Tabs id="editor-tabs" transition={false} className="jsc-theme-tabs" activeKey={editorTab} onSelect={(k) => setEditorTab(k)}>
                    <Tab eventKey="html" title={<span><span><DiHtml5 /></span><span> HTML</span></span>}>
                        <Editor language="xml" value={html} onChage={setHtml}>
                        </Editor>
                    </Tab>
                    <Tab eventKey="profile" title={<span><span><DiCss3 /></span><span> CSS</span></span>}>
                    <Editor language="css" value={css} onChage={setCss}>
                        </Editor>
                    </Tab>
                    <Tab eventKey="contact" title={<span><span><DiJavascript /></span><span> JavaScript</span></span>}>
                    <Editor language="javascript" value={javascript} onChage={setJavascript}>
                        </Editor>
                    </Tab>
                </Tabs>
            </Col>
            <Col md={6} sm={12}>
            <Tabs id="controlled-tab-example" transition={false} className="jsc-theme-tabs run" activeKey={runTab} onSelect={(k) => setRunTab(k)}>
                    <Tab eventKey="display" title={<span><span><BsDisplayFill /></span><span> Display</span></span>}>
                        <iframe srcDoc={srcDoc}  title="output" sandbox="allow-scripts" frameBorder="0" 
                        width="100%" height="100%"></iframe>
                    </Tab>
                    <Tab eventKey="console" title={<span><span><VscDebugConsole /></span><span> Console</span></span>}>
                        COnsole
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
}
