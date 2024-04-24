var notes = JSON.parse(localStorage.getItem("notes"));

notes.forEach((note, index) => {
    addNote(note, index);
});

function addNote(note, index) {
    var title = note.title;
    var description = note.description;

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('col-12');
    noteContainer.classList.add('col-md-4');
    noteContainer.classList.add('position-relative');
    noteContainer.classList.add('note');

    const noteImage = document.createElement('img');
    noteImage.classList.add('img-fluid');
    noteImage.src = './assets/images/placeholder.png';
    noteContainer.append(noteImage);

    const noteTitle = document.createElement('h2');
    noteTitle.classList.add('note-title');
    noteTitle.textContent = title;
    noteContainer.append(noteTitle);

    const noteDeleteBtn = document.createElement('i');
    noteDeleteBtn.classList.add('note-Delete-Btn');
    noteDeleteBtn.classList.add('position-absolute');
    noteDeleteBtn.classList.add('end-0');
    noteDeleteBtn.classList.add('fa-solid');
    noteDeleteBtn.classList.add('fa-x');
    noteDeleteBtn.setAttribute('role', 'button');
    noteContainer.append(noteDeleteBtn);

    const noteDescription = document.createElement('p');
    noteDescription.textContent = description;
    noteContainer.append(noteDescription);
    noteDeleteBtn.addEventListener('click', function () {
        notes.splice(index, 1);

        localStorage.setItem('notes', JSON.stringify(notes));

        noteContainer.remove();
    });

    document.querySelector('.notes').append(noteContainer);
}