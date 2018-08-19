// var obj = {
//     name: "Abhi"
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Abhi", "age":21}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

// make a Javascript object
var originalNote = {
    title: "Think and Grow Rich",
    body: "A self-help motivational book"
};

// take the object and convert it into a string
originalNoteString = JSON.stringify(originalNote);
// then write that string into a new auto-generated file
fs.writeFileSync('notes.json', originalNoteString);

// now read that string from the file
var noteString = fs.readFileSync('notes.json');
// take that string and convert it into an object
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);




