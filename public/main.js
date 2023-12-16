let form = document.querySelector('#add-item')
let itemInput = document.querySelector('#create-item')
let locationInput = document.querySelector('#location')
let quantityInput = document.querySelector('#how-many')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (isNaN(+quantityInput.value)){
        alert('please put in a valid number')
        return
    }

    let myBody  = {
        item: itemInput.value,
        quanity: quantityInput.value,
        location: locationInput.value
    }

    axios.post('/add-item', myBody)
    .then ((response) => {
        console.log(response.data)
    })
    .catch ((error) => {
        console.log(error)
    })

})

axios.get('/item')
.then ((response) => {
    addItemsToDom(response.data)
})
.catch ((error) => {
    console.log(error)
})

function addItemsToDom(groceryArray){
  document.querySelector('#grocery-list').innerHTML = "" 

    for ( let i=0; i < groceryArray.length; i++){
       
    let groceryDiv = document.createElement('div')
    let food = document.createElement('h4')
    let howMany = document.createElement('p')
    let store = document.createElement('p')

    groceryDiv.appendChild(food)
    groceryDiv.appendChild(howMany)
    groceryDiv.appendChild(store)

    food.innerHTML = groceryArray[i].item
    howMany.innerHTML = "Quantity: " + groceryArray[i].quantity
    store.innerHTML = "Store: " + groceryArray[i].location
 
    document.querySelector('#grocery-list').appendChild(groceryDiv);
    }

}
