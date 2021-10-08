const gamePlatform = document.querySelector(".game-platform");
const gameName = document.querySelector(".game-name");
const gameCondition = document.querySelector(".game-condition");

const formSellGame = document.querySelector("#form__sell-game");
const formButton = document.querySelector(".form__sell-button");

const gamePlatformValue = gamePlatform.value;
const gameNameValue = gameName.value;
const gameConditionValue = gameCondition.value;

const CORS = "https://noroffcors.herokuapp.com/"

async function sendGame(event) {
    console.log("why!")
    event.preventDefault()

    const formData = JSON.stringify({
        name: gameNameValue,
        short_description: gameConditionValue,
        description: gamePlatformValue
    })
    console.log("what")

    const sendGameApi = "https://hunglikeabee.one/CMS-CA/wp-json/wc/v2/products"
    
    sendOptions = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Basic",
            "username": "ck_5afeb0825ec74753cf9cd2cefaf2ba52bceaa3f0",
            "password": "cs_23566be8941b702521af9adc83708c15f1923e13"
        },
        method: "POST",
        body: formData
    }
    
    try {
        const sendGame = await fetch(CORS + sendGameApi, sendOptions)
        console.log(sendGame)
    }
    catch (error) {
        console.log(error)
    }
}

formButton.addEventListener("click", sendGame)