 /*prototype
 Everything is an object in js
 Every object in js has properties like array have filter,map etc . 
 can be accessed by object.prototype or __proto__
*/ 
// protypical inheritance 

let object = {
    name : "Nipun1",
    city:"hyderabad",
    getIntro : function(){
        console.log(this.name+"from"+this.city)
    }
} 
let object2 ={
    name: "Nipun2"
}
object2.__proto__= object //We're inherting properties of object 
console.log(object2.name)
console.log(object2.city)
console.log(object2.getIntro())
/* modern method to use prototype
Object.create(proto, [descriptors]) 
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/

let object3=Object.create(object)
console.log(object3.name)
Object.setPrototypeOf(object3, {}); // sets to {}
console.log(object3)

let object4 = Object.create(object, {
    age: {
      value: 22
    }
  });
console.log(object4.age)

let dictionary = Object.create(null);
dictionary.fruit = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"

function object5(name) {
    this.name = name;
  }
  object5.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let temp = new object5("object5");
  console.log(temp.sayHi())

  