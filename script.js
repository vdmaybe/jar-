// Save this as script.js
function toggleMessage(noteIndex) {
    var notes = document.querySelectorAll('.note');

    notes[noteIndex].classList.toggle('active');

    notes.forEach(function (note, index) {
        if (index !== noteIndex && note.classList.contains('active')) {
            note.classList.remove('active');
        }
    });
}

