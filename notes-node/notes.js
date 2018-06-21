const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };
    // es6 syntax, filtering to find note title match, no return statement needed
    // returns the function RESULT, true or false
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredTitle = notes.filter((note) => note.title === title);
    return filteredTitle[0];
}

var removeNote = (title) => {
    var notes = fetchNotes();
    // creating a new array with titles that are NOT equal to the 
    // arg title!
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    //returning true if a note was removed and false if not
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};