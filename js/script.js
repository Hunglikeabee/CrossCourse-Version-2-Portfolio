let counter = 0;

/* Check if there is something in localstorage */

if (JSON.parse(localStorage.getItem("cartList")) === null) {
    var cartItems = []
}
else {
    var cartItems = JSON.parse(localStorage.getItem("cartList"));
}

/* Add Shoppingcart button */

document.body.innerHTML += `<div class="cart__button-body"><i id="plus-circle" class="fas fa-plus-circle"></i></div>`

const cartButtonBody = document.querySelector(".cart__button-body");

cartButtonBody.addEventListener("click", showCart)


function showCart() {
    if( event.target.classList == "cart__button-body" && cart.style.display == "block" || 
        event.target.classList == "fas fa-plus-circle" && cart.style.display == "block" ) {
        cart.style.display = "none";
    }
    else {
        cart.style.display = "block";
        cartList.innerHTML = "";
        cartQuantity.innerHTML = "";
        let total = 0;
    
        let itemQuantity = 0;
    
       for( let i = 0; i < cartItems.length; i++) {
            total += parseInt(cartItems[i].prices.price * cartItems[i].quantity);
                        
            itemQuantity += cartItems[i].quantity;
            cartQuantity.innerHTML = "Total items: " + itemQuantity;

            cartList.innerHTML += `
            <div class="cart-item">
                <a href="details.html?game=${cartItems[i].id}">
                    <h4>${cartItems[i].name}</h4>
                    <div style="background-image: url(${cartItems[i].images[0].src})" class="cart-image"></div>
                </a>
                <div class="amount__container">
                    <div class="fas fa-minus-circle minus-button" data-product="${cartItems[i].id}"></div>
                    <div>Quantity: ${cartItems[i].quantity}</div>
                    <div class="fas fa-plus-circle plus-button" data-product="${cartItems[i].id}"></div>
                </div>
            </div>
            `
        };
                
    /* Add minus/plus buttons to products */


    const minusButton = document.querySelectorAll(".minus-button");
    const plusButton = document.querySelectorAll(".plus-button");

    minusButton.forEach(function(button) {
        button.onclick = function(event){
            const itemToMinus = cartItems.find(item => item.id == event.target.dataset.product);

            if(itemToMinus.quantity === 1) {
                itemToMinus.removeItem(itemToMinus);
            }
            else {
                itemToMinus.quantity = itemToMinus.quantity - 1;
            }

            showCart();
            localStorage.setItem("cartList", JSON.stringify(cartItems));
        }
    });

    plusButton.forEach(function(button) {
        button.onclick = function(event){
            const itemToPlus = cartItems.find(item => item.id == event.target.dataset.product);

            itemToPlus.quantity = itemToPlus.quantity + 1

            showCart();
            localStorage.setItem("cartList", JSON.stringify(cartItems));
        }
    })


        const decimalFix = parseFloat(`${total}`).toFixed(2);
        totalContainer.innerHTML = `Total: ${decimalFix}NOK`;
    }
};

/* Search function */

const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", () => {
    let searchQuery = searchInput.value.trim();
    window.location.href = `search.html?search=${searchQuery}`
});

searchInput.addEventListener("keyup", (e) => {
    let checkKey = e.key;
    let searchQuery = searchInput.value.trim();
    if (checkKey === "Enter") {
        window.location.href = `search.html?search=${searchQuery}`
    }
});


/* Show Small Shopping Cart */

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".cart-total");
const cartQuantity = document.querySelector(".cart-quantity");



