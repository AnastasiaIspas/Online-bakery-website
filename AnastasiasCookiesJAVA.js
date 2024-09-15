function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(productName + ' a fost adăugat în coș!');
}