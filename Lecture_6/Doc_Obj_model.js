/*
 ____                                        _           
|  _ \  ___   ___ _   _ _ __ ___   ___ _ __ | |_         
| | | |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __|        
| |_| | (_) | (__| |_| | | | | | |  __/ | | | |_         
|____/ \___/ \___|\__,_|_| |_| |_|\___|_| |_|\__|      _ 
 / _ \| |__ (_) ___  ___| |_  |  \/  | ___   __| | ___| |
| | | | '_ \| |/ _ \/ __| __| | |\/| |/ _ \ / _` |/ _ \ |
| |_| | |_) | |  __/ (__| |_  | |  | | (_) | (_| |  __/ |
 \___/|_.__// |\___|\___|\__| |_|  |_|\___/ \__,_|\___|_|
          |__/              
           


 == Document Object Model (DOM) ==

The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
It represents the structure of a document as a tree of objects, 
where each object corresponds to a part of the document 
(such as an element, attribute, or text). 
The DOM allows developers to manipulate the content, 
structure, and style of a document dynamically using JavaScript.*/

/* What is Window Object Model (WOM)?

The Window Object Model (WOM) is a programming interface for the browser window.
It represents the browser window as an object,
allowing developers to manipulate the window's properties and behavior using JavaScript.
The WOM provides methods for controlling the size, position, and appearance of the window,
as well as handling events such as resizing, scrolling, and closing the window. 
It also allows developers to access and manipulate the document object model (DOM) 
of the web page displayed in the window.*/

/* When an Document is loaded in the browser,
 the browser creates a global object called "window".
The "window" object represents the browser window and provides access to various properties and
methods that allow developers to interact with the browser and manipulate the content of the web page.
The "window" object is the top-level object in the JavaScript hierarchy and serves as the global scope for all JavaScript code running in the browser. 
It contains properties such as "document", which represents the HTML document loaded in the browser, and methods such as "alert()", which displays a message to the user. 
The "window" object also provides access to other objects such as "navigator", "location", and "history", which allow developers to access information about the user's browser and control navigation within the web page.
*/

//DOM MANIPULATION IN JS
const result = document.getElementById("Para")
result.innerHTML = "Hello World, this is DOM manipulation in JS"
result.style.color = "red"
result.style.fontSize = "30px"
console.log(result)

const classmate=document.getElementByClassName("myClass")
classmate.innerHTML = "Hello World, this is DOM manipulation in JS"
console.log(classmate)

const tgele=document.getElementsByTagName()

const query= document.querySelector()