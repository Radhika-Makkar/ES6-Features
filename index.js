// -------- Javascript Variable-----------

// var counter=10;
// var counter=5; //we can redeclare the variable
// console.log(counter);

// -----------ES6 Variable------------

// let counter=1;
// let counter=2; //We cannot redeclare the variable
// const first=2;
// console.log(counter);
// console.log(first);

//------JS BLOCK Scope--------

// function sayName()
// {
//     var name='Ed';
//     console.log("my name is"+name);
// }
// console.log(name); //We cannot access the variable outside the function scope

//------ES6 BLOCK Scope--------
// const list=[1,2,3,4,5];
// for(let i=0;i<list.length;i++)
// {
//     console.log(list[i]);
// }
// console.log(i); //let and const are block-scope so it will show an error

//------JS Concatnation-----

// var name='Ed';
// console.log("my name is "+name);

//-----ES6 Concatnation

// var name='Ed';
// console.log(`My name is ${name}`); //Back-ticks are used

//----JS Object Literal-----

// function getBook(title,author)
// {
//     return {
//         title:title,
//         author:author
//     }
// };
// var book=new getBook("Harry Potter","JK");
// console.log(book);

//--ES6 Object literal--------

// function getBook(title,author)
// {
//     return {
//         title, //If parenthesis name and value are same then we can use only single name
//         author
//     }
// };
// var book=new getBook("Harry Potter","JK");
// console.log(book);

//----JS OBJECT DECONSTRUCTION-----

// var user={
//     name:"ed",
//     age:25
// }
// var myname=user.name;
// console.log(myname);

//------ES6 OBJECT DECONSTRUCTION------
// var user={
//     name:"ed",
//     age:25
// }

// const {name,age}=user;
// console.log(name,age);
// console.log(name);
// console.log(age);

//Function Declaration in JS----

// function sayName()
// {
//     console.log("my name is Ed");
// }
// sayName();

// var sayAge=function()
// {
//     console.log("My Age is 23");

// }
// sayAge();

//------ES6 FUNCTION DECLARATION-----

// const sayLocation=()=>
// {
//     console.log("My location is unknown");
// }
// sayLocation();

//-----JS this keyword---

// var user={
//     name:"ED",
//     age:25,
// sayNmae:function()
// {
//     var that=this; //because the reference was not at object if we are using it in inner function that is why we ssaved reference of object in that.
//         console.log("my name is "+this.name);
//         var fullName=function()
//         {
//             console.log("my name is"+that.name+" "+"My age is"+that.age);
//         }
//         fullName();
// }

// }
// user.sayNmae();

//----ES6 this keyword---

// var user={
//     name:'Ed',
//     age:25,
//     sayName:function()
//     {
//         console.log(`my name is ${this.name}`);
//         const fullName=()=>
//         {
//             console.log(`my name i${this.name} and my age is ${this.age}`);

//         } //Arrow functions help us to not do the extra work and save the reference.
//         fullName();
//     }
// }
// user.sayName();

//----JS DEFAULT PARAMETERS-----
// function multiply(x,y)
// {
//     var a=x || 1;
//     var b=y || 4;
//     console.log(a*b);
// }
// multiply(2,5);
// multiply();//if wekeep the paranthesiss blank default value will be taken

//-----ES6 DEFAULT PARAMTERS
// const multiply=((a=1,b=1)=>
// {
 
//     console.log(a*b);
// });
// multiply(2,5);
// multiply();

//ARRAY FUNCTION IN ES6 

// const shoppingList=['Milk','Chocos','Eggs'];

// shoppingList.forEach((product)=>
// console.log(product));

// const maplist=shoppingList.map((item)=>{
// return item}
// );
// console.log(maplist)

// const filterlist=shoppingList.filter((item)=>{
// return item==="Eggs"});
// console.log(filterlist);

//----JS CONSTRUCTOR FUNCTIONS AND CLASSES

// function Person(name,age,hairColor)
// {
//     this.name=name;
//     this.age=age;
//     this.hairColor=hairColor;
// }
// Person.prototype.sayName=function()
// {
//     console.log("My name is "+this.name);

// }
// var Ed=new Person("Ed",25,"black");
// Ed.sayName();
// console.log(Ed);


// function Person(name,age,hairColor)
// {
//     this.name=name;
//     this.age=age;
//     this.hairColor=hairColor;
// }
// Person.prototype.sayName=function()
// {
//     console.log("My name is "+this.name);

// }
// function Ed(occupation,hobbies,name,age,hairColor)
// {
//     Person.call(this,name,age,hairColor);
//     this.occupation=occupation;
//     this.hobbies=hobbies;

// }
// Ed.prototype=Object.create(Person.prototype);
// const person=new Ed("Dev","Dancing","Ed","23","black");

// person.sayName();

// ------ES6 Constructor classes and functions----

// class shoppingList
// {
//     constructor(items,nr)
//     {
// this.items=items;
// this.nr=nr;
//     }
//     sayList()
//     {
//         console.log(this.items);
//     }
// }
// const list=new shoppingList(['Milk','eggs'],2);
// list.sayList();

// class Product extends shoppingList
// {
//     constructor(items,nr,amount,cost)
//     {
//         super(items,nr);
//         this.amount=amount;
//         this.cost=cost;

//     }
// }
// const product=new Product(['Redbull','Choclate'],3,2,20);
// product.sayList();



