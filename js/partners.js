const cardsRestaurants = document.querySelector('.cards-restaurants');

console.dir(cardsRestaurants);

const renderItems = (data) => {
    data.forEach((elem) => {
        const {name, time_of_delivery, image, stars, price, products, kitchen}=elem;
        const a = document.createElement('a');
        
        //a.setAttribute('href','/restaurant.html');
        a.classList.add('card','card-restaurant');
        a.dataset.products = products;

        a.innerHTML = `
        <img src=${image} alt=${name} class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">${name}</h3>
                <span class="card-tag tag">${time_of_delivery} мин</span>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="rating">
                    ${stars}
                </div>
                <div class="price">От ${price} ₽</div>
                <div class="category">${kitchen}</div>
            </div>
            <!-- /.card-info -->
        </div>
        <!-- /.card-text -->
        ;`
        
        cardsRestaurants.append(a);

        a.addEventListener('click', (e) =>{
            e.preventDefault;
            
            if (localStorage.getItem('user')) {
                localStorage.setItem('restourant', JSON.stringify(elem));
                a.setAttribute('href','/restaurant.html');
                window.location.href = '/restourant.html';
            } else {                
                modalAuth.style.display = 'flex';
            }

        })
    });    
}

fetch('https://deliveryfood-3eb10-default-rtdb.firebaseio.com/db/partners.json')
.then((Response) => Response.json())
.then((data) => renderItems(data))
.catch((error) => {console.log(error)});