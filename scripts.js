const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  console.log(currencySelect.value);

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const ieneToday = 0.039;
  const libraToday = 7.34;
  const bitcoinToday = 502.502;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue / ieneToday);
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImagm = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImagm.src = "./assets/Dolar.png" 
  }

  if (currencySelect.value == "euro") {
  currencyName.innerHTML = "Euro";
  currencyImagm.src = "./assets/euro.png"
}

if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImagm.src = "./assets/libra.png"
}

if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene";
    currencyImagm.src = "./assets/iene.png"
} 

if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImagm.src = "./assets/bitcoin.png"
}

convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
