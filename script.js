// 1. get an item from HTML
const allCoffees = document.getElementById('all-coffees')

// 2. Fetch the API to get all coffees
fetch('http://api.sampleapis.com/coffee/hot')
	.then(coffees => coffees.json()) // format the data into json()
	.then(data => {
		// 3. iterate of the clean data from the json format
		data.forEach(eachItem => {
			// 4. create an html item from each object in array
			let htmlItem = `<div class='coffee-item'>
        <img src='${eachItem.image}' >
          <div> 
            <h1> ${eachItem.id} - ${eachItem.title} </h1>
            <p> ${eachItem.description} </p>
          </div>
        </div>`

			// 5. Create an element to add the previous item
			const element = document.createElement('div')

			element.innerHTML = htmlItem

			// 6. Add item to the previous html element
			allCoffees.appendChild(element)
		})
	})
	.catch(err => console.error(err))
