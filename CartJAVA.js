
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    const cartItemsContainer = document.getElementById('cart-items');


    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Coșul este gol.</p>';
        return;
    }


    cart.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>${product.name} - ${product.price} RON</p>`;
        cartItemsContainer.appendChild(productElement);
    });
}

function resetCart() {
    localStorage.removeItem('cart');

    displayCart();
    updateTotalPrice();
 
    alert('Comanda a fost trimisă!');
}


function updateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('pret-total').innerText = `Total: ${totalPrice} RON`;
}


window.onload = function() {
    displayCart();
    updateTotalPrice();

  
    const submitButton = document.getElementById('trimite-comanda');
    if (submitButton) {
        submitButton.addEventListener('click', resetCart);
    }
};
