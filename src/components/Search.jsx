import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Search extends React.Component {

  render() {
    const { onChange, search} = this.props;
    console.log(this.props)
    return (
      <form className="search-form">
        <div className="form-group">
          <input  
            type="text" 
            className="form-control"  
            placeholder="Search" 
            name="search"
            value={search}
            onChange={onChange} />
        </div>
      </form>
    );
  }
}

export default Search;