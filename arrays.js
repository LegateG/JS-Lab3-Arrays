// Step 1
let colors = new Array("red", "blue", "green","yellow","black"); 
console.log(colors);
// Step 2
let colorsfirst = colors.at(0); 
let colorsmiddle = colors.at(2);
let colorslast = colors.at(-1);
 // Step 3
console.log(colors.length);
 // Step 4.1 (add element)
colors.push("violet");
console.log(colors);
// Step 4.2 (remove element)
let lastColor = colors.pop();
console.log(lastColor);
console.log(colors);
// Step 4.3 (replace element)
colors.splice(2, 1, "cyan"); //Replacing green with cyan
console.log(colors);
// Step 5
let darkColors = colors.map(color => "dark" + color);
console.log(darkColors);
// Step 6
let [firstColor, secondColor,...rest] = colors;
console.log(firstColor); // Outputs: "red"
console.log(secondColor); // Outputs: "blue"
console.log(rest); // Outputs: ["cyan", "yellow", "black"]