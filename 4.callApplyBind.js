var person1 = {name : "ByreGoda", age : 28}
var person2 = {name : "SunderKrishna", age : 43}
var person3 = {name : "Hima Bindu", age : 78}

function sayHello(message,wish){


	return message+ " " + this.name + " " + this.age
	+ " " + wish;
}

/*var msg1=sayHello.bind(person1,"Hello");
console.log(msg1())
/*var msg1=sayHello.bind(person1,"Hello");
console.log(msg1("hiiii"))*/ // both will work

/*
var msg2=sayHello.bind(person2,"Hello");
console.log(msg2())

var msg3=sayHello.bind(person3,"Hello");
console.log(msg3())
*/
var msgCall=sayHello.call(person2,"Hello","BE Happy");
console.log(msgCall)

var msgApply=sayHello.apply(person1,["Hello","Be Happy"]);
console.log(msgApply)
