const fs = require('fs');

const util = require('util');

const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync(path.join(__dirname, 'db/db.json'), 'utf8');
    }
    write(note) {
        return writeFileAsync(path.join(__dirname, 'db/db.json'), JSON.stringify(note));
    }
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            error('please complete fields');
        }

        const newNote = { title, text, id: uuidv1() };
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }
    // deleteNotes(title) {
    //     return this.getNotes()
    //         .then(notes => {
    //             console.log('this note says ' + title);
    //             for (var i = 0; i < notes.length; i++) {
    //                 notes.splice(i, 1);
    //                 console.log(notes);
    //                 break;
    //             }
    //         }
    //         this.write(notes);
    //     }
    // };
};

module.exports = new Store();