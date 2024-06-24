import {API_KEY} from './API-key.js'




let container = document.createElement("div");
    container.className = "price-container";
    document.body.appendChild(container);

let header = document.createElement("h1");
    header.textContent = "Exchange Rate";
    container.appendChild(header);

    // div -1- input
let currentPrice = document.createElement("div");
    currentPrice.className = "current-price";
    container.appendChild(currentPrice);    


let amount = document.createElement("input");
    amount.className = "text";
    amount.type = "number";
    amount.placeholder = "Enter Amount In USD $ ";
    currentPrice.appendChild(amount);
    
let button = document.createElement("button");
    button.textContent = "Convert";
    currentPrice.appendChild(button);    


    // div -2-  The All output
let convertedPrice = document.createElement("div");
    convertedPrice.className = "price";
    container.appendChild(convertedPrice);

    // div output 1
let eurDiv = document.createElement("div");
    eurDiv.textContent = "Price in EUR   : ";
    eurDiv.className = "eur";
    convertedPrice.appendChild(eurDiv);
    
let eurText = document.createElement("span");
    eurDiv.appendChild(eurText);

    // div output 2
let uahDiv = document.createElement("div");
    uahDiv.textContent = "Price in UAH   : ";
    uahDiv.className = "uah";
    convertedPrice.appendChild(uahDiv);

let uahText = document.createElement("span");
    uahDiv.appendChild(uahText);

    // div output 3
let sypDiv = document.createElement("div");
    sypDiv.textContent = "Price in SYP : ";
    sypDiv.className = "syp";
    convertedPrice.appendChild(sypDiv);

let sypText = document.createElement("span");
    sypDiv.appendChild(sypText);

    // div output 3
let tryDiv = document.createElement("div");
    tryDiv.textContent = "Price in TRY   : ";
    tryDiv.className = "try";
    convertedPrice.appendChild(tryDiv);

let tryText = document.createElement("span");
    tryDiv.appendChild(tryText);

    // div output 3
let egpDiv = document.createElement("div");
    egpDiv.textContent = "Price in EGP   : ";
    egpDiv.className = "egp";
    convertedPrice.appendChild(egpDiv);

let egpText = document.createElement("span");
    egpDiv.appendChild(egpText);

    // div output 4
let sarDiv = document.createElement("div");
    sarDiv.textContent = "Price in SAR   : ";
    sarDiv.className = "sar";
    convertedPrice.appendChild(sarDiv);
    
let sarText = document.createElement("span");
    sarDiv.appendChild(sarText);


        


let egpPrice = document.querySelector(".egp span");
let sarPrice = document.querySelector(".sar span");
let eurPrice = document.querySelector(".eur span");
let uahPrice = document.querySelector(".uah span"); 
let tryPrice = document.querySelector(".try span");  
let sypPrice = document.querySelector(".syp span");

        
        

let exchangeRates = {};


async function getExchangeRates() {
    try {
        const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`);
        const data = await response.json();
        exchangeRates = data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

button.addEventListener('click', async () => {

    await getExchangeRates();

    let amountValue = parseFloat(amount.value);

    if (!isNaN(amountValue)) {
        egpPrice.innerHTML = (amountValue * exchangeRates["EGP"]).toFixed(2);
        sarPrice.innerHTML = (amountValue * exchangeRates["SAR"]).toFixed(2);
        eurPrice.innerHTML = (amountValue * exchangeRates["EUR"]).toFixed(2);
        uahPrice.innerHTML = (amountValue * exchangeRates["UAH"]).toFixed(2);
        tryPrice.innerHTML = (amountValue * exchangeRates["TRY"]).toFixed(2);
        sypPrice.innerHTML = (amountValue * exchangeRates["SYP"]).toFixed(2);
    }

});




