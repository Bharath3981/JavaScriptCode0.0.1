import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.theme.css';
import './assets/css/themes/BlueChill/style.css';
import MainContent from './Components/MainContent/MainContent';
import AppContextProvider from './AppContext/AppContext';


class JavaScriptCodeApp extends React.Component {
  
  render() {
    return (
      <AppContextProvider>
        <div id="mainBody" className="">
            <MainContent></MainContent>
        </div>
      </AppContextProvider>
    );
  }
}

export default JavaScriptCodeApp;
