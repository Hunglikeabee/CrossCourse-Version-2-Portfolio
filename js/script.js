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

// window.onclick = function(event) {
//     if(!event.target.classList.contains(".cart")) {
//         cart.style.display = "none";
//     }

// }

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

        let checkProducts = [];
    
       for( let i = 0; i < cartItems.length; i++) {
        checkProducts.push(cartItems[i])
        console.log(checkProducts)
        
        for( let j = 0; j < checkProducts.length; j++) {
            if(checkProducts[j] == cartItems[i]) {
                continue;
            }
    
    
            else {
                total += parseInt(cartItems[i].prices.price);
                            
                itemQuantity++;
                cartQuantity.innerHTML = "Total items: " + itemQuantity;
        
                cartList.innerHTML += `
                <div class="cart-item">
                    <a href="details.html?game=${cartItems[i].id}">
                        <h4>${cartItems[i].name}</h4>
                        <div style="background-image: url(${cartItems[i].images[0].src})" class="cart-image"></div>
                        
                    </a>
                    <div class="minus__container"><i id="minus-circle" data-product="${cartItems[i].id}" class="fas fa-minus-circle"></i></div>
                </div>
                `
            }
        }
        



        };

        

        
        
        const decimalFix = parseFloat(`${total}`).toFixed(2);
        totalContainer.innerHTML = `Total: ${decimalFix}NOK`;
     
     
        


        const minusButton = document.querySelectorAll(".minus__container");

        minusButton.forEach(function(minusButton) {
            minusButton.onclick = function(){
                localStorage.removeItem("cartList");
                cartItems = [];
                itemQuantity = 0;
                showCart();
                
            }
            
        });
     



    }

};

/* Amount button function */

async function changeAmount(itemToChange, amountChanged) {
    


    try {


        const getData = await fetch("https://noroffcors.herokuapp.com/" + urlApi);
        const result = await getData.json();

        let countTotal = 0;
    
        for ( let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].id === itemToChange) {
                countTotal++;
            }
    
    
    
    
                    const itemToAdd = result.find(item => item.id == itemToChange);
                    cartItems.push(itemToAdd);
                    showCart(cartItems);
                    localStorage.setItem("cartList", JSON.stringify(cartItems));
    
    
    
    
            if( countTotal < 0) {
                countTotal = 0;
            }
    
            console.log(cartItems)
        }
        console.log(countTotal);
        cartItems[0].length = amountChanged + countTotal
        console.log(cartItems)
    }
    


    catch(error) {
        console.log(error)
    }

}

// changeAmount(25, 1);










/* Counter of items in localstorage */

function storageCounter(itemToCount) {
    var countedItems = 0;
    
    for( let i = 0; i < cartItems.length; i++) {
       
        if(cartItems.id === itemToCount) {
            countedItems++;
        }
    }
    return countedItems;
}

storageCounter();



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

// function showCart(cartItems) {
//     cart.style.display = "block";
//     cartList.innerHTML = "";
//     let total = 0;

//     let itemQuantity = 0;

    
//     cartItems.forEach(function(cartElement) {
//         total += parseInt(cartElement.prices.price);
                    
//         itemQuantity++;
//         cartQuantity.innerHTML = "Total items: " + itemQuantity;

//         cartList.innerHTML += `
//         <div class="cart-item">
//             <a href="details.html?game=${cartElement.id}">
//                 <h4>${cartElement.name}</h4>
//                 <div style="background-image: url(${cartElement.images[0].src})" class="cart-image"></div>
//             </a>
//         </div>
//         `


//     });
//     const decimalFix = parseFloat(`${total}`).toFixed(2);
//     totalContainer.innerHTML = `Total: ${decimalFix}NOK`;
// };