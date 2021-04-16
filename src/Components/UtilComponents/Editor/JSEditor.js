import React from 'react';
import { GrClear } from 'react-icons/gr';
import { FaPlay } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Row, Col } from 'react-bootstrap';
import Editor from './Editor';
//import JSONFormatter from 'json-formatter-js'
import './editor-view.css';
import Collapse from 'react-bootstrap/Collapse'
//import { render } from '@testing-library/react';
import { Hook, Decode } from 'console-feed'
import { AppContext } from '../../../AppContext/AppContext';
import JSONFormatter from 'json-formatter-js';



export default class JSEditor extends React.Component {
    static contextType = AppContext;
    
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            javascript: 'console.log([1,2,3,4,9])',
            logs: [],
            runMode: false,
            srcDoc: ``
        };
        
    }
    componentDidMount() {
        const abortController = new AbortController();
        this._isMounted = true;
        Hook(window.console, (log) => {
            this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
        });
        return function cleanup() {
            abortController.abort();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
     }

    render() {
        window.getMessage = function(message) {
            return new JSONFormatter(message, 0, {
                hoverPreviewEnabled: true
            }).render();
        }
        const setJavascript = ( jsString ) => {
            this.setState({javascript: jsString});
        }
        //const runJSHandler = () => {
            //this.setState({logs: []})
            // if( this.context.previousState ) {
            //     this.context.previousState.setState({runMode: false});
            // }
            
            //this.scriptElement = document.createElement('script');
            //this.props.scriptElement.current.innerHTML = '';
            //this.scriptElement.textContent = this.props.value;//inne
            //this.props.scriptElement.current.appendChild(this.scriptElement);
            //this.context.previousState = this;
            //console.log(this.scriptElement, this.state.javascript);
        //}
    
        return (
            <div className={true || this.state.runMode? 'jsc-editor js-editor run-mode': 'jsc-editor js-editor'}>
            <Row>
                <Col md={7} sm={12}>
                    <div className="js-editor-window">
                        <div className="js-editor-header">JS Editor 
                            <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => { 
                                this.setState( {runMode: true } ); 
                                this.setState({srcDoc: `<html>
                                <style></style>
                                <body></body>
                                <script>
                                    (function() {
                                        var orgLog = console.log;
                                        var consoleElement = window.parent.document.querySelector('#${this.props.uniqueId}Console');
                                        console.log = function() {
                                            var allParameters = '';
                                            var liElement = document.createElement("li");
                                            for (var value of arguments) {
                                                //orgLog(typeof value);
                                                if( typeof value === 'object' ) {
                                                    //allParameters += window.parent.window.getMessage(value);
                                                    liElement.appendChild(window.parent.window.getMessage(value));
                                                } else {
                                                    //allParameters +=document.createTextNode(value);
                                                    liElement.appendChild(document.createTextNode(value));
                                                }
                                            }
                                            //orgLog(window.parent.window.getMessage(arguments[0]));
                                            //liElement.appendChild(allParameters);
                                            consoleElement.appendChild(liElement);
                                            consoleElement.appendChild(document.createElement("hr"));
                                        }
                                    })();
                                    ${this.state.javascript}
                                </script>
                                </html>`});
                                }}><FaPlay /></span>
                            <span className="float-end" style={{ color: "#1DA1F2" }} title="Run" onClick={() => setJavascript('')}><GrClear /></span>
                        </div>
                        
                        <Editor language="javascript" height={this.props.height} value={this.state.javascript} editorType="JS" 
                            uniqueId={this.props.uniqueId} onChage={setJavascript}  styleActiveLine={false}>
                        </Editor>
                    </div>
                    
                </Col>
                <Collapse in={true || this.state.runMode}>
                <Col md={5} sm={12}>
                    <iframe id="displayView" srcDoc={this.state.srcDoc} sandbox="allow-scripts allow-same-origin allow-modals"  title="output" frameBorder="0" 
                    width="100%" height="100%" className="d-none"></iframe>
                    <div className="console-window">
                        <div className="console-header">Console 
                            <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => this.setState( {runMode: false } )} ><RiCloseCircleFill /></span>
                            <span className="float-end" style={{ color: "#1DA1F2" }} title="Clear" onClick={() => document.querySelector('.console-window ul').innerHTML = ''}><GrClear /></span>
                        </div>
                        <ul id={this.props.uniqueId+'Console'}>

                        </ul>
                    </div>
                </Col>
                </Collapse>
            </Row>
            </div>
        );
    }
    
}
