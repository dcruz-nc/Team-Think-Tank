let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes")) || [];
var imageData;

async function uploadNotes(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();
    const image = document.getElementById('inputFile').files[0];

    var reader = new FileReader();
    reader.onloadend = function () {
        imageData = reader.result;

        if (title && description && imageData) {
            var obj = {
                title: `${title}`,
                description: `${description}`,
                image: `${imageData}`
            };

            notes.push(obj);

            localStorage.setItem("notes", JSON.stringify(notes));
        }

        uploadModal.hide();
    }

    if (image) {
        reader.readAsDataURL(image);
    }
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);
