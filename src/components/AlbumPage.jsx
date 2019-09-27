import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppContextHOC from "./HOC/AppContextHOC";
import { Link } from "react-router-dom";

class AlbumPage extends React.Component {

  render() {
    const { albums} = this.props;
    return (
      <div className="container">
        <div className="card border-info mb-3">
          <h1 className="card-header text-center"> Albums </h1>
          <div className="row card-body text-info albums-wrap">
            {albums.map(album => {
                return (
                  <div key={album.id} className="col col-lg-6 mb-2">
                      <Link className="card-text" to={`/photos/${album.id}`}>{album.title}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AppContextHOC(AlbumPage);