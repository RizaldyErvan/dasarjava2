let nim = localStorage.getItem('nim2');
let nama = localStorage.getItem('nama2');
let kelas = localStorage.getItem('kelas2');

let nama2 = document.querySelectorAll('#nama_mahasiswa');
let nim2 = document.querySelectorAll('#nim_mahasiswa');

identitas()
function identitas(){
    if(nim == null){
        Swal.fire({
            icon: 'error',
            title: 'Mohon Maaf',
            text: 'Kamu Harus Login Terlebih dahulu!',
          })
          .then((result)=>{
            document.location.href  = "../../index.html";
          })
    }
    else{
        for(let i=0; i< nama2.length ; i++ ){
            nama2[i].innerText = nama;
            nim2[i].innerText = nim;
        }
        
    }
}