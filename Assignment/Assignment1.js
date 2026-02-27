var a = 10, b = 25, c = 15;

var largest = (a > b) 
                ? (a > c ? a : c) 
                : (b > c ? b : c);

document.write("Largest number is: " + largest);
