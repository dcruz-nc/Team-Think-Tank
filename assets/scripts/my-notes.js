let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes") || "[]");
function uploadNotes(event) {
    event.preventDefault();
    console.log("clicked login button");

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();

    if (title && description) {
        var obj = {
            title: `${title}`,
            description: `${description}`
        };

        notes.push(obj);

        const noteContainer = document.createElement('div');
        noteContainer.classList.add('col-12');
        noteContainer.classList.add('col-md-4');

        const noteImage = document.createElement('img');
        noteImage.classList.add('img-fluid');
        noteImage.src = './assets/images/placeholder.png';
        noteContainer.append(noteImage);

        const noteTitle = document.createElement('h2');
        noteTitle.textContent = `${title}`;
        noteContainer.append(noteTitle);

        const noteDescription = document.createElement('p');
        noteDescription.textContent = `${description}`;
        noteContainer.append(noteDescription);

        document.querySelector(".myNotes").append(noteContainer);

        localStorage.setItem("notes", JSON.stringify(notes));
    }

    uploadModal.hide();
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);