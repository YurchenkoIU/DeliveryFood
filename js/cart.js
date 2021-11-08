const cart = () => {
    const buttonCart = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const modalBody = document.querySelector('.modal-body');
    
    const renderItems = (data) => {
        modalBody.innerHTML='';
        data.forEach(({name, price, count}) => {  
        const cartElem = document.createElement('div');
        

        cartElem.classList.add('food-row');

        cartElem.innerHTML = `
        <span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc">+</button>
					</div>
        `

        modalBody.append(cartElem);

        console.log (cartElem);
        });
    }

    buttonCart.addEventListener('click', () => {
        modalCart.classList.add('is-open');
        //console.log('123');
        if (localStorage.getItem('cart')) {
        renderItems(JSON.parse(localStorage.getItem('cart')))
        console.log(JSON.parse(localStorage.getItem('cart')));
        };
    });

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
        //console.log('123');
    });
}

cart();
