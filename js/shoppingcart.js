const cartItems = JSON.parse(localStorage.getItem("cartList"))
const cartContainer = document.querySelector(".checkout-list");
const totalContainer = document.querySelector(".checkout-total");

let total = 0;

function makeShoppingCart() {
    cartContainer.innerHTML = "";
    cartItems.forEach(function(cartElement) {
        
        total += parseInt(cartElement.prices.price * cartElement.quantity);
        cartContainer.innerHTML += `<div class="checkout-item">
                                        <div style="background-image: url(${cartElement.images[0].src})" class="checkout-image"></div>
                                        <h4 class="checkout-name">${cartElement.name}</h4>
                                        <div class="quantity__container">
                                            <div class="fas fa-minus-circle minus-button" data-product="${cartElement.id}"></div>
                                            <div class="quantity-number">${cartElement.quantity}</div>
                                            <div class="fas fa-plus-circle plus-button" data-product="${cartElement.id}"></div>
                                        </div>
                                        <div class="checkout-price">${cartElement.prices.price * cartElement.quantity} NOK</div>
                                    </div>`
    });
    
    /* Add minus/plus buttons to products */
    const minusButton = document.querySelectorAll(".minus-button");
    const plusButton = document.querySelectorAll(".plus-button");

    minusButton.forEach(function(button) {
        button.onclick = function(event){
            const itemToMinus = cartItems.find(item => item.id == event.target.dataset.product);
                if(itemToMinus.quantity === 1) {
                    let newCart = cartItems.filter((item) => item.id !== itemToMinus.id)
                    localStorage.setItem("cartList", JSON.stringify(newCart));
                    location.reload();
                }
                else {
                    itemToMinus.quantity = itemToMinus.quantity - 1;
                    localStorage.setItem("cartList", JSON.stringify(cartItems));
                }
                makeShoppingCart();
        }
        
    });

    plusButton.forEach(function(button) {
        button.onclick = function(event){
            const itemToPlus = cartItems.find(item => item.id == event.target.dataset.product);

            itemToPlus.quantity = itemToPlus.quantity + 1

            makeShoppingCart();
            localStorage.setItem("cartList", JSON.stringify(cartItems));
        }
    })

    

}



makeShoppingCart();

const decimalFix = parseFloat(`${total}`).toFixed(2);
    totalContainer.innerHTML = `Total: ${decimalFix}NOK`;


