const gameDetails  = document.querySelector(".game-details");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".cart-total");
const cartQuantity = document.querySelector(".cart-quantity");


const getParameter = document.location.search;
const params = new URLSearchParams(getParameter);
const game = params.get("game");

if (game === null) {
    location.href = "/index.html";
};

const urlApi = `http://hunglikeabee.one/CMS-CA/wp-json/wc/store/products`

async function getRestApi() {
    try {
        const getData = await fetch("https://noroffcors.herokuapp.com/" + urlApi);
        const result = await getData.json();
        
        for (let i = 0; i < result.length; i++) {
            if (result[i].id == game) {
                document.title = `${result[i].name}`
                

                gameDetails.innerHTML = `<h2>${result[i].name}</h2>
                                        <div style="background-image: url(${result[i].images[0].src})" class="product-image"></div>
                                        <div class="product-text">${result[i].description}</div>
                                        <div class="product-price">${result[i].prices.price} NOK</div>
                                        <button class="product-button" data-product="${result[i].id}">Add to cart</button>
                                        `
            }
        }

        const buttons = document.querySelectorAll(".product-button");
        buttons.forEach(function(button) {
            button.onclick = function(event){
                const itemToAdd = result.find(item => item.id == event.target.dataset.product);
                
                if(cartItems.length === 0 || !checkIfItsThere(itemToAdd.id)) {
                        itemToAdd.quantity = 1;
                        cartItems.push(itemToAdd);
                }
                else {
                    for(let i = 0; i < cartItems.length; i++) {
                        if (itemToAdd.id === cartItems[i].id) {
                            cartItems[i].quantity = cartItems[i].quantity + 1;
                            cartItems.join(itemToAdd.quantity);
                        }
                    }
                }

                function checkIfItsThere(id) {
                    let counter = 0;
                    for ( let i = 0; i < cartItems.length; i++) {
                        if(cartItems[i].id == id) {
                            counter++;
                        }
                    }
                    if (counter > 0) {
                        return true;
                    }
                }
                showCart();
                localStorage.setItem("cartList", JSON.stringify(cartItems));
            }
        });

    }
    catch(error) {
        console.log(error);
    }
}

getRestApi();