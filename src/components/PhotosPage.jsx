import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppContextHOC from "./HOC/AppContextHOC";

class PhotosPage extends React.Component {

  render() {
    const { arrPhotos} = this.props;
    console.log(typeof +this.props.match.params.id)
    return (
      <div className="container">
        <div className="row">
          {arrPhotos.filter(id => {
            console.log(typeof +id.albumId)
            return id.albumId === +this.props.match.params.id
          })
            .map(item => {
              return (
                <div key={item.id} className="col col-lg-2 image-item mb-2">
                  <img className="card-img-top" src={item.thumbnailUrl} alt="" />
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

export default AppContextHOC(PhotosPage);