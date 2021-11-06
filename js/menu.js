const restourant = 'food-band';
const renderItems = (data) => {
    data.forEach((elem) => {
        console.log(elem);
    });    
}

fetch(`https://deliveryfood-3eb10-default-rtdb.firebaseio.com/db/${restourant}.json`)
.then((Response) => Response.json())
.then((data) => renderItems(data))
.catch((error) => {console.log(error)});