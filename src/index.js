import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JavaScriptCodeApp from './App';
import reportWebVitals from './reportWebVitals';
import useGlobalState from './Store/useGlobalState';
import Context from './Store/context';

const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <JavaScriptCodeApp />
    </Context.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
