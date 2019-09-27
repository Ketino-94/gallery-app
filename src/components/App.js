import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from "react-router-dom";
import AlbumPage from './AlbumPage';
import PhotosPage from './PhotosPage';

export const AppContext = React.createContext();
class App extends React.Component {

  state = {
    photos: [],
    albums: [],
    photosFilter: [],
    search: '',
    
  }

  getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(result => {
        this.setState({
          photos: result,
          photosFilter: result
        })
      })
  }

  getAlbums= () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(result => {
        this.setState({
          albums: result
        })
      })
  }

  componentDidMount() {
    this.getPhotos()
    this.getAlbums()
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const photosFilter = this.props.photos.filter(item => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })

    this.setState({
      [name]: value,
      photosFilter
    });

  }

  render() {
    const { albums, photosFilter, photos, search} = this.state ;
    return (
      <BrowserRouter>
        <AppContext.Provider value={{ albums, photosFilter, photos, search }} >
          <Route exact path="/" component={AlbumPage} />
          <Route path="/photos/:id" component={PhotosPage} />
        </AppContext.Provider>
      </BrowserRouter>
    ) 
  }
}

export default App;
