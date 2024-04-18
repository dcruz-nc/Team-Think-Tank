let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes")) || [];
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

        localStorage.setItem("notes", JSON.stringify(notes));
    }

    uploadModal.hide();
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);