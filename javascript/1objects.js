// Objects can store collection of data together (names, markers, functions)
// Different to arrays in the way objects store key-value pairs. 
// Every JS object has a hiffrn onnection to another object called its
// prototype. 

// Defining a object + variable == Object (like pointer.)
const obj = { data: 42 };
obj.data = 43;
console.log(obj); // { data: 43 }

// object
const myObject = {
    property: "value",
    otherProperty: "other value",
    "obnoxious property": function() {
        return "obnoxious value";
    }
}
// Dot notation:
myObject.property; // 'value'
// Bracket notation: 
myObject["obnoxious property"]; //[function]

// Dot notation does not work with spaces. 
// myObject."obnoxious proeprty" will not work

// Constructor for making "Book" objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        console.log('info');
    };
}
const harryPotter = new Book("Harry Potter", "JK Rowling", 400);
harryPotter.info(); // info

// Prototypes
// Object's prototype is like a shared library. 
// Essentially there to save memory. TO assign one thing to multiple objects. 
// Prototyepes are objects that can contain names , markers and functions. 
