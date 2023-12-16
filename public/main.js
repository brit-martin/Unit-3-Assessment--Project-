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
