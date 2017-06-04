/************Creating Function***************************/
/********1.Regular Function************/

/*console.log(sayHello())

function sayHello(){

	return "Hello World !!"
}



var message =sayHello();

	console.log(message)




	//console.log(sayAgain()) //error
//console.log(sayAgain) // undefined

	var sayAgain = function() {
		

	         return "Hello Again";	
	     }	

console.log(sayAgain)
console.log(sayAgain())*/

/*************3.Constructor function*************/

function Person(firstName,LastName){


	this.firstName = firstName
	this.lastname = LastName
}

Person.prototype.fullName = function(){

	return this.firstName + " " + this.lastname;
}

var latestPersion1 = new Person("Raj","Kumar");
var latestPersion2 = new Person("raj","Yadav");
var latestPersion3 = new Person("Raju","Yadav");
console.log(latestPersion1.fullName())
console.log(latestPersion2.fullName())
console.log(latestPersion3.fullName())

/*(function(message){
	console.log("hiii  " +message)
})

("self invoke function")
*/
