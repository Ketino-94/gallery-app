import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';

class PhotosPage extends React.Component {


  render() {
    const { search, photosFilter} = this.props;
    return (
      <div className="container mt-4">
        <Search 
          onChange={this.onChange} 
          value={search} />
        <div className="row">
          {photosFilter.filter(id => {
            return id.albumId === +this.props.match.params.id
            })
            .map(item => {
              return (
                <div key={item.id} className="col col-lg-2 mb-2">
                  <img className="card-img-top" src={item.thumbnailUrl} alt={item.title} />
                  <div className="image-title">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default PhotosPage;