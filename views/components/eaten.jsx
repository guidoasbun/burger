const React = require('react')

const Eaten = props => {
  return(
    <div className="col-md-6">
      <div className="alert alert-danger" role="alert">
        Hamburger eaten
            </div>
      <ul className="list-group">
        <li className="list-group-item">No Burgers to display yet</li>
      </ul>
    </div>
  )
}

module.exports = Eaten