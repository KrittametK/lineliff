import React from 'react';
import './App.css';
import PageConsent from './pages/Consent'
import PageLogin from './pages/Login'
import PageSelect from './pages/Select'
import PageSuccess from './pages/Success'
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App container">
      <HashRouter basename="/">
      <Route exact path="/" component={PageConsent} />
        <Route path="/login" component={PageLogin} />
        <Route path="/select" component={PageSelect} />
        <Route path="/success" component={PageSuccess} />
      </HashRouter>    
      </div>
      
  );
}

export default App;
