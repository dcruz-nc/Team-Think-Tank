let uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'), {});

var notes = JSON.parse(localStorage.getItem("notes")) || [];

function uploadNotes(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle').value.trim();
    const description = document.querySelector('#inputDescription').value.trim();
    const image = document.getElementById('inputFile').files[0];
    var reader = new FileReader();
    var imageData;
    reader.onloadend = function () {
        imageData = reader.result;
    }

    if (image) {
        reader.readAsDataURL(image);
    }

    /*imgData = getBase64Image(image);*/

    if (title && description && image) {
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


//function getBase64Image(img) {
//    var canvas = document.createElement("canvas");
//    canvas.width = img.width;
//    canvas.height = img.height;

//    var ctx = canvas.getContext("2d");
//    ctx.drawImage(img, 0, 0);

//    var dataURL = canvas.toDataURL("image/png");

//    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//}

document.querySelector('#uploadButton').addEventListener('click', uploadNotes);

