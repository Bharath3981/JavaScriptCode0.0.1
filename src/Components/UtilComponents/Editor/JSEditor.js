import React, { useState, useEffect } from 'react';
import { GrClear } from 'react-icons/gr';
import { FaPlay } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';
import Editor from './Editor';
import JSONFormatter from 'json-formatter-js'
import './editor-view.css';
import Collapse from 'react-bootstrap/Collapse'



export default function JSEditor(props) {
    const [javascript, setJavascript] = useState(props.value);
    const [srcDoc, setSrcDoc] = useState();
    const [runMode, setRunMode] = useState(false);
    const sourceDoc = `<html>
                        <style></style>
                        <body></body>
                        <script>
                        (function() {
                            var orgLog = console.log;
                            let consoleElement = window.parent.document.querySelector('.console-window ul');
                            if( consoleElement ) {
                                //consoleElement.innerHTML = '';
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
                        </html>`
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc();
        }, 300);
        return () => clearTimeout(timeout);
    });

    window.getMessage = function(message) {
        return new JSONFormatter(message, 0, {
            hoverPreviewEnabled: true
        }).render();
    }

    const runJSHandler = () => {
        document.querySelector('.console-window ul').innerHTML = ''
        setRunMode( true );
        setSrcDoc( sourceDoc );
    }

    return (
        <div className={runMode? 'jsc-editor js-editor run-mode': 'jsc-editor js-editor'}>
        <Row>
            <Col md={7} sm={12}><script>{javascript}</script>
                <div className="js-editor-window">
                    <div className="js-editor-header">JS Editor 
                        <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => runJSHandler()}><FaPlay /></span>
                        <span className="float-end" style={{ color: "#1DA1F2" }} title="Run" onClick={() => setJavascript('')}><GrClear /></span>
                    </div>
                    <Editor language="javascript" height={props.height} value={javascript} editorType="JS" 
                        onChage={setJavascript} readOnly={!runMode} styleActiveLine={runMode}>
                    </Editor>
                </div>
                
            </Col>
            <Collapse in={runMode}>
            <Col md={5} sm={12}>
                <iframe id="displayView" srcDoc={srcDoc} sandbox="allow-scripts allow-same-origin allow-modals"  title="output" frameBorder="0" 
                width="100%" height="100%" className="d-none"></iframe>
                <div className="console-window">
                    <div className="console-header">Console 
                        <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => setRunMode( false )}><RiCloseCircleFill /></span>
                        <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => document.querySelector('.console-window ul').innerHTML = ''}><GrClear /></span>
                    </div>
                    <ul></ul>
                </div>
            </Col>
            </Collapse>
        </Row>
        </div>
    );
}
