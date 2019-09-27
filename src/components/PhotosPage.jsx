import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';
import AppContextHOC from "./HOC/AppContextHOC";

class PhotosPage extends React.Component {

  render() {
    const { search, photosFilter} = this.props;
    return photosFilter ? (
      <div className="container ">
        <div className="card border-info mb-3">
          <div className="card-header">
            <Search 
            onChange={this.onChange} 
            value={search} />
          </div>
          <div className="row card-body text-info">
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
      </div>
    ) : (
      <div> Loading ...</div>
    );
  }
}

export default AppContextHOC(PhotosPage);