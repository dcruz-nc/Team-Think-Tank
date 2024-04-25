let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes")) || [];

function uploadNotes(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();
    const image = document.querySelector('#inputFile');

    if (title && description && image.files && image.files[0]) {
        const url = URL.createObjectURL(image.files[0]);

        var obj = {
            title: `${title}`,
            description: `${description}`,
            image: `${url}`
        };

        notes.push(obj);

        localStorage.setItem("notes", JSON.stringify(notes));
    }

    uploadModal.hide();
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);

//document.querySelector('input[type="file"]').addEventListener('change', function () {
//    if (this.files && this.files[0]) {
//        var img = document.querySelector('img');
//        img.onload = () => {
//            URL.revokeObjectURL(img.src);  // no longer needed, free memory
//        }

//        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//    }
//});
