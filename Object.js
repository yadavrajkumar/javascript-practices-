//Objects Types ....In java we can create object thes 4 ways

/*var obj =new Object();     //1st way to create object 
console.log(obj);
//console.log(typeof obj);

var obj2 = {};                 //2nd way to create object
console.log(obj2);


var obj3 = Object.create(null);       //3rd way to create object
console.log(obj3);+

function person(){  

}                          

var obj4 =  new person();  //4st way to create object
console.log(obj4)
*/

//============================================================================

var obj = {

	id : 1  // 1st way to add value
};

obj ["name"] = "Raj";   //2nd way to add value

obj.city = "Bangalore";  //3rd way to add value


Object.defineProperty(obj,'state',{   //4th way to add value


	value : "KA"
})

//console.log("Before deletion ",obj)

delete obj.city;

//console.log("after deletion ",obj)


//Modifying objects

//.1 preventExtensions()

// it will allow
/*
  1.wll allow modify existing property
  2.allow deleting existing proprty
  3.will not allow to add new property

*/

/*var person1 ={name : "JohnGalt",age : '35'}

Object.preventExtensions(person1)

person1.name = "Rajkumar"

person1.city="Bangalore";
 
delete person1.age;

console.log(person1)*/



//==========================


//Modifying objects

//.1 seal()

// it will allow
/*
  1.will allow modify existing property
  2.will not allow deleting property
  3.will not allo to add new property

*/

/*var person2 ={name : "JohnGalt",age : '35'}

Object.seal(person2)

person2.name = "Rajkumar"

person2.city="Bangalore";
  
delete person2.age;

console.log(person2)*/



//Modifying objects

//.1 freeze()

// it will allow
/*
  1.will not allow modify existing property
  2.will not allow deleting property
  3.will not allo to add new property

*/


/*var person3 ={name : "JohnGalt",age : '35'}

Object.freeze(person3)

person3.name = "Rajkumar"

person3.city="Bangalore";
  
delete person3.age;

console.log(person3)*/

//===============Adding properties and methods to object=======================================================

/*var newPerson = {
	firstName : "Scott",
	lastName : "Denstnick",
	
	fullname : function(){

		return this.firstName + " " + this.lastName
	}
}
var firstName = newPerson.firstName;
var fullname = newPerson.fullname();

console.log(firstName)

console.log(fullname)*/
//===========Get Keys from an object===========================

var customer = {
          name : "Tuan Bui",
          city : "Boston",
          role : "Tech Boss",
          age  : 37
     }

     var keys = Object.keys(customer)
     console.log(keys)

     var values = Object.values(customer)
     console.log(values)