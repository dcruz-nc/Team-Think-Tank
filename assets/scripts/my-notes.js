let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});
function uploadNotes(event) {
    event.preventDefault();
    console.log("clicked login button");

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();

    if (title && description) {

    }

    uploadModal.hide();
}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);