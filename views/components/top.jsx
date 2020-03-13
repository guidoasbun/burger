const React = require('react')

const Top = props => {
  return (
    <div className="card text-center">
      <img className="img-size " src="/assets/images/burger.png" alt="hamburger"></img>
      <form>
        <div>
          <label>Enter burger name</label>
          <input type="text" className="form-control" id="newBurgerName"></input>
          <br />
          <button id="createBurger" type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <div className="card-body">
        {/* <p className="card-text">Click on button to eat the burger.</p>
        <button  type="button" className="btn btn-warning">Devour It</button> */}
      </div>
    </div>
  )
}

module.exports = Top