/*
Define an enum for a list of colors that includes red, green, blue

Create a function that takes a color as an argument and returns the corresponding hex code for that color (red - #FF0000, green - #00FF00, blue - #0000FF)
*/
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
;
var hexFinder = function (arg) {
    switch (arg) {
        case Colors.red:
            return "#FF0000";
        case Colors.green:
            return "#00FF00";
        case Colors.blue:
            return "#0000FF";
    }
};
console.log(hexFinder(Colors.blue));
