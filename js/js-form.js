// menampilkan dropdown pilihan lantai
function pilihan() {
    var choose = document.getElementById("lantai").value;
    var getL2 = document.getElementById("TAG2");
    var getL3 = document.getElementById("TAG3");
    var getL4 = document.getElementById("TAG4");

    // Setiap kali lantai dipilih, atur semua fieldset menjadi display: none
    getL2.style.display = 'none';
    getL3.style.display = 'none';
    getL4.style.display = 'none';

    if (choose === 'lt2') {
        getL2.style.display = 'block';
        getL3.style.display = 'none';
        getL4.style.display = 'none';
    }
    else if (choose === 'lt3') {
        getL2.style.display = 'none';
        getL3.style.display = 'block';
        getL4.style.display = 'none';
    }
    else if (choose === 'lt4') {
        getL2.style.display = 'none';
        getL3.style.display = 'none';
        getL4.style.display = 'block';
    }
}


function hasil(){
    var nim = document.getElementById("nim");
    var nama = document.getElementById("nama");
    var smt = document.getElementById("semester");
    var lantai = document.getElementById("lantai");

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedValues = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
        checkedValues.push(checkbox.value);
        }
    }); 

    var validasiAngka = /^[0-9]+$/;
    var validasiHuruf = /^[a-zA-Z ]+$/;
    
    if (checkedValues.length > 0) {
        if(nim.value != "" && nama.value != "" && smt.value != "" && lantai.value != "" && checkedValues.length>0){
            if(nim.value.match(validasiAngka)){
                if(nama.value.match(validasiHuruf)){
                    if(smt.value.match(validasiAngka)){
                        if(parseInt(smt.value) < 3) {
                            alert('Mahasiswa belum dapat mengajukan laboratorium!\nHarus semester 2 ke atas!')
                        } else {
                            window.open(`result.html?nim=${nim.value}&nama=${nama.value}&semester=${smt.value}&lantai=${lantai.value}&room=${checkedValues}`, '_blank')
                        }
                    }else{
                        alert("Isian Semester Anda Salah!\nFormat wajib angka!");
                        smt.value="";
                        smt.focus();
                        return false;
                    }
                    
                }else{
                    alert("Isian Nama Anda Salah!\nFormat wajib huruf!");
                    nama.value="";
                    nama.focus();
                    return false;
                }
            }else{
                alert("Isian NIM Anda Salah!\nFormat wajib angka!");
                nim.value="";
                nim.focus();
                return false;
            }
            
        }else{
            alert("Isian Kosong! Silahkan isi data terlebih dahulu!");
            nim.value="";
            nama.value="";
            smt.value="";
            lantai.value="";
            chosen.value="";
            nim.focus();
            return false;
        }
    }
}