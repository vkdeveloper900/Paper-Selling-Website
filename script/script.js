
// add data into localStorage start      

// const localStorageContent = localStorage.getItem('name');


// let names;
// if(localStorageContent == null){
//     names = [];
// } else{
// names = JSON.parse(localStorageContent);
// }
// const myArray = [1,2,3];
// console.log(JSON.stringify( myArray ) );


// names.push('juan');
// names.push('local');
// names.push('store');
// names.push('mst hai na');
// localStorage.setItem('names', JSON.stringify( names ) );


// console.log(localStorageContent);


// localStorage.setItem('name', 'vinod');



// add data into localStorage end 😇

// remove data into localStorage start 

// localStorage.removeItem('names');

// remove data into localStorage end 😇


// add to cart 

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {

    const productElement = event.target.parentElement.parentElement;
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('.sub').textContent;
    const productPrice = parseFloat(productElement.querySelector('rs').textContent);
    const productImageSrc = productElement.querySelector('.img').src; // Get the image 
    const downloadUrl = productElement.querySelector('#url').value; // Get the pdf source

    const newItem = {
        id: productId,
        name: productName,
        price: productPrice,
        imageSrc: productImageSrc, // Store the image source
        downloadUrl: downloadUrl,
    };
    // Retrieve the existing cart data from local storage or initialize an empty array
    const cart = loadCartFromStorage() || [];

    cart.push(newItem);

    // Save the updated cart data back to local storage
    saveCartToStorage(cart);

    alert(`${productName} has been added to your cart.`);
}

function saveCartToStorage(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData));
}

function loadCartFromStorage() {
    const cartData = localStorage.getItem('cart');
    return JSON.parse(cartData);
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// menu btn 
var navlinks = document.getElementById("navlinks");

function showMenu() {
    navlinks.style.left = "39%";
}
function hideMenu() {
    navlinks.style.left = "100%";
}
