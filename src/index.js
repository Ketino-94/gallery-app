import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Redirect} from "react-router-dom";

import PhotosPage from './components/PhotosPage';

ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/photos/:id" component={PhotosPage} />
    <Redirect to="/" />
  </BrowserRouter>
), document.getElementById('root'))

