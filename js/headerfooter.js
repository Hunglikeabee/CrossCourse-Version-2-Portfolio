/* BUILD HEADER */

const theHeader = document.querySelector("header");

theHeader.innerHTML = `<section class="header__main">
<a class="logo" aria-label="Game hub logo link main page" href="index.html"></a>
<div  role="search" class="search__container">
    <input type="text" class="search__input" placeholder="Search..." alt="Search bar, enter your query">
    <button aria-label="Search Button" class="search__button"><i class="fas fa-search"></i></button>
</div>
<nav class="nav__main">
    <ul>
        <li>
            <a href="shoppingcart.html" aria-label="Link to shopping cart" class="shoppingcart">
                <i style="color:white;" class="fas fa-shopping-cart menuitems"></i>
            </a>
        </li>
        <li>    
            <a href="contact.html" aria-label="Link to contact page" class="contact">
                <i style="color:white;" class="far fa-envelope menuitems"></i>
            </a>
        </li>
        <li>
            <a href="account.html" aria-label="Link to account page" class="profile">
                <i style="color:white;" class="far fa-user-circle menuitems"></i>
            </a>
        </li>    
    </ul>
</nav>
<label for="hamburger" class="hamburger__menu" tabindex="0"><i class="fas fa-bars"></i></label>
<input type="checkbox" id="hamburger">
<div class="hamburger__dropdown-menu">
    <a href="games.html">Games</a>
    <a href="sellgames.html">Sell Games</a>
    <!-- <a href="games.html">Clothes</a>
    <a href="games.html">Gadgets</a>
    <a href="games.html">Collectibles</a> -->
    <a href="shoppingcart.html">Shopping cart</a>
    <a href="contact.html">Contact us</a>
    <a href="account.html">Account</a>
</div>
</section>
<section class="header__sub">
<nav class="nav__sub">
    <ul>
        <li>
            <a href="games.html">Games</a>
        </li>
        <li>
            <a href="sellgames.html">Sell Games</a>
        </li>
        <!-- <li>
            <a href="games.html">Clothes</a>
        </li>
        <li>
            <a href="games.html">Gadgets</a>
        </li>
        <li>
            <a href="games.html">Collectibles</a>
        </li> -->
    </ul>
</nav>
</section>`

/* BUILD FOOTER */

const theFooter = document.querySelector("footer");

theFooter.innerHTML = `<section class="footer__container">
<div class="footer__divspaces--margin footer__contact">
    <h3>CONTACT US</h3>
    <a href="https://goo.gl/maps/277cBVbZtof7erjJA"><i class="fas fa-map-marker-alt"></i> Museumsvegen 1, Elverum</a>
    <a href="tel:+4762414415"><i class="fas fa-phone-square-alt"></i> +47 624 14415</a>
    <a href="contact.html#contact__form"><i class="far fa-comment-alt"></i> Message us</a>
</div>
<div class="socialmedia footer__divspaces--margin">
    <h3>FOLLOW US</h3>
    <div>
        <label>
            <a href="https://www.facebook.com/groups/716522351730441" aria-label="Link to Facebook page">
                <i class="fab fa-facebook-f"></i>
            </a>
        </label>
        <label>
            <a href="https://www.instagram.com/elverum_frisbeeklubb/" aria-label="Link to Instagram page">
                <i class="fab fa-instagram"></i>
            </a>
        </label>
    </div>
</div>
<div class="footer__openhours-text footer__divspaces--margin">
    <div>
        <h3>OPENING HOURS</h3>
    </div>
    <div>
        <p>Monday</p>
        <p>Closed</p>
    </div>
    <div>
        <p>Tuesday</p>
        <p>10:00 - 20:00</p>
    </div>
    <div>
        <p>Wednesday</p>
        <p>10:00 - 20:00</p>
    </div>
    <div>
        <p>Thursday</p>
        <p>10:00 - 20:00</p>
    </div>
    <div>
        <p>Friday</p>
        <p>10:00 - 20:00</p>
    </div>
    <div>
        <p>Saturday</p>
        <p>10:00 - 18:00</p>
    </div>
    <div>
        <p>Sunday</p>
        <p>Closed</p>
    </div>
</div>
</section>
<div class="copyright">&copy; Game Hub Inc</div>`