import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/upload/' component={Upload} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

