const gamesContainer = document.querySelector(".games__container");

const urlApi = `http://hunglikeabee.one/CMS-CA/wp-json/wc/store/products`

async function getRestApi() {
    try {
        const getData = await fetch("https://noroffcors.herokuapp.com/" + urlApi);
        const result = await getData.json();

        gamesContainer.innerHTML = "";
        
        for(let i = 0; i < result.length; i++) {
                        gamesContainer.innerHTML += `<div class="product">
                                                        <a href="details.html?game=${result[i].id}" class="game${result[i].id}">
                                                            <h2 class="product-name">${result[i].name}</h2>
                                                            <div style="background-image: url(${result[i].images[0].src})" class="product-image"></div>
                                                            <div class="product-price">${result[i].prices.price} NOK</div>
                                                        </a>
                                                        <button class="product-button" data-product="${result[i].id}">Add to cart</button>
                                                    </div>`;
        }
        
       


        //Sorting things out

        const sortBy = document.querySelector("#sortby")
        sortBy.addEventListener("click", selectSort)

        function selectSort() {
            if (sortBy.value == "name") {
                function fixOrder( a, b ) {
                    if ( a.name < b.name ){
                    return -1;
                    }
                    if ( a.name > b.name ){
                    return 1;
                    }
                    return 0;
                }
                result.sort(fixOrder);
            }
            if (sortBy.value == "price") {
                function fixOrder( a, b ) {
                    if ( parseInt(a.prices.price) < parseInt(b.prices.price) ){
                    return -1;
                    }
                    if ( parseInt(a.prices.price) > parseInt(b.prices.price) ){
                    return 1;
                    }
                    return 0;
                }
                result.sort(fixOrder);
            }

            gamesContainer.innerHTML = "";
            for(let i = 0; i < result.length; i++) {
                gamesContainer.innerHTML += `<div class="product">
                                                <a href="details.html?game=${result[i].id}" class="game${result[i].id}">
                                                    <h2 class="product-name">${result[i].name}</h2>
                                                    <div style="background-image: url(${result[i].images[0].src})" class="product-image"></div>
                                                    <div class="product-price">${result[i].prices.price} NOK</div>
                                                </a>
                                                <button class="product-button" data-product="${result[i].id}">Add to cart</button>
                                            </div>`;



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