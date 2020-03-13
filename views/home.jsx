const React = require('react')
const Html = require('./layouts/default.jsx')
const Eaten = require('./components/eaten.jsx')
const Noteaten = require('./components/noteaten')
const Header = require('./components/header')
const Top = require('./components/top')

const Home = props => {
  return(
    <Html>
      <div className="container">
        <Header/>
        <Top/>
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