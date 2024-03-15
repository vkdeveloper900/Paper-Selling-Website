const cart = document.getElementById('cart');
const totalAmount = document.getElementById('total-amount');
const purchaseButton = document.getElementById('purchase-button');

function updateCartDisplay() {
    cart.innerHTML = '';

    // Retrieve the cart data from local storage
    const cartItems = loadCartFromStorage();

    let totalPrice = 0;

    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');

            // Create an image element and set its source
            const imgElement = document.createElement('img');
            imgElement.src = item.imageSrc;
            imgElement.alt = item.name;
            imgElement.width = 100; // Set the width of the image

            // Create a div to hold product details
            const detailsDiv = document.createElement('div');
            detailsDiv.innerHTML = `
                <p>${item.name}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;

            // Create a "Download" button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Download';
            removeButton.addEventListener('click', () => removeFromCart(item.id));
            //  window.open(item.downloadUrl, '_blank');

            cartItem.appendChild(imgElement);
            cartItem.appendChild(detailsDiv);
            cartItem.appendChild(removeButton);

            cart.appendChild(cartItem);

            removeButton.addEventListener('click', () => {
              alert('Your Item Is Downloading');
             
               console.log(item.downloadUrl);
              window.open(item.downloadUrl, '_blank');

            });
        });
    } else {
        const emptyCartMessage = document.createElement('li');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cart.appendChild(emptyCartMessage);
    }

    // Display the total price
    totalAmount.textContent = totalPrice.toFixed(2);
}

function loadCartFromStorage() {
    const cartData = localStorage.getItem('cart');
    return JSON.parse(cartData) || [];
}

function removeFromCart(itemId) {
    const cartItems = loadCartFromStorage();
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    saveCartToStorage(updatedCart);
    updateCartDisplay();
}

function saveCartToStorage(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData));
}
// Load and display the cart when the page loads
updateCartDisplay();

// Handle the purchase button click
purchaseButton.addEventListener('click', () => {
// Implement your purchase logic here
alert('Thank you for your purchase!');
// You can clear the cart or perform further actions as needed

// let cartData = localStorage.getItem('cart');
// let cartItems = JSON.parse(cartData);


// cartItems.forEach(item => {
//     console.log(item.downloadUrl);
//     window.open(item.downloadUrl, '_blank');
// });



// saveCartToStorage([]);
// updateCartDisplay();



});