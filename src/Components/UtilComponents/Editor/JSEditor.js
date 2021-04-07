import React, { useState, useEffect } from 'react';
import { GrClear } from 'react-icons/gr';
import { Row, Col } from 'react-bootstrap';
import Editor from './Editor';
import JSONFormatter from 'json-formatter-js'
import './editor-view.css';



export default function JSEditor(props) {
    const [javascript, setJavascript] = useState('console.log([1,2,3,0]);');
    const [srcDoc, setSrcDoc] = useState();
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                <style></style>
                <body></body>
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
        <div className="jsc-editor js-editor">
        <Row>
            <Col md={7} sm={12}><script>{javascript}</script>
                <Editor language="javascript" value={javascript} editorType="JS" onChage={setJavascript}>
                </Editor>
            </Col>
            <Col md={5} sm={12}>
                <iframe id="displayView" srcDoc={srcDoc} sandbox="allow-scripts allow-same-origin allow-modals"  title="output" frameBorder="0" 
                width="100%" height="100%" className="d-none"></iframe>
                <div id="consoleWindow">
                    <div className="console-header">Console 
                        <span style={{ color: "#1DA1F2" }} onClick={() => document.querySelector('#consoleWindow ul').innerHTML = ''}><GrClear /></span>
                    </div>
                    <ul></ul>
                </div>
            </Col>
        </Row>
        </div>
    );
}
