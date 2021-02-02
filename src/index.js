import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './index.css'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/upload' component={Upload} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

