// Konfigurasi FIRE BASE
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 import { getDatabase, ref, set, push, child, onValue, get, update, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
 import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
 import {tanggalDefault, tampilanWaktu} from "../page/tanggal.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCHi4hJbJCrM-no4yEc8yTMYwm_K65shJM",
   authDomain: "dasarjava-4c937.firebaseapp.com",
   databaseURL: "https://dasarjava-4c937-default-rtdb.firebaseio.com",
   projectId: "dasarjava-4c937",
   storageBucket: "dasarjava-4c937.appspot.com",
   messagingSenderId: "391463504815",
   appId: "1:391463504815:web:b86a0f3e8987018c50bd5a",
   measurementId: "G-YNKGPL8WVZ"
 };

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbref = ref(db, "UserMahasiswa/");
    
const getKelas = new Promise((resolve, reject) => {
  const antri = query(ref(db, "listKelas/"))
  onValue(antri, (snapshot) => {
    const kelasList = snapshot.val();
    console.log(kelasList)
    resolve(kelasList);
  });
});
getKelas.then(kelas =>{
  for (var key in kelas) {
    if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
      var option = $('<option>').val(key).text(kelas[key].kelas);
      $('#kelas').append(option);
    }
  }
}, function(error) {
  console.log('Error:', error);
})

const getDataMahasiswa = new Promise((resolve, reject) => {
            
  const antri = query(ref(db, "UserMahasiswa/"), orderByChild("A1"));
  onValue(antri, (snapshot) => {
    const users = snapshot.val();
    resolve(users);
  });
});

$(document).ready(function(){

    $('#cari').click(function(){
      let fixKelas = "";
      let fixKuis = "";

      if($('#kelas').val() == "" || $('#kuis').val() == ""){
        Swal.fire({
          icon: 'error',
          title: 'Mohon Maaf',
          text: 'Tidak ada kelas/kuis yang dipilih',
        })
      }else{
        getDataMahasiswa.then(users => {
          $('#example1').DataTable().clear().destroy();
          const tampilData = document.querySelector('#dataKuis');
          
          
          for (let user in users) {
            if (users[user].kuis) {
                if(users[user].kelas == ($('#kelas option:selected').text())){
                  const tr = `
                  <tr data-id=${user}>
                    <td class="text-center">${users[user].nim}</td>
                    <td class="text-capitalize text-center">${users[user].nama}</td>
                    <td class="text-center">${users[user].kelas}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].skor}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].waktu}</td>
                    <td class="text-center">${users[user].kuis[($('#kuis option:selected').val())].tanggal}</td>
                  </tr>
                `;
            
                tampilData.innerHTML += tr;
  
                }
            }
          }
  
          $('#example1').DataTable({
            scrollY:     300,
            language: {
              paginate: {
                next: 'Selanjutnya',
                previous: 'Sebelumnya'
              },
              info: 'Menampilkan _END_ data dari _TOTAL_  data', 
              lengthMenu: 'Menampilkan _MENU_ Data',
              search: 'Cari:',
              entri: 'Data',
              showInfo: 'Menampilkan _START_ hingga _END_ dari _TOTAL_ Data',
              zeroRecords: 'Tidak ada data yang ditemukan',
              infoEmpty: 'Tidak ada data yang tersedia',
              show: 'Tampilkan', // Ubah "show" menjadi "Tampilkan",
              
            },
          });
  
        });
        $('.detailKuis').html($("#kuis").find("option:selected").text())
    }
    });
    

    function menampilkan(fixKelas, fixKuis){
      
    }
});