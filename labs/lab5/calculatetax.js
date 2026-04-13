/* 
ITMD 541-04 Graduate Student
            Name : Huan Liu 
Student Number: A20503484 
 
*/
// calculate total bill with tax when user input bill total
// Converted Tip Amount=Total Bill with Tax (11%)*tip percentage
// Converted Total Bill with Tip and Tax=Total Bill with Tax (11%)+Converted Tip Amount

var billTotal = document.getElementById("billTotal");
var billTotalTax = document.getElementById("billTotalTax");
var progressBar = document.getElementById("progressBar");
var percentageBar = document.getElementById("percentageBar");
var percentageNumber = document.getElementById("percentageNumber");
var pctage = document.getElementById("pctage");
var currencySelect = document.getElementById("currency");
var tipTaxAmount = document.getElementById("tipTaxAmount");
var tipAmount = document.getElementById("tipAmount");
var taxexempt = document.getElementById("taxexempt");
var currencysymbol = document.getElementsByClassName("currencysymbol");
console.log(currencysymbol);
billTotal.addEventListener("input", function () {
    pctage.value = 0;
    currencyS = currencySelect.value;
    percentageNumber.textContent = 0 + "%";
    checkNumber(billTotal.value);

});

billTotal.addEventListener("blur", function () {

    checkNumber(billTotal.value);
})

//    progress bar for tip percentage

pctage.addEventListener('input', (e) => {
    currencyS = currencySelect.value;
    percentageNumber.textContent = e.target.value + "%";
    percentageFloat = (e.target.value / 100).toFixed(2);
    currencyExchange(parseFloat(billTotalTax.value), percentageFloat, currencyS);
})


//    convert tip amount when user select currency


currencySelect.addEventListener("change", function () {

    var billTotalTax = document.getElementById("billTotalTax");
    var percentageNumber = document.getElementById("percentageNumber");
    var selectedCurrency = currencySelect.value;
    percentageValue = parseFloat(percentageNumber.textContent.replace("%", "") / 100);
    if (!isNaN(tipAmount.value)) {
        if (currencySelect.value === "eur") {
            currencyExchange(parseFloat(billTotalTax.value), percentageValue, currencySelect.value);
        }
        else if (currencySelect.value === "inr") {
            currencyExchange(parseFloat(billTotalTax.value), percentageValue, currencySelect.value);
        } else if (currencySelect.value === 'usd') {
            currencyExchange(parseFloat(billTotalTax.value), percentageValue, currencySelect.value);
        }
    }
});

// check input number 

function checkNumber(inputValue) {

    console.log(" input value" + inputValue);
    var addLi = document.getElementById("addli");

    if (isNaN(inputValue) || inputValue == "" || inputValue == 0) {
        console.log("isNaN");
        addLi.classList.remove("noshow");
        addLi.classList.add("show");
        formateInputData();

    } else {
        inputValue = parseFloat(inputValue);
        var typeValue = typeof inputValue;
        addLi.classList.remove("show");
        addLi.classList.add("noshow");

        if (typeValue === 'number') {

            if (inputValue < 0) {
                addLi.classList.remove("noshow");
                addLi.classList.add("show");
                formateInputData();

            } else {
                caculateNeedData();
            }
        } else {
            addLi.classList.remove("noshow");
            addLi.classList.add("show");
        }
    }

}

function formateInputData() {
    percentageNumber.textContent = 0 + "%";
    tipAmount.value = "0.00";
    tipTaxAmount.value = "0.00";
    billTotalTax.value = "0.00";
    pctage.value = 0;
}

function caculateNeedData() {
    billTotalValue = parseFloat(billTotal.value);
    var taxAmount
    if (taxexempt.checked) {
        taxAmount = 0;
    } else {
        taxAmount = billTotalValue * 0.11;
    }

    var totalWithTax = (billTotalValue + taxAmount).toFixed(2);
    billTotalTax.value = totalWithTax;
    if (tipAmount.value == "") {
        tipAmountValue = 0;
    } else {
        tipAmountValue = tipAmount.value;
    }
    rate = confirmRate(currencyS);
    tipAmount.value = "0.00";
    tipTaxAmount.value = (parseFloat(tipAmountValue) + totalWithTax * rate).toFixed(2);
}

// confirm rate when selecting currency
function confirmRate(currency) {
    if (currency === "eur") {
        rate = 0.95;
        currencysymbol[0].textContent = "€";
        currencysymbol[1].textContent = "€";
    } else if (currency === "inr") {
        rate = 85;
        currencysymbol[0].textContent = "₹";
        currencysymbol[1].textContent = "₹";
    } else if (currency === "usd") {
        rate = 1;
        currencysymbol[0].textContent = "$";
        currencysymbol[1].textContent = "$";
    }
    return rate;
}

// method calculate tip and totalwithtiptax 
function currencyExchange(billTotalTaxValue, percentageValue, currency) {

    rate = confirmRate(currency);
    tipAmountCurrency = (parseFloat(billTotalTax.value * percentageValue) * rate).toFixed(2);
    tipAmount.value = tipAmountCurrency;
    billTotalTaxCurrency = (parseFloat(billTotalTax.value) * rate).toFixed(2);
    tipTaxAmount.value = (parseFloat(tipAmountCurrency) + parseFloat(billTotalTaxCurrency)).toFixed(2);

}


