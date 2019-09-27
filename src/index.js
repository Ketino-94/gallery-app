import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from "react-router-dom";
import store from './components/store/store'
import { Provider } from 'mobx-react'
import PhotosPage from './components/PhotosPage';
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/app.css'

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route path="/albums/:id" component={PhotosPage} />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'))

