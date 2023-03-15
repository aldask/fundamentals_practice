/*
Define an enum for a list of colors that includes red, green, blue

Create a function that takes a color as an argument and returns the corresponding hex code for that color (red - #FF0000, green - #00FF00, blue - #0000FF)
*/

enum Colors {
    red,
    green,
    blue,
};

const hexFinder = (arg: Colors): string => {
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