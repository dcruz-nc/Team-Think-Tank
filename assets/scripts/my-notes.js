var notes = JSON.parse(localStorage.getItem("notes"));

notes.forEach((note, index) => {
    addNote(note, index);
});

function addNote(note, index) {
    var title = note.title;
    var description = note.description;
    var image = note.image;

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('col-12');
    noteContainer.classList.add('col-md-4');
    noteContainer.classList.add('position-relative');
    noteContainer.classList.add('note');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('border');
    imageContainer.classList.add('border-dark');
    imageContainer.classList.add('rounded');
    imageContainer.classList.add('p-2');
    imageContainer.classList.add('image-container');
    noteContainer.append(imageContainer);

    const noteImage = document.createElement('img');
    noteImage.classList.add('img-fluid');
    noteImage.classList.add('mb-3');
    noteImage.classList.add('object-fit-cover');
    noteImage.src = image;
    imageContainer.append(noteImage);

    const noteTitle = document.createElement('h5');
    noteTitle.classList.add('noteTitle');
    noteTitle.classList.add('mb-0');
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
    noteDescription.classList.add('mb-0');
    noteDescription.classList.add('noteDescription');
    noteDescription.textContent = description;
    noteContainer.append(noteDescription);

    noteDeleteBtn.addEventListener('click', function () {
        notes.splice(index, 1);

        localStorage.setItem('notes', JSON.stringify(notes));

        noteContainer.remove();
    });

    document.querySelector('.notes').append(noteContainer);
}

function searchNotes() {
    let input = document.getElementById('searchBar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('noteTitle');
    let y = document.getElementsByClassName('noteDescription')
    let note = document.getElementsByClassName('note');
    let footer = document.querySelector('.footer');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            note[i].style.display = "none";
            footer.style.position = "absolute";
            footer.style.bottom = "0";
            footer.style.width = "100%";
        } else if (!y[i].innerHTML.toLowerCase().includes(input)) {
            note[i].style.display = "list-item";
            note[i].style.listStyleType = "none";
            footer.style.position = "absolute";
            footer.style.bottom = "0";
            footer.style.width = "100%";
        } else {
            note[i].style.display = "list-item";
            note[i].style.listStyleType = "none";
            footer.style.position = "relative";
        }
    }
}