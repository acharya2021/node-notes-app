// console.log("Starting notes.js");
const fs = require('fs');

var fetchNotes = () => {
    // read the whole file and update the notes array with the existing data if it exists
    try {
        // read the string inside the file
        var notesString = fs.readFileSync('notes-data.json');

        // update the notes array by parsing the existing string into an object
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    //  write the stringified version of the notes array into the auto-generated file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    // create an empty array to store notes
    var notes = fetchNotes();

    // create a note object with the title and body
    var note = {
        title,
        body
    };


    // to prevent the creation of duplicate notes with the same title
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function
    // similar to "for note in notes, if note.title == title, append it to the array"
    var duplicateNotes = notes.filter((note) => note.title === title);

    // if the length of the array is zero, push the new note. Otherwise no need to make that note.
    if (duplicateNotes.length === 0) {
        // push your newly created note into the original notes array
        notes.push(note);
        saveNotes(notes);

        // return the note OBJECT that has been added
        return note;

    }

};

var getAll = () => {
    console.log("Listing all notes");
    var notes = fetchNotes();
    return notes;
};

var readNote = (title) => {
    // console.log("Reading note", title);
    var notes = fetchNotes();

    var specificNote = notes.filter((note) => note.title === title);
    // returns a list containing the required note object
    return specificNote[0];
};

var removeNote = (title) => {
    // console.log("Removing note", title);

    //fetch notes
    var notes = fetchNotes();

    // run a filter
    var undeletedNotes = notes.filter((note) => note.title !== title);

    // save notes
    saveNotes(undeletedNotes);

    // check whether a note was removed
    return notes.length !== undeletedNotes.length;

};

var logNote = (note) => {
    debugger;
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};
