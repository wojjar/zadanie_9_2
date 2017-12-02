
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//concat
var allNames = femaleNames.concat (maleNames);
    console.log(allNames);
//push
allNames.push('John', 'Pam');
    console.log(allNames);
//splice
allNames.splice(4, 0, 'Bob');
    console.log(allNames);
//if element doesn't exist in array
var newName = 'Marian';
if(allNames.indexOf(newName) === -1 ) {
    allNames.push(newName);
    console.log(allNames);
}