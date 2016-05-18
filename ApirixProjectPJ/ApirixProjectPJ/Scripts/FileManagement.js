$(document).ready(function () {
    $('#test').fileTree({ root: '/some/folder/' }, function (file) {
        alert(file);
    });
});