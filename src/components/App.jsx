import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from "react-router-dom";

@inject(stores => ({
  store: stores.store,
}))

@observer
class App extends React.Component {
  componentDidMount() {
    const { photosByAlbum, albums, fetchPhotos, fetchAlbums } = this.props.store
    if (!photosByAlbum.length) {
      fetchPhotos()
    }
    if (!albums.length) {
      fetchAlbums()
    }
  }

  render() {
    const { albums } = this.props.store;
    if (!albums.length) {
      return <div className='loading'>Loading...</div>
    }
    return (
      <div className="container">
        <h1 className='text-center mb-2'>Albums</h1>
        <div className="row">
          {albums.map(album => {
            return (
              <div key={album.id} className="col col-lg-6 image-item mb-2 ">
                <Link className="album" to={`/albums/${album.id}`}>{album.title}</Link>
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
