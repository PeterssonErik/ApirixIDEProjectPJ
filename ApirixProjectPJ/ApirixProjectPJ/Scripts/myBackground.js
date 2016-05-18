function black() {
    document.body.style.backgroundColor = "black";
    document.getElementById('DocumentHeader').style.color = "white";
}

function white() {
    document.body.style.backgroundColor = "white";
    document.getElementById('DocumentHeader').style.color = "black";
}

function grayblue() {
    document.body.style.backgroundColor = "rgb(170,170,180)";
    document.getElementById('DocumentHeader').style.color = "black";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}