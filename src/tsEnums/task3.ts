/*
Define an enum for a list of currencies that includes euros, British pounds, and Japanese yen

Create a function that takes an amount of money and a currency as arguments and returns the corresponding amount in US dollars

Assume that the conversion rates are as follows: 1 US dollar = 0.82 euros, 1 US dollar = 0.73 British pounds, and 1 US dollar = 108.75 Japanese yen
*/

enum Currencies {
    Euros,
    BritishPounds,
    JapaneseYen,
};

//console.log(Currencies.BritishPounds)

const converter = (amount: number, currency: Currencies): string => {
    let convertedAmount: number;
    if (currency === Currencies.Euros) {
        convertedAmount = amount * 0.82;
        return `${amount} Euros is ${convertedAmount}$`;
    } else if (currency === Currencies.BritishPounds) {
        convertedAmount = amount * 0.73;
        return `${amount} British pounds is ${convertedAmount}$`;
    } else if (currency === Currencies.JapaneseYen) {
        convertedAmount = amount * 108.75;
        return `${amount} Japanese Yen is ${convertedAmount}$`;
    } else {
        return `There is no such currency available`;
    }
};

console.log(converter(523, Currencies.JapaneseYen));
