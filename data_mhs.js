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

// Referensi
const kelas = document.getElementById('kelasInp');

//mengambil data kelas di db
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
              $('#kelasInp').append(option);
          }
      }
  }, function(error) {
      console.log('Error:', error);
})
    

const getDataSiswa = new Promise((resolve, reject) => {
  const antri = query(ref(db, "UserMahasiswa/"))
  onValue(antri, (snapshot) => {
    const users = snapshot.val();
    resolve(users);
  });
});

getDataSiswa.then(users => {
  const tampilData = document.querySelector('#dataSiswa');
  for (let user in users) {

    const tr = `
      <tr data-id=${user}>
        <td class="text-center">${users[user].nim}</td>
        <td class="text-capitalize text-center">${users[user].nama}</td>
        <td class="text-center">${users[user].kelas}</td>
        <td class="d-md-flex justify-content-center">
          <button class="edit btn btn-primary mx-1 mt-1" data-bs-toggle="modal" data-bs-target="#editData">Ubah</button>
          <button class="delete btn btn-danger mx-1 mt-1">Hapus</button>
        </td>
      </tr>
    `;

    tampilData.innerHTML += tr;
  }
  $('#example').DataTable({
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
      show: 'Tampilkan', // Ubah "show" menjadi "Tampilkan"
    },

    
  });

  // Fungsi
  onValue(dbref, (snapshot) => {
    const users = snapshot.val();
    // Delete
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", () => {
        Swal.fire({
          title: 'Apakah Kamu yakin ingin menghapus Akun?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Iya, Hapus data!'
        }).then((result) => {
          if (result.isConfirmed) {
            let userId = deleteBtn.parentElement.parentElement.dataset.id;
            const db = getDatabase();
            remove(ref(db, "UserMahasiswa/" + userId));
            Swal.fire({
              icon: 'success',
              title: 'Data Berhasil Terhapus',
              showConfirButton: false,
              Timer: 1500,
            }).then(function () {
              window.location.reload();
            });
          }
        })
       
      });
    });

    // Edit
    let editButtons = document.querySelectorAll('.edit');
    let keluarButtons = document.querySelector('.keluar');
    let updateform = document.querySelector('.update form');
    editButtons.forEach((edit) => {
      edit.addEventListener('click', () => {
        document.querySelector('.update').classList.add('active');
        let userId = edit.parentElement.parentElement.dataset.id;
        const dbRef = ref(db);
        get(child(dbRef, `UserMahasiswa/` + userId)).then((snapshot) => {
          updateform.namaEdit.value = snapshot.val().nama;
          updateform.nimEdit.value = snapshot.val().nim;
          updateform.kelasEdit.value = snapshot.val().kelas;
          updateform.passEdit.value = snapshot.val().password;
        });
        updateform.addEventListener('submit', (e) => {
          e.preventDefault();
          update(ref(db, `UserMahasiswa/` + userId), {
            nama: updateform.namaEdit.value,
            nim: updateform.nimEdit.value,
            kelas: updateform.kelasEdit.value,
            password: enchPass1(),
          }).then(
            () => {
              Swal.fire({
                icon: 'success',
                title: 'Data diperbarui',
              }).then(() => {
                document.querySelector('.update').classList.remove('active');
                get(child(dbRef, `UserMahasiswa/` + userId)).then((snapshot) => {
                  updateform.namaEdit.value = snapshot.val().nama;
                  updateform.nimEdit.value = snapshot.val().nim;
                  updateform.kelasEdit.value = snapshot.val().kelas;
                  updateformEdit.value = snapshot.val();
                  updateform.passEdit.value = snapshot.val().password;
                });
                
              });
            },
            (onRejected) => {
              Swal.fire({
                icon: 'error',
                title: 'Gagal',
              });
            }
          );
        });
      });
  
      keluarButtons.addEventListener('click', () => {
        window.location.reload();
      });
    });
  });

  // Tambah user
  var tbody = document.querySelector('#tbody');
  var tambahSiswa = document.querySelector('#tambahData'),
            popup = document.querySelector('.popup'),
          addform = document.querySelector('.add form'),
        updateform = document.querySelector('.update form');

  function writeUserData(nama, nim, kelas,) {
    const dbRef = ref(db);
    // Mencek data di db
    get(child(dbRef, "UserMahasiswa/" + nim)).then((snapshot)=>{
      if(snapshot.exists()){
        Swal.fire({
          icon: 'warning',
          title: 'nim Sudah Terdaftar Sebelumnya',
        })
      }else{
          // set Mengirim value baru ke firebase
          set(ref(db, 'UserMahasiswa/' + nim), {
            nama: nama,
            nim: nim,
            kelas: kelas,
            password: enchPass(),
            kuis: {
                "kuis-1": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "kuis-2": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "kuis-3": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                    
                ,
                "kuis-4": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                    
                ,
                "kuis-5": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                    
                ,
                "kuis-6": 
                    {
                        skor: "",
                        tanggal: "",
                        waktu: ""
                    }
                    
                ,
            },
            latihan: {
                "latihan-1": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "latihan-2": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "latihan-3": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "latihan-4": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "latihan-5": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
                "latihan-6": 
                    {
                        totalPoin: "",
                        tanggal: "",
                        waktu: ""
                    }
                ,
            },
            evaluasi:
                {
                    skor: "",
                    tanggal: "",
                    waktu: ""
                }
            ,
          })
            .then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Data siswa telah berhasil ditambahkan',
              }).then(function () {
                window.location.reload();
              });
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Gagal!',
              });
            });
      }
    });
  }

  $("#tambahSiswaClick").click(function(){
    getKelas.then(kelas =>{
          // Hapus opsi-opsi sebelumnya dari elemen select
          // $('#kelas').empty();
          // Tambahkan opsi-opsi baru dari data Firebase
          // console.log(kelas)
          $('#kelasTambah').empty();
          for (var key in kelas) {
            if (kelas.hasOwnProperty(key)) { //untuk memeriksa apakah objek memiliki properti dengan nama tertentu
              var option = $('<option>').val(kelas[key].kelas).text(kelas[key].kelas);
              $('#kelasTambah').append(option);
            }
          }
        }, function(error) {
          console.log('Error:', error);
      })
  });

  tambahSiswa.addEventListener('click', () => {

    document.querySelector('.add').classList.add('active');
    addform.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!Validation()){
          return;
      }
      writeUserData(
        addform.namaTambah.value, 
        addform.nimTambah.value, 
        addform.kelasTambah.value,
        ); 
    });
  });


   // Mencek input kosong 
  function isEmptyOrSpace(str){
    return str == null || str.match(/^ *$/) !== null;
  }

  function Validation(){
    let nameregex = /^[a-zA-Z\s]+$/;

    if(isEmptyOrSpace(addform.namaTambah.value)||isEmptyOrSpace(addform.nimTambah.value)||isEmptyOrSpace(addform.passTambah.value)||isEmptyOrSpace(addform.kelasTambah.value)){
      Swal.fire({
        icon: 'error',
        title: 'Data masih ada yang kosong',
        text: 'Mohon Cek Kembali Lagi!',
      })
        return false;
    }
    if(!nameregex.test(addform.namaTambah.value)){
      Swal.fire({
        icon: 'warning',
        title: 'Nama hanya bisa memuat huruf saja',
        text: 'Mohon Cek Kembali Lagi!',
      })
      return false;
    }
    return true;
  }

   // mengubah pw ke Encription password
  function enchPass(){
    var pass12 = CryptoJS.AES.encrypt(addform.passTambah.value, addform.passTambah.value);
    return pass12.toString()
  }

  function enchPass1(){
    var pass122 = CryptoJS.AES.encrypt(updateform.passEdit.value, updateform.passEdit.value);
    return pass122.toString();
  }
  // mengubah dari enckripsi password ke teks
})


