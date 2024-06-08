let urlParams = new URLSearchParams(window.location.search);
let nim = urlParams.get("nim");
let nama = urlParams.get("nama");
let semester = urlParams.get("semester");
let Floor = urlParams.get("lantai");
let room = urlParams.get("room");
room = room.split(',')

class Semester {
    constructor(semester) {
        this.semester = semester;
    }

    convertToYear() {
        const currentYear = new Date().getFullYear();
        const year = currentYear - Math.ceil(this.semester / 2);
        return year;
    }
}

var tahun = new Semester(semester);
tahun = tahun.convertToYear();

var nimRes = document.getElementById('nim');
var namaRes = document.getElementById('nama');
var lantaiRes = document.getElementById('lantai');
var smtRes = document.getElementById('tahun');
var roomList = document.getElementById('room');

nimRes.innerHTML = `Nim: <b>${nim}</b>`;
namaRes.innerHTML = `Nama: <b>${nama}</b>`;
lantaiRes = document.getElementById('lantai');
lantaiRes.innerHTML = `Lantai: <b>${Floor}</b>`;
smtRes.innerHTML = `Tahun Masuk: <b>${tahun}</b>`;

room.forEach(element => {
    var newListItem = document.createElement('li');
    newListItem.textContent = element;
    roomList.appendChild(newListItem);
});