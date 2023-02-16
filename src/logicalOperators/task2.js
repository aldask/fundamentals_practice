const a = "randomWord";

if (a.length > 6 && a[0] === a[0].toUpperCase() ) {
    console.log("Long uppercase word");
} else if (a.length <= 6 && a[0] === a[0].toLowerCase() ) {
    console.log("Short lowercase word");
} else {
    console.log("Short uppercase or long lowercase");
}