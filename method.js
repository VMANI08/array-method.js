
//1. at()

let num = [12, 13,14,15];

index = 1;

console.log(num.at(index));

index = -1;

console.log(num.at(index))

// 2.concat()

var array1 = ['a', 'b','c'];

var array2 = ['d','e', 'f'];

var array3 = ['g', 'h', 'i'];

 var array4 = array1.concat(array2,array3);

console.log(array4);

// 3. copyWithin

var value = [10, 20 , 30 , 40];

console.log(value.copyWithin(1,2));
 
// 4. Fill

var fruits=["apple","van" ,"bike"]

fruits.fill("mani", 1);

console.log(fruits);


//  5.includes()
var Name = ["surya", "ajith", "karthick"]

console.log(Name.includes("surya"));

var fruties = ["mango", "banana", "watermelone"]

console.log(Name.includes('orange'));

// 6.indexof()

let animal = ["lion", "tiger", "elephant","lion"]

console.log(animal.indexOf("lion"))

console.log(animal.indexOf("bear"))

