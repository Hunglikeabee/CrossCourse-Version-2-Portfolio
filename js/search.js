const getParameter = document.location.search;
const theParameter = new URLSearchParams(getParameter);
const searchQuery = theParameter.get("search");

const searchAPI = `http://hunglikeabee.one/CMS-CA/wp-json/wc/store/products?_embed&per_page=100&search=${searchQuery}`;

async function getResults() {
    try {
        const searchFetch = await fetch("https://noroffcors.herokuapp.com/" + searchAPI);
        const searchResult = await searchFetch.json();
        const overlayWhitebox = document.querySelector(".overlay__whitebox")
        overlayWhitebox.innerHTML = "";
        if(searchResult.length === 0) {
            overlayWhitebox.innerHTML = `<h1>Could not find anything match with ${searchQuery}</h1>`;
        }
        else {
            for(let i = 0; i < searchResult.length; i++) {
                overlayWhitebox.innerHTML += `<h1>Search result for: "${searchQuery}"</h1>
                                             <h2>${searchResult[i].name}</h2>
                                             <div class="image-game" style="background-image: url(${searchResult[i].images[0].src})"></div>
                                             <div>Price: ${searchResult[i].prices.price}$</div`
            }
        }
    }
    catch(error) {
        console.log(error)
    }
}

getResults();