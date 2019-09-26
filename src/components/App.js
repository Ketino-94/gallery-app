import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AlbumPage from './AlbumPage'
import { BrowserRouter, Route, Link } from "react-router-dom";

export const AppContext = React.createContext();
class App extends React.Component {

  state = {
    arrPhotos: [],
    arrAlbums: [],
  }

  getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(result => {
        this.setState({
          arrPhotos: result
        })
      })
  }

  getAlbums= () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(result => {
        this.setState({
          arrAlbums: result
        })
      })
  }

  componentDidMount() {
    this.getPhotos()
    this.getAlbums()
  }

  render() {
    const { arrAlbums, arrPhotos} = this.state ;
    return (
      <BrowserRouter>
        <AppContext.Provider value={{ arrPhotos}} >
 
          <Route path="/" exact render={() => (
            <div></div>
          )} />
          <Route path="/photos/:id" component={AlbumPage} />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
