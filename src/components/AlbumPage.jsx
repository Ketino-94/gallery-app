import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppContextHOC from "./HOC/AppContextHOC";
import { Link } from "react-router-dom";

class AlbumPage extends React.Component {

  render() {
    const { albums} = this.props;
    console.log(this.props)
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

export default AppContextHOC(AlbumPage);