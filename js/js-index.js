var modal = document.getElementById("popup");
var btn = document.getElementById("btn-daftar");
var quit = document.getElementsByClassName("btn-pop-close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

quit.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var bgLoader = document.getElementById('bg-loader');
    var loader = document.getElementById('loader');
    bgLoader.style.display = 'block';
    loader.style.display = 'block';

    setTimeout(function() {
        bgLoader.style.display = 'none';
        loader.style.display = 'none';
    }, 1000);
});

function mulai(){
    window.open('form.html')
}