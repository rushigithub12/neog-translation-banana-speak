const txtInput = document.querySelector('#textInput');
const btnTranslate = document.querySelector('#btnTranslate');
const txtOutput = document.querySelector('#textOutput');

const serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslatedURL(input) {
    return serverURL + "?" + "text=" + input;
}

function checkError(error) {
    console.log("server error", error);
}

function clickHandler() {
    const inputText = txtInput.value;

    //fetching the url
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => { console.log(json)
        })
        .catch(checkError)
}

btnTranslate.addEventListener("click", clickHandler);