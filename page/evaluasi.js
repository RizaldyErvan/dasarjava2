  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  import { getDatabase, ref, onValue, set, update } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
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

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//menghubungkan dg database
const db = getDatabase();

const auth = getAuth();

const nomorSoal = document.querySelector(".nomor-soal");
const pilihanGanda = document.querySelector(".pilihan-ganda");
const lanjutEvaluasi = document.querySelector(".lanjut-evaluasi");
const kembaliEvaluasi = document.querySelector(".kembali-evaluasi");
const kotakSoalEvaluasi = document.querySelectorAll(".kotak-soal-evaluasi");
const mulaiKuis = document.querySelector('.mulai-kuis');
const btnHome = document.querySelector('.home');


let nama = localStorage.getItem('nama2');
let nim = localStorage.getItem('nim2');
let kelas = localStorage.getItem('kelas2');

getUsername();
hasil();

// Functions

function hasil(){
  console.log(nim)
  onValue(ref(db,  `UserMahasiswa/${nim}/Evaluasi`), (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    if(data[`skor`] == 0){
      mulaiKuis.innerHTML += `
        <div class="card-body">
            <div class="text-center">
                <h2>Evaluasi : Dasar - Dasar Pemrograman Java </h3>
            </div>
            <hr>
            <div class="card">
                <div class="card-header">
                    <b>Petunjuk Pengerjaan</b>
                </div>
                <div class="card-body">
                    <ol>
                    <li>Tekan tombol "<b class="text-green">Mulai</b>" untuk masuk ke laman kuis.</li>
                    <li>Pada bagian kiri laman terdapat navigasi nomor soal yang apabila di klik atau tekan maka akan menampilkan soal berdasarkan nomor soal yang di klik.</li>
                    <li>Pada bagian kanan laman terdapat timer yang akan menunjukkan sisa waktu pengerjaan soal.</li>
                    <li>Jumlah soal sebanyak 20 butir berupa pilihan ganda.</li>                              
                    <li>Waktu pengerjaan adalah 60 menit. Jika waktu pengerjaan habis, maka tampilan akan beralih ke halaman hasil.</li>
                    <li>Klik salah satu pilihan jawaban yang dianggap benar.</li>
                    <li>Klik tombol selesai, jika sudah selesai mengerjakan semua soal.</li>
                    
                    </ol>
                </div> 
            </div>

            <div class="row my-2">
                <div class="col-md-6 align-self-center mt-2">
                    <a href="/page/materi1_sub1.html" class="btn-md btn-block btn_sebelumnya1">Kembali Ke materi</a>
                </div>
                <div class="col-md-6">
                    <a href="/page/evaluasi.html">
                        <button type="button" class="btn-md btn_block px-5 mulai float-end btn_selanjutnya1 btn_cekJawaban"  id="mulaiKuiss">Mulai</button>

                    </a>
                </div>
            </div>
        </div>
      `
      
      const btnMulaiKuis = document.getElementById("mulaiKuiss");
      btnMulaiKuis.addEventListener("click", ()=>{
        update(ref(db, `UserMahasiswa/${nim}/`), {
          "Evaluasi": {
            skor: "",
            tanggal: "",
            waktu: "",
      }
        }).then(() => {
          location.href = "/page/evaluasi.html";
        });
      });

    }else{
      mulaiKuis.innerHTML += `
      <div class="card-body">
                    <h3 class="text-center">Hasil Evaluasi</h3>
                    <hr>
                            
                    <p class="fw-bold">Nama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span class="text-capitalize">${nama}</span></p>
                    <p class="fw-bold">NIM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ${nim}</p>
                    <p class="fw-bold">Kelas &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span class="text-capitalize">${kelas}</span></p>
                    <p class="fw-bold">Tanggal Pengerjaan : ${data[`tanggal`]}<span class="tanggalKet"></span></p>
                            
                    <div class="d-md-flex text-center ">
                        <div class="boxPenting mb-2" style="width: 150px;">
                            Jawaban Benar
                            <h1>${data[`skor`] / 5}</h1>
                            <hr>
                            Jawaban Salah
                            <h1 class="text-danger">${20 - (data[`skor`] / 5)}</h1>
                        </div>
                    
                        <div class="boxPenting align-middle" style="width: 150px;">
                            Nilai
                            <h1>${data[`skor`]}</h1>
                        </div>
                    
                    </div>
                    <hr>
                </div>
                <div class="d-md-flex justify-content-md-center text-decoration-none tombol-hasil-kuis">
                           <a href="/page/materi1_sub1.html" class="btn btn-warning mx-2 mb-4" tabindex="-1" role="button">Ulang Materi <i class="fas fa-undo-alt"></i></a>
                           <button href="/page/petunjuk_evaluasi.html" class="btn btn-danger mx-2 mb-4" id="ulangi-kuis" >Ulang Kuis <i class="fas fa-undo-alt"></i></button>
                         </div>
                        </div>`

      
    }
  });
}
function getUsername(){
//   if(nama == null ){
//     swal ( "Mohon Maaf" ,  "Kamu Harus Login Terlebih dahulu" ,  "error" )
//     .then(()=>{
//       document.location.href  = "../../index.html";
//     })
//   }
//   else{
    
    onValue(ref(db, "Soal/Evaluasi"), (snapshot) => {
        // const pilihanGanda = document.querySelector(".pilihan-ganda");
        const data = snapshot.val();
        // var jsonString = JSON.parse(data);
        // const kkm = snapshot.val().kkm;
        // Menampilkan soal
        const dbjawaban = [];
        for (let i = 1; i <= 20;  i++) {
            const tampilanSoal = i != 1 ? "d-none" : "";
            pilihanGanda.innerHTML += `
            <div class="div-soal ${tampilanSoal} px-2">
            <span> Perhatikan kode berikut.</span>
            
            <div class="lg-lh border border-3 bg-warning text-break mx-2" style="width:60%;">
            ${data[`Evaluasi 1-${i}`]["Teks Soal"]}
              </div>
              <div class="lg-lh text-break mx-2">${data[`Evaluasi 1-${i}`]["Perintah"]}</div>
              <div class = "div-pilgan">
                <label for="${i}a" class="label-${i} d-block" >
                  <input class="d-none radio-pilihan-ganda-${i}" type="radio" id="${i}a" name="no${i}" value="a" />
                  <div class="pilihan-jawaban pilihan-jawaban-${i}">a. ${data[`Evaluasi 1-${i}`].a}</div>
                </label>
                
                <label for="${i}b" class="label-${i} d-block">
                  <input class="d-none radio-pilihan-ganda-${i}" type="radio" id="${i}b" name="no${i}" value="b" />
                  <div class="pilihan-jawaban pilihan-jawaban-${i}">b. ${data[`Evaluasi 1-${i}`].b}</div>
                </label>
                
                <label for="${i}c" class="label-${i} d-block">
                  <input class="d-none radio-pilihan-ganda-${i}" type="radio" id="${i}c" name="no${i}" value="c" />
                  <div class="pilihan-jawaban pilihan-jawaban-${i}">c. ${data[`Evaluasi 1-${i}`].c}</div>
                </label>
                
                <label for="${i}d" class="label-${i} d-block">
                  <input class="d-none radio-pilihan-ganda-${i}" type="radio" id="${i}d" name="no${i}" value="d" />
                  <div class="pilihan-jawaban pilihan-jawaban-${i}">d. ${data[`Evaluasi 1-${i}`].d}</div>
                </label>
                
                <label for="${i}e" class="label-${i} d-block">
                  <input class="d-none radio-pilihan-ganda-${i}" type="radio" id="${i}e" name="no${i}" value="e" />
                  <div class="pilihan-jawaban pilihan-jawaban-${i}">e. ${data[`Evaluasi 1-${i}`].e}</div>
                </label>
              </div>
          </div>
          `;
          dbjawaban[i - 1] = data[`Evaluasi 1-${i}`].kuncijawaban;
        }
        
        let soalKe = 1;
        console.log(soalKe)
        nomorSoal.innerHTML = `${soalKe}`;
        const divSoal = document.querySelectorAll(".div-soal");
    
        // Perulangan kotak soal saat mengklik jawaban
        for (let i = 1; i <= 20; i++) {
          const labelPilihanGanda = pilihanGanda.querySelectorAll(`.label-${i}`);
          for (let j = 0; j < labelPilihanGanda.length; j++) {
            labelPilihanGanda[j].addEventListener("click", function () {
              kotakSoalEvaluasi[i - 1].classList.add("btn-nomor-sudah-dijawab");
            });
          }
        }
  
        // Perulangan perpindahan kotak soal akibat di klik
        for (let i = 0; i < 20; i++) {
          kotakSoalEvaluasi[i].addEventListener("click", function () {
            soalKe = i + 1;
            gantiSoal(i + 1);
            nomorSoal.innerHTML = `${i + 1}`;
          });
        }
          
        const jawabanMahasiswaSemua = [];
        for (let i = 1; i <= 20; i++) {
          
          const labelPilihanGanda = pilihanGanda.querySelectorAll(`.label-${i}`); //50
          let jawabanMahasiswa;
          for (let j = 0; j < labelPilihanGanda.length; j++) {
            labelPilihanGanda[j].addEventListener("click", () => {
              let pilihan = labelPilihanGanda[j].querySelector(`.radio-pilihan-ganda-${i}`).value;
              jawabanMahasiswa = pilihan;
              jawabanMahasiswaSemua[i] = pilihan;
  
              set(ref(db, `UserMahasiswa/${nim}/Evaluasi/nomor/${i}`), {
                jawaban: pilihan, 
              });
            });
          }
        }
    
        lanjutEvaluasi.addEventListener("click", function () {
          if (soalKe == divSoal.length) {
            soalKe = 1;
          } else {
            soalKe++;
          }
          gantiSoal(soalKe);
          nomorSoal.innerHTML = `${soalKe}`;
        });
    
        kembaliEvaluasi.addEventListener("click", function () {
          if (soalKe == 1) {
            soalKe = divSoal.length;
          } else {
            soalKe--;
          }
          gantiSoal(soalKe);
          nomorSoal.innerHTML = `${soalKe}`;
        });
    
          
        // btnHome.addEventListener("click", function(){
        //   swal({
        //     title: "Apakah Kamu sudah yakin ingin meninggalkan kuis",
        //     icon: "warning",
        //     teks: "Jika Kamu keluar maka pekerjaan Kamu tidak tersimpan",
        //     buttons: true,
        //     dangerMode: true,
        //   })
        //   .then((willDelete) => {
        //     if (willDelete) {
        //       location.href = "materi1_kuis.html";
        //       sessionStorage.removeItem("waktu");
        //     }
        //   });
        // });
        //fungsi untuk ganti soal
        function gantiSoal(soalKe) {
          const kotakSoalEvaluasi = document.querySelectorAll(".kotak-soal-evaluasi");
          for (let i = 0; i < divSoal.length; i++) {
            divSoal[i].classList.add("d-none");
            kotakSoalEvaluasi[i].classList.remove("soal-sedang-dibuka");
          }
          divSoal[soalKe - 1].classList.remove("d-none");
          kotakSoalEvaluasi[soalKe - 1].classList.add("soal-sedang-dibuka");
        }

        onValue(ref(db, `UserMahasiswa/${nim}/Evaluasi/nomor/`), (snapshot) => {
          
          // Mengambil data jawaban siswa pada db
          const semuajawabanMahasiswaDB = snapshot;
          const mahasiswajwb = [];
          if (semuajawabanMahasiswaDB.val() != null) {
            semuajawabanMahasiswaDB.forEach((jawabanMahasiswaDB) => {
              const soalBerjawab = jawabanMahasiswaDB.key;
              const jawabannya = jawabanMahasiswaDB.val().jawaban;
  
              mahasiswajwb[soalBerjawab - 1] = jawabannya;
              const radioPilihanGanda = document.querySelectorAll(`.radio-pilihan-ganda-${soalBerjawab}`);
              const pilihanradio = document.querySelectorAll(`.pilihan-jawaban-${soalBerjawab}`);
              // console.log("panjang radio " + radioPilihanGanda.length);
              for (let i = 0; i < radioPilihanGanda.length; i++) {
                if (radioPilihanGanda[i].id == `${soalBerjawab}${jawabannya}`) {
                  
                  pilihanradio[i].classList.add('pilihan-jawaban-dipilih');
                  radioPilihanGanda[i].checked = true;
                  kotakSoalEvaluasi[soalBerjawab - 1].classList.add("btn-nomor-sudah-dijawab");
                }else{
                  pilihanradio[i].classList.remove('pilihan-jawaban-dipilih');
                }
              }
            });
          }

          // kirim jawaban dan skor
          const submit = document.getElementById("submit-evaluasi");
          submit.addEventListener("click", () => {
            const sudahDijawab = document.querySelectorAll('.pilihan-jawaban-dipilih');
            let benar = 0; 
            const dbtanggal = tanggalDefault();
            const dbwaktu = tampilanWaktu();
    
            if (sudahDijawab.length < 20) {
              swal ( "Cek Kembali Jawaban Kamu" ,  "Masih ada soal yang belum terjawab" ,  "error" )
              return;
            } else {
              swal({
                title: "Apakah Kamu sudah yakin dengan jawabannya?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  for(let j = 0; j < dbjawaban.length; j++){
                    if (dbjawaban[j] == mahasiswajwb[j]){
                        benar += 1;
                    }
                  }
  
                  update(ref(db, `UserMahasiswa/${nim}/Evaluasi`), {
                    selesai: true,
                    skor: benar * 5,
                    tanggal: dbtanggal,
                    waktu: dbwaktu

                  });
                  location.href = "/page/petunjuk_evaluasi.html";
                }
              });
            }
          });
        });

       
     });
    
//   }
}