$(document).ready(function(){


  $('#cari').click(function(){

    let fixKelas = "";
    let fixLatihan = "";

    if($('#kelas').val() == ""){
      Swal.fire({
        icon: 'error',
        title: 'Mohon Maaf',
        text: 'Tidak ada kelas yang dipilih',
      })
    }else{
      if(($('#kelas').val() == "A1")){
         fixKelas = "A1"
      }

      if(($('#kelas').val() == "A2")){
         fixKelas = "A2"
      }
      
      menampilkan(fixKelas);
    }
  });

  function menampilkan(fixKelas){
    getDataSiswa.then(users => {
      $('#example').DataTable().clear().destroy();
      const tampilData = document.querySelector('#dataSiswa');
      for (let user in users) {
      if(users[user].kelas == fixKelas){
        const tr = `
          <tr data-id=${user}>
            <td class="text-center">${users[user].nim}</td>
            <td class="text-capitalize text-center">${users[user].nama}</td>
            <td class="text-center">${users[user].kelas}</td>
            <td class="d-md-flex justify-content-center">
              <button class="edit btn btn-primary mx-1 mt-1" data-bs-toggle="modal" data-bs-target="#editData">Ubah</button>
              <button class="delete btn btn-danger mx-1 mt-1">Hapus</button>
            </td>
          </tr>
        `;

        tampilData.innerHTML += tr;
      }
      }
      $('#example').DataTable({
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
          show: 'Tampilkan', // Ubah "show" menjadi "Tampilkan"
        },

        
      });

       // Fungsi
      onValue(dbref, (snapshot) => {
        const users = snapshot.val();
        // Delete
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((deleteBtn) => {
          deleteBtn.addEventListener("click", () => {
            Swal.fire({
              title: 'Apakah Kamu yakin ingin menghapus Akun?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Iya, Hapus data!'
            }).then((result) => {
              if (result.isConfirmed) {
                let userId = deleteBtn.parentElement.parentElement.dataset.id;
                const db = getDatabase();
                remove(ref(db, "UserMahasiswa/" + userId));
                Swal.fire({
                  icon: 'success',
                  title: 'Data Berhasil Terhapus',
                  showConfirButton: false,
                  Timer: 1500,
                }).then(function () {
                  window.location.reload();
                });
              }
            })
          
          });
        });

        // Edit
        let editButtons = document.querySelectorAll('.edit');
        let keluarButtons = document.querySelector('.keluar');
        let updateform = document.querySelector('.update form');
        editButtons.forEach((edit) => {
          edit.addEventListener('click', () => {
            document.querySelector('.update').classList.add('active');
            let userId = edit.parentElement.parentElement.dataset.id;
            const dbRef = ref(db);
            get(child(dbRef, `UserMahasiswa/` + userId)).then((snapshot) => {
              updateform.namaEdit.value = snapshot.val().nama;
              updateform.nimEdit.value = snapshot.val().nim;
              updateform.kelasEdit.value = snapshot.val().kelas;
              updateformEdit.value = snapshot.val();
              updateform.passEdit.value = snapshot.val().password;
            });
            updateform.addEventListener('submit', (e) => {
              e.preventDefault();
              update(ref(db, `UserMahasiswa/` + userId), {
                nama: updateform.namaEdit.value,
                nim: updateform.nimEdit.value,
                kelas: updateform.kelasEdit.value,
                password: enchPass1(),
              }).then(
                () => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Data diperbarui',
                  }).then(() => {
                    document.querySelector('.update').classList.remove('active');
                    get(child(dbRef, `UserMahasiswa/` + userId)).then((snapshot) => {
                      updateform.namaEdit.value = snapshot.val().nama;
                      updateform.nimEdit.value = snapshot.val().nim;
                      updateform.kelasEdit.value = snapshot.val().kelas;
                      updateformEdit.value = snapshot.val();
                      updateform.passEdit.value = snapshot.val().password;
                    });
                    
                  });
                },
                (onRejected) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Gagal',
                  });
                }
              );
            });
          });
      
          keluarButtons.addEventListener('click', () => {
            window.location.reload();
          });
        });
      });

      // Tambah user
      var tbody = document.querySelector('#tbody');
      var tambahSiswa = document.querySelector('#tambahData'),
                popup = document.querySelector('.popup'),
              addform = document.querySelector('.add form'),
            updateform = document.querySelector('.update form');

      function writeUserData(nama, nim, kelas,) {
        const dbRef = ref(db);
        // Mencek data di db
        get(child(dbRef, "UserMahasiswa/" + nim)).then((snapshot)=>{
          if(snapshot.exists()){
            Swal.fire({
              icon: 'warning',
              title: 'NIM Sudah Terdaftar Sebelumnya',
            })
          }else{
              // set Mengirim value baru ke firebase
              set(ref(db, 'UserMahasiswa/' + nim), {
                nama: nama,
                nim: nim,
                kelas: kelas,
                password: enchPass(),
                kuis: {
                    "kuis-1": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },

                    "kuis-2": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },

                    "kuis-3": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },

                    "kuis-4": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },

                    "kuis-5": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },

                    "kuis-6": {

                        skor: "",
                        tanggal: "",
                        waktu: "",
                    },
                    
                },
                
                Evaluasi: {

                    skor: "",
                    tanggal: "",
                    waktu: "",
                },
              })
                .then(() => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Data siswa telah berhasil ditambahkan',
                  }).then(function () {
                    window.location.reload();
                  });
                })
                .catch((error) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                  });
                });
          }
        });
      }

      tambahSiswa.addEventListener('click', () => {

        document.querySelector('.add').classList.add('active');
        addform.addEventListener('submit', (e) => {
          e.preventDefault();
          if(!Validation()){
              return;
          }
          writeUserData(
            addform.namaTambah.value, 
            addform.nimTambah.value, 
            addform.kelasTambah.value,
            ); 
        });
      });


      // Mencek input kosong 
      function isEmptyOrSpace(str){
        return str == null || str.match(/^ *$/) !== null;
      }

      function Validation(){
        let nameregex = /^[a-zA-Z\s]+$/;

        if(isEmptyOrSpace(addform.namaTambah.value)||isEmptyOrSpace(addform.nimTambah.value)||isEmptyOrSpace(addform.passTambah.value)||isEmptyOrSpace(addform.kelasTambah.value)){
          Swal.fire({
            icon: 'error',
            title: 'Data masih ada yang kosong',
            text: 'Mohon Cek Kembali Lagi!',
          })
            return false;
        }
        if(!nameregex.test(addform.namaTambah.value)){
          Swal.fire({
            icon: 'warning',
            title: 'Nama hanya bisa memuat huruf saja',
            text: 'Mohon Cek Kembali Lagi!',
          })
          return false;
        }
        return true;
      }

      // mengubah pw ke Encription password
      function enchPass(){
        var pass12 = CryptoJS.AES.encrypt(addform.passTambah.value, addform.passTambah.value);
        return pass12.toString()
      }

      function enchPass1(){
        var pass122 = CryptoJS.AES.encrypt(updateform.passEdit.value, updateform.passEdit.value);
        return pass122.toString();
      }
    });
  };
  
});

// Logout
function LogOut(){
  Swal.fire({
    title: 'Apakah Anda yakin ingin keluar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Iya, Keluar Akun!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Keluar',
        showConfirButton: false,
        Timer: 1500,
      }).then(function () {
        location.href = "../../index.html";
      localStorage.removeItem('nip');
      localStorage.removeItem('token');
      });
    }
  });
 
}