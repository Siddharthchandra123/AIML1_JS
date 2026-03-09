/*  _    ____  ____      _ __   __
   / \  |  _ \|  _ \    / \\ \ / /
  / _ \ | |_) | |_) |  / _ \\ V / 
 / ___ \|  _ <|  _ <  / ___ \| |  
/_/   \_\_| \_\_| \_\/_/   \_\_|  

Array is an ordered collection of data either primitive or non-primitive.
It is a data structure that can hold more than one value at a time. 
Array is a special type of Object
It is a collection of any data types. 
It is a collection of elements that are stored in contiguous memory locations. 
It is a collection of elements that are accessed by their index. 
The index of the first element is 0 and the index of the last element is n-1 where n is the number of elements in the array.
*/

var fruits= new Array()
var prices = Array()
var car = new String("Toyota")
var dates = new Date()
console.log(fruits)
console.log(prices)
console.log(car)
console.log(dates)
var fruits = ["Apple", "Banana", "Mango", "Orange"]
fruits.push("Grapes")
console.log(fruits)
console.log(fruits[4])
console.log(fruits.length)
console.log(fruits[fruits.length-1])