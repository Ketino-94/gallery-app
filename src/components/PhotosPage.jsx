import React from 'react'
import { observer, inject } from 'mobx-react'
import Search from './Search'
import { Link } from "react-router-dom"

@inject(stores => ({
  store: stores.store,
}))

@observer
class PhotosPage extends React.Component {
  componentDidMount() {
    const { photosByAlbum, albums, fetchPhotos, fetchAlbums } = this.props.store
    window.scrollTo(0, 0);
    if (!photosByAlbum.length) {
      fetchPhotos()
    }
    if (!albums.length) {
      fetchAlbums()
    }
  }


  render() {
    const { store: { search, getAlbum, photosByAlbum, updateSearch }, match: { params: { id } } } = this.props
    if (!photosByAlbum.length && !search.length) {
      return <div className='loading'>Loading...</div>
    }
    return (
      <div className="container mt-4">
        <div className="back mb-4">
          <Link to={"/"}>← Back to Albums</Link>
        </div>
        <h1 className='mt-5'>{getAlbum(id)}</h1>
        <Search
          onChange={updateSearch}
          value={search} />
        <div className="row">
          {photosByAlbum.length
            ? photosByAlbum.filter(photo => {
              return photo.albumId === +id
            })
              .map(item => {
                return (
                  <div key={item.id} className="col col-lg-2 mb-2">
                    <img className="image-photo" src={item.thumbnailUrl} alt={item.title} />
                    <div className="image-title">{item.title}</div>
                  </div>
                )
              })
            : <p className='col'>No results found matching your criteria</p>
          }
        </div>
      </div>
    )
  }
}

export default PhotosPage
