let cart = [];

function addToCart(product, price, image) {
    cart.push({ product, price, image });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.product}" style="width:50px; height:auto;"> ${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    total.textContent = totalPrice;
}
