const React = require('react')
const Html = require('./layouts/default.jsx')
const Eaten = require('./components/eaten.jsx')
const Noteaten = require('./components/noteaten')

const Home = props => {
  return(
    <Html>
      <div className="container">

        

        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand mb-0">Hamburger application</h1>
        </nav>
        <hr/>

        <div className="card text-center">
          <img className="img-size " src="./assets/images/burger.png"  alt="hamburger"></img>
            <div className="card-body">
              <p className="card-text">Click on button to eat the burger.</p>
            <button type="button" class="btn btn-warning">Click me!!</button>
            </div>
        </div>

        <div className="row">

          <Noteaten>
            {/* {props.burgers.map((elem, index) => {
              if (!elem.eaten) { return (<Burger burger={elem} key={index} />) }})} */}
          </Noteaten>

          <Eaten />


        </div>
      </div>
    </Html>

  )
}

module.exports = Home