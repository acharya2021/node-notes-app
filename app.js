// console.log("Starting app");

// create a variable and store the require module in it
//fs is a file system module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log("Command: ", command);
// console.log("Yargs: ", argv);


if (command === 'add') {
    // parse the title and body that was input by the user on the terminal
    note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log("Duplicate title detected");
    } else {
        console.log("Your note was successfully created.");
        notes.logNote(note);
    }
} else if (command === 'list') {
    // console.log("Listing notes");
    var listNotes = notes.getAll();
    listNotes.forEach((note) => notes.logNote(note));

    // console.log(listNotes);
    // console.log(listNotes[0]);
} else if (command === "read") {
    // console.log("Reading note");
    var note = notes.readNote(argv.title);
    if (note) {
        notes.logNote(note);

    } else {
        console.log("Sorry that title was not found");
    }

} else if (command === "remove") {
    // console.log("Removing note");
    var noteRemoved = notes.removeNote(argv.title);
    // use a ternary operator for easy messaging
    var message = noteRemoved ? "Note removed successfully" : "No note was removed";
    console.log(message);

} else {
    console.log("Command invalid");
}

