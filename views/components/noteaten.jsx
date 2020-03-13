const React = require('react')

const Noteaten = props => {
  return (
    <div className="col-md-6">
      <div className="alert alert-primary" role="alert">
        Hamburger not eaten
      </div>
      <div className="alert alert-warning" role="alert">
        Click on a burger to Devour it!!!
      </div>
      <ul id="notEatenlist" className="list-group">
        {/* <li className="list-group-item">No Burgers to display yet</li> */}
      </ul>
    </div>
  )
}

module.exports = Noteaten