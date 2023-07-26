//CREATING A POST REQUEST 


const form = document.getElementById("form");

//CREATING AN EVENT LISTENER 

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newId = document.getElementById("id").value;
    const newName = document.getElementById("name").value;
    const newBeer = document.getElementById("beer").value;
    const newPrice = document.getElementById("price").value;

    fetch(" http://localhost:3000/beers", {
        method: 'POST',
        body:JSON.stringify({
            id: newId,
            company: newName,
            bottle: newBeer,
            price: newPrice,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data)
})


// creating a function to add items from the server
// CREATING A GET REQUEST
function addBeer (beer){
    const newList = document.createElement("p");
    newList.innerHTML = `
        <h4>ID: ${beer.id}</h4>
        <h3>Company: ${beer.company}</h3>
        <p>Type: ${beer.bottle}</p>
        <p>Price: ${beer.price}</p>
    `
    document.getElementById("lists").appendChild(newList);
}

// fetch 
fetch("http://localhost:3000/beers")
.then(response => response.json())
.then(data => data.forEach(data => addBeer(data)))