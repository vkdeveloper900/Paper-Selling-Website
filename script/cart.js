

const cart = document.getElementById('cart');
const totalAmount = document.getElementById('total-amount');
const purchaseButton = document.getElementById('purchase-button');

// Function to load cart data from local storage
function loadCartFromStorage() {
    const cartData = localStorage.getItem('cart');
    return JSON.parse(cartData) || [];
}

// Function to print the number of items available in local storage
function updateCartCount() {
    const cartItems = loadCartFromStorage();
    const numberOfItems = cartItems ? cartItems.length : 0;

    // Access the span element by its ID
    const cartCountElement = document.getElementById('cart-count');

    // Update the content of the span element
    cartCountElement.textContent = numberOfItems.toString();
}

// Call the function to update the cart count on page load
updateCartCount();

// Periodically check for updates (every 2 seconds in this example)
setInterval(function () {
    // Update the cart count
    updateCartCount();
}, 2000); // Adjust the time interval as needed


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

            // Create a "Remove" button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(item.id));

            cartItem.appendChild(imgElement);
            cartItem.appendChild(detailsDiv);
            cartItem.appendChild(removeButton);

            cart.appendChild(cartItem);

            // Update the total price
            totalPrice += item.price;
        });
        
    } else {
        const emptyCartMessage = document.createElement('li');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cart.appendChild(emptyCartMessage);

          // Show only the "Add Items to Cart" button when the cart is empty
        purchaseButton.style.display = 'none';

        
         // Add a button after the "Your cart is empty." message
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Items to Cart';
    addButton.addEventListener('click', () => {
        // Add your logic to redirect or perform an action when the button is clicked
        window.location.href = 'https://vkdeveloper900.github.io/Paper-Selling-Website/#university';

    });

    cart.appendChild(addButton);
    }

    // Display the total price
    totalAmount.textContent = totalPrice.toFixed(2);
    updateCartButtonDisplay();
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


});



