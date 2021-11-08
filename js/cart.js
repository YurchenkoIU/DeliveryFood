const cart = () => {
    const buttonCart = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const modalBody = document.querySelector('.modal-body');
    const buttonSent = modalCart.querySelector('.button-primary')
    
const resetCart = () => {
    modalBody.innerHTML='';
    localStorage.removeItem('cart');
    modalCart.classList.remove('is-open')
}

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        cartArray.map((item) => {
            if (item.id === id) {
                item.count++;
            }
            return item;
        })

        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);        
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0;
            }
            return item;
        })

        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);        
    }

    const renderItems = (data) => {
        modalBody.innerHTML='';
        data.forEach(({name, price, count, id}) => {  
        const cartElem = document.createElement('div');
        

        cartElem.classList.add('food-row');

        cartElem.innerHTML = `
        <span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec" data-index="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc" data-index="${id}">+</button>
					</div>
        `
        modalBody.append(cartElem);        
        });
    }

    modalBody.addEventListener('click', (e) => {
        e.preventDefault;

        if (e.target.classList.contains ('btn-inc')) {
            incrementCount(e.target.dataset.index);
        } else if (e.target.classList.contains ('btn-dec')) {
            decrementCount(e.target.dataset.index);
        }
        
    })

    buttonSent.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart')

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            body: cartArray
        })
        .then(response => {
            if(response.ok) {
                resetCart()
            }
        })
        .catch(e => {
            console.error(e)
        })
    })

    buttonCart.addEventListener('click', () => {
        modalCart.classList.add('is-open');
        //console.log('123');
        if (localStorage.getItem('cart')) {
        renderItems(JSON.parse(localStorage.getItem('cart')))        
        };
    });

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');        
    });
}

cart();
