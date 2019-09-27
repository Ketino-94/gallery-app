import React from 'react'

export default class Search extends React.Component {
  render() {
    const { onChange, search } = this.props
    return (
      <div className="row">
        <form className='col'>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search photos"
              name="search"
              value={search}
              onChange={onChange} />
          </div>
        </form>
      </div>
    )
  }
}
