// var obj = {
//     name: 'wendy',
//     age: 21,
//     old: true
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Wendy","age":25}';
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);
// console.log(person.name);

const fs = require('fs');

// write
var originalNote = {
    title: 'some title',
    body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote);
// going to write the variable to notes.json, if not exist
// it will create that file, and save it
fs.writeFileSync('notes.json', originalNoteString);


// read
var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);