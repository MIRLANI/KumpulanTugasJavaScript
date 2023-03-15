function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) && isNaN(a2)){
        alert("Mohon masukan angka dikolom angka 1 dan angka 2");
        return;
    }
   else if (isNaN(a1)) {
       alert("Mohon masukan angka dikolom angka 1");
        return;
    }else if (isNaN(a2)) {
        alert("Mohon masukan angka dikolom angka 2");
    }else{
        var total = a1 + a2;
        frm.hasil.value = total;
    }
  
}

function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) && isNaN(a2)){
        alert("Mohon masukan angka dikolom angka 1 dan angka 2");
        return;
    }
   else if (isNaN(a1)) {
       alert("Mohon masukan angka dikolom angka 1");
        return;
     }else if (isNaN(a2)) {
         alert("Mohon masukan angka dikolom angka 2");
     }else{
         var total = a1 - a2;
         frm.hasil.value = total;
     }
}
function perkalian(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) && isNaN(a2)){
        alert("Mohon masukan angka dikolom angka 1 dan angka 2");
        return;
    }
   else if (isNaN(a1)) {
       alert("Mohon masukan angka dikolom angka 1");
        return;
     }else if (isNaN(a2)) {
         alert("Mohon masukan angka dikolom angka 2");
     }else{
         var total = a1 * a2;
         frm.hasil.value = total;
     }
}

function pangkatan(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) && isNaN(a2)){
        alert("Mohon masukan angka dikolom angka 1 dan angka 2");
        return;
    }
   else if (isNaN(a1)) {
       alert("Mohon masukan angka dikolom angka 1");
        return;
     }else if (isNaN(a2)) {
         alert("Mohon masukan angka dikolom angka 2");
     }else{
         var total = a1 ** a2;
         frm.hasil.value = total;
     }
}