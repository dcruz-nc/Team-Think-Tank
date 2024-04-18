var notes = JSON.parse(localStorage.getItem("notes"));

notes.forEach((note) => {
    addNote(note);
});

function addNote(note) {
    var title = note.title;
    var description = note.description;

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('col-12');
    noteContainer.classList.add('col-md-4');
    noteContainer.classList.add('position-relative');

    const noteImage = document.createElement('img');
    noteImage.classList.add('img-fluid');
    noteImage.src = './assets/images/placeholder.png';
    noteContainer.append(noteImage);

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    noteContainer.append(noteTitle);

    const noteDeleteBtn = document.createElement('button');
    noteDeleteBtn.textContent = '[x]';
    noteDeleteBtn.classList.add('note-Delete-Btn');
    noteDeleteBtn.classList.add('position-absolute');
    noteDeleteBtn.classList.add('end-0');
    noteContainer.append(noteDeleteBtn);

    const noteDescription = document.createElement('p');
    noteDescription.textContent = description;
    noteContainer.append(noteDescription);

    document.querySelector('.notes').append(noteContainer);
}