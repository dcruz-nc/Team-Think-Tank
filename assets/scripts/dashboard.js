let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes")) || [];
var imageData;

async function uploadNotes(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();
    const image = document.getElementById('inputFile').files[0];
    var imageData = await getImageData(image);

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

function getImageData(image) {
    var reader = new FileReader();
    reader.onloadend = function () {
        imageData = reader.result;
    }

    if (image) {
        reader.readAsDataURL(image);
    }

    return imageData;
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);
