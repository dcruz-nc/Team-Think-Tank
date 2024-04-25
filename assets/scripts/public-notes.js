let reportModal = new bootstrap.Modal(document.getElementById('reportModal'), {});

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
    noteContainer.append(imageContainer);

    const noteImage = document.createElement('img');
    noteImage.classList.add('img-fluid');
    noteImage.classList.add('mb-3');
    noteImage.src = image;
    imageContainer.append(noteImage);

    const noteTitle = document.createElement('h5');
    noteTitle.classList.add('note-title');
    noteTitle.classList.add('mb-0');
    noteTitle.textContent = title;
    noteContainer.append(noteTitle);

    const noteFlagBtn = document.createElement('i');
    noteFlagBtn.classList.add('note-Flag-Btn');
    noteFlagBtn.classList.add('position-absolute');
    noteFlagBtn.classList.add('end-0');
    noteFlagBtn.classList.add('fa-solid');
    noteFlagBtn.classList.add('fa-flag');
    noteFlagBtn.setAttribute('role', 'button');
    noteContainer.append(noteFlagBtn);

    const noteDescription = document.createElement('p');
    noteDescription.classList.add('mb-0');
    noteDescription.textContent = description;
    noteContainer.append(noteDescription);
    noteFlagBtn.addEventListener('click', function () {
        reportModal.show();
    });

    document.querySelector('.notes').append(noteContainer);
}