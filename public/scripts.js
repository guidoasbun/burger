
const renderNotEatenList = list => {
  axios.get(`./burger`)
  .then((data) =>{
    let burgerDat = {}
    burgerDat = data.data
    burgerDat.forEach(element => {
      if(element.eaten === false){
        const itemElem = document.createElement('li')
        itemElem.id = element.id
        itemElem.className = `items list-group-item`
        itemElem.innerHTML = `${element.burgerName}`
        document.getElementById('notEatenlist').append(itemElem)
       } 
    })
  })
}

const updateBurger = (id) => {
  axios.put(`./burger`, { id: `${id}`, eaten: true})
    .catch(e => console.error(e))
}

const renderEatenList = list => {
  axios.get(`./burger`)
  .then((data) =>{
    let burgerDat = {}
    burgerDat = data.data
    burgerDat.forEach(element => {
      if(element.eaten === true){
        const itemElem = document.createElement('li')
        itemElem.id = element.id
        itemElem.className = `list-group-item`
        itemElem.innerHTML = `${element.burgerName}`
        document.getElementById('eatenlist').append(itemElem)
       } 
    })
  })
}


const createBurger = () => {
  document.getElementById('createBurger').addEventListener('click', event => {
    event.preventDefault()
    console.log('button works')
    axios.post(`/burger`, {
      burgerName: document.getElementById('newBurgerName').value,
        eaten: false
      })
      // .then(() => {
      // })
      .catch(e => console.error(e))
  })
}

renderEatenList()
renderNotEatenList()
createBurger()

document.addEventListener('click', event => {
  event.target.classList.contains('items') ? updateBurger(event.target.id) : null
})


// document.addEventListener('click', event => event.target.classList.contains('Devour') ? devoureBurger(event.target) : null)
