/*let js = 'amazing';
if(js==='amazing') alert('JS is fun');

console.log(70 + 30 - 31);

// comenting code


//naming convention

let firstName = "Jonas";

let person = "miguel";
*/
/*
//Data types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//the variable changes the type
javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);
//change the type of year
year = 1997;
console.log(typeof year);

console.log(typeof null);
*/
/*
//let , const and var

let age = 30;
//Aqui se muta la variabble para esto sirve let
age = 31

// un valor de const no se puede cambiar
const birthYear = 1997;
birthYear = 1990
*/

//operators

/*const now = 2024
const ageSebas = now - 1997;
const agerAly = now - 1996;
console.log(ageSebas, agerAly);

console.log(ageSebas * 2, agerAly / 2);

//Concat strings

const firstName = 'Sebas';
const lastName = 'Gris';
console.log(firstName + ' ' + lastName);

// template string para concaternar Strings la mejor forma para concatenar string

let x = 10 + 5; // 15
x += 10; // x = x+10
x++;// x = x + 1
x--; // x = x - 1
console.log(x);


//operadores de comparacion
// >, <, >=, <=, ==
console.log(ageSebas > agerAly);
console.log(ageSebas < agerAly);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const job = 'coder';
const birthYear = 1991;
const year = 2037

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

const age = 26;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sebastian casi llega a los 30')
}*/

/*const birthYear = 1997;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('jonas'));

const money = 0;
if(money){
    console.log('do not spend it all');
} else {
    console.log('go get a job');
}
*/

const age = 18;
if( age === 18) console.log("segunda division");
// === strict equal operator no hace type coercion  -> mejor usar este
// ==  hace type coercion

const numFavorite = Number(prompt('favorite number'));

