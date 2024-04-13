function formalGreeting(){
console.log("How are you?");
}

function casualGreeting(){
    console.log("what's up?");
    }
function greet(type,greetFormal,greetCasual) {
if (type === 'formal') {
    greetFormal()
}
else  if(type=== 'casual')
{   greetCasual();

}
}greet('casual',formalGreeting,casualGreeting);
//
// const arr1 =[1,2,3];
// const arr2 =[];
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr[i]*2)
// }
// console.log(arr2);
const arr1=[1,2,3];
const arr2= arr1.map(function(item){
    return item * 2;
});
console.log(arr2);
//prints[2,4,6]

// const birthYear =[1995,1997,2002,1995,1985];
// const ages=[];
// for (let i = 0; i < birthYear.length; i++) {
//     let age=2018- birthYear[i];
//     ages.push(age);
// }
// console.log(ages);
const birthYear =[1995,1997,2002,1995,1985];
const ages= birthYear.map(year =>2018-year);
console.log(ages);

const persons=[
    {name:'Peter',age:16},
    {name:'Mark',age:18},
    {name:'John',age:27},
    {name:'Jane',age:14},
    {name:'Tony',age:24},
];
const fullAge=persons.filter(persons=> persons.age>=18);
console.log(fullAge);
//
const example = "pretty";
  console.log( `Template literals are ${ example } useful!!!` );
  // Expected output: Template literals are pretty useful!!!
  // Template literal nesting
  function javascriptOrCPlusPlus() { return 'JavaScript'; }
  const outputLiteral = `We are learning about ${`Professional ${javascriptOrCPlusPlus()}`}`
//
function tagFunction(strings, numExp, fruitExp) {
    const str0 = strings[0]; // "We have"
    const str1 = strings[1]; // " of "
    const str2 = strings[2];
    const quantity = numExp < 10 ? 'very few' : 'a lot';
    return str0 + quantity + str1 + fruitExp + str2 ;
}

const fruit = 'apple', num = 8;
const output = tagFunction`We have ${num} of ${fruit}. Exciting!`;
console.log(output);
// Expected output: We have very few of apples. Exciting!!
function getPersionES5(name,age){
    return {
name: name,
age: age
    }
}
function getPersionES6(name,age){
    return {
name,
age
    }
}
console.log(getPersionES5('John',30));
console.log(getPersionES6('Mike',25));
//
const varName='firstName';
const person = {
    [varName] :'John',
    lastName :'Smith'
};
console.log(person.firstName);
//
let names= ['John','Michael'];
let[Name1,Name2] =names;
console.log(Name1);
console.log(Name2);
//
function fn(num1, num2, ...args) {
    console.log(num1);
    console.log(num2);
    console.log(args);
}
fn(1, 2, 3, 4, 5, 6);
function fn2(...[n1,n2,n3]){
console.log(n1,n2,n3);
    }
    fn2(1,2);
    const [n1,n2,n3,...remaining]=[1,2,3,4,5,6];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(remaining);//
const obj = {firtName:'Bob',lastName:'Smith'};
const{firstName,lastName} =obj;
console.log(firstName);
console.log(lastName);

