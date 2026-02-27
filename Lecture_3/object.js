var person = {
    name: "John",
    age : 30,
    ismarried: true,
    address:{
        street: "Vinay nagar",
        flatNo: 201
    }
}

console.log(person);

for (var key in person){
    if (key != "address"){
        console.log(key + ":" + person[key])
    }
}

var person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.ismarried = false;
person2.address = {}
person2.address.street = "GB Road";
person2["address"]["flatNo"] = 101;

console.log(person2);