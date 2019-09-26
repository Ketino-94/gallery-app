import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from "react-router-dom";
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
      <div className="container">
        <h1> Gallery </h1>
        <div className="row">
          {albums.map(album => {
            return (
              <div key={album.id} className="col col-lg-6 image-item mb-2">
                <Link className="image-title" to={`/photos/${album.id}`}>{album.title}</Link>
              </div>
            )
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
