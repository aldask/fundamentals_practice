/*
Define an enum for a list of currencies that includes euros, British pounds, and Japanese yen

Create a function that takes an amount of money and a currency as arguments and returns the corresponding amount in US dollars

Assume that the conversion rates are as follows: 1 US dollar = 0.82 euros, 1 US dollar = 0.73 British pounds, and 1 US dollar = 108.75 Japanese yen
*/
var Currencies;
(function (Currencies) {
    Currencies[Currencies["Euros"] = 0] = "Euros";
    Currencies[Currencies["BritishPounds"] = 1] = "BritishPounds";
    Currencies[Currencies["JapaneseYen"] = 2] = "JapaneseYen";
})(Currencies || (Currencies = {}));
;
//console.log(Currencies.BritishPounds)
var converter = function (amount, currency) {
    var convertedAmount;
    if (currency === Currencies.Euros) {
        convertedAmount = amount * 0.82;
        return "".concat(amount, " Euros is ").concat(convertedAmount, "$");
    }
    else if (currency === Currencies.BritishPounds) {
        convertedAmount = amount * 0.73;
        return "".concat(amount, " British pounds is ").concat(convertedAmount, "$");
    }
    else if (currency === Currencies.JapaneseYen) {
        convertedAmount = amount * 108.75;
        return "".concat(amount, " Japanese Yen is ").concat(convertedAmount, "$");
    }
    else {
        return "There is no such currency available";
    }
};
console.log(converter(523, Currencies.JapaneseYen));
