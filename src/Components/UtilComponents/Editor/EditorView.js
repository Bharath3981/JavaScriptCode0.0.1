import React, { useState, useEffect } from 'react';
import { DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di';
import { BsDisplayFill } from 'react-icons/bs';
import { VscDebugConsole } from 'react-icons/vsc';
import { GrClear } from 'react-icons/gr';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import Editor from './Editor';
import JSONFormatter from 'json-formatter-js'
import './editor-view.css';



export default function EditorView(props) {
    const [editorTab, setEditorTab] = useState( props.config.defaultInputTab );
    const [runTab, setRunTab] = useState( props.config.defaultOutputTab );
    const [html, setHtml] = useState('<div></div>');
    const [css, setCss] = useState('');
    const [javascript, setJavascript] = useState('console.log([1,2,3,0]);');
    const [srcDoc, setSrcDoc] = useState();
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                <style>${css}</style>
                <body>${html}</body>
                <script>
                (function() {
                    var orgLog = console.log;
                    let consoleElement = window.parent.document.querySelector('#consoleWindow ul');
                    if( consoleElement ) {
                        consoleElement.innerHTML = '';
                        console.log = function(message, data) {
                            var liElement = document.createElement("li");
                            orgLog(data);
                            var textnode = document.createTextNode(message);
                            
                            liElement.appendChild(window.parent.window.getMessage(message));
                            consoleElement.appendChild(liElement);
                            consoleElement.appendChild(document.createElement("hr"));
                            return orgLog(message);
                        }
                    }
                })();
                ${javascript}</script>
                </html>
        `);
        }, 300);
        return () => clearTimeout(timeout);
    });

    window.getMessage = function(message) {
        return new JSONFormatter(message, 0, {
            hoverPreviewEnabled: true
        }).render();
    }

    return (
        <div class="jsc-editor">
        <Row>
            <Col md={7} sm={12}><script>{javascript}</script>
                <Tabs id="editor-tabs" transition={false} className="jsc-theme-tabs" activeKey={editorTab} onSelect={(k) => setEditorTab(k)}>
                    {
                        props.config.showHtmlTab && 
                        <Tab eventKey="html" title={<span><span><DiHtml5 /></span><span className="d-none d-sm-inline"> HTML</span></span>}>
                            <Editor language="xml" value={html} editorType="HTML" onChage={setHtml}>
                            </Editor>
                        </Tab>
                    }
                    {
                        props.config.showCssTab &&
                        <Tab eventKey="css" title={<span><span><DiCss3 /></span><span className="d-none d-sm-inline"> CSS</span></span>}>
                            <Editor language="css" value={css} editorType="CSS" onChage={setCss}>
                            </Editor>
                        </Tab>
                    }
                    {
                        props.config.showJsTab &&
                        <Tab eventKey="js" title={<span><span><DiJavascript /></span><span className="d-none d-sm-inline"> JavaScript</span></span>}>
                            <Editor language="javascript" value={javascript} editorType="JS" onChage={setJavascript}>
                            </Editor>
                        </Tab>
                    }
                    
                </Tabs>
            </Col>
            <Col md={5} sm={12}>
                 <Tabs id="controlled-tab-example" transition={false} className="jsc-theme-tabs run" activeKey={runTab} onSelect={(k) => setRunTab(k)}>
                    {
                        props.config.showDisplayTab &&
                        <Tab eventKey="display" title={<span><span><BsDisplayFill /></span><span className="d-none d-sm-inline"> View</span></span>}>
                            <iframe id="displayView" srcDoc={srcDoc} sandbox="allow-scripts allow-same-origin allow-modals"  title="output" frameBorder="0" 
                            width="100%" height="100%"></iframe>
                        </Tab>
                    }
                    {
                        props.config.showConsoleTab &&
                        <Tab eventKey="console" title={<span><span><VscDebugConsole /></span><span className="d-none d-sm-inline"> Console</span></span>}>
                            <div id="consoleWindow">
                                <div className="console-header">Console 
                                    <span style={{ color: "#1DA1F2" }} onClick={() => document.querySelector('#consoleWindow ul').innerHTML = ''}><GrClear /></span>
                                </div>
                                <ul></ul>
                            </div>
                        </Tab>
                    }
                </Tabs>
            </Col>
        </Row>
        </div>
    );
}
