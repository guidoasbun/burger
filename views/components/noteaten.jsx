const React = require('react')

const Noteaten = props => {
  return (
    <div className="col-md-6">
      <div className="alert alert-primary" role="alert">
        Hamburger not eaten
            </div>
      <ul className="list-group">
        <li className="list-group-item">No Burgers to display yet</li>
      </ul>
    </div>
  )
}

module.exports = Noteaten