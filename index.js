 //Js programming first comment with 
 console.log("Hello World from index.Js");

 var variable = "First"; // var should not be used
 let nam = 'Name111'; // String literal
 let number = 3; // Number Literals

 let boolean_variable = false; // boolean literal
 let first_name = undefined; // undefined literal
 let middle_name = null;

 console.log(number);
 console.log(nam);
 console.log(variable);

 let interestRate = 0.3;

 console.log(interestRate);

 interestRate = 8;
 console.log(interestRate);

 const rate = 5; // const variable can not be changed
 console.log(rate);

 // const rate = 15; this will give errors


 let person = {
     Name: 'shyed',
     age: 30
 }

 person.age = 65;
 person['Name'] = "Shyed";
 console.log(person.age);

 console.log(person.Name);
 let selection = 'Name';
 person[selection] = 'MyName';
 console.log(selection);
 console.log(person.Name);

 /// arrays

 let selectedColors = ['red', 'blue'];
 console.log(selectedColors);
 console.log(selectedColors[1]);
 selectedColors[2] = 'green';
 selectedColors[3] = 7;
 /// arrays are objects too
 console.log(typeof person);
 console.log(typeof selectedColors);
 console.log(selectedColors);

 console.log(selectedColors.length);

 function greet() {
     console.log('Hello from Js');
 }
 greet();

 function greets(names) {
     console.log('Hello from Js ' + names);
 }
 greets('shah');
 greets('shahriar');

 /// performing a task, not return anything
 function greetings(names, lastName) {
     console.log('Hello from Js ' + names + ' ' + lastName);
 }
 greetings('shahear', 'housain');
 greetings('shahear');


 function square(number) {
     return number * number
 }
 /// returns a values
 console.log(square(3));