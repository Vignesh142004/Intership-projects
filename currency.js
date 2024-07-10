const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.57 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 130.02 },
    GBP: { USD: 1.34, EUR: 1.14, JPY: 147.58 },
    JPY: { USD: 0.009, EUR: 0.0077, GBP: 0.0068 }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted amount: ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    document.getElementById('result').innerText = `Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
