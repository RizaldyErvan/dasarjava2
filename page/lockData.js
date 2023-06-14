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
let nama = localStorage.getItem('nama2');
let nim = localStorage.getItem('nim2');
let kelas = localStorage.getItem('kelas2');
//menghubungkan dg database
const db = getDatabase();


const getData = new Promise((resolve, reject) => {
  onValue(ref (db, `UserMahasiswa/${nim}/materi`), (snapshot) => {
    const data = snapshot.val();
    console.log(data)

    if(data.materi2 == true){
        $('#submateri2').removeClass('bxs-lock-alt');
        $('#submateri2').addClass('bxs-chevron-down')
        $('#submateri2').addClass('arrow');
    }
    if(data.materi3 == true){
      $('#submateri3').removeClass('bxs-lock-alt');
      $('#submateri3').addClass('bxs-chevron-down')
      $('#submateri3').addClass('arrow');
  }
  if(data.materi4 == true){
    $('#submateri4').removeClass('bxs-lock-alt');
    $('#submateri4').addClass('bxs-chevron-down')
    $('#submateri4').addClass('arrow');
  }
  if(data.materi5 == true){
    $('#submateri5').removeClass('bxs-lock-alt');
    $('#submateri5').addClass('bxs-chevron-down')
    $('#submateri5').addClass('arrow');
  }
  if(data.materi6 == true){
    $('#submateri6').removeClass('bxs-lock-alt');
    $('#submateri6').addClass('bxs-chevron-down')
    $('#submateri6').addClass('arrow');
  }
  if(data.evaluasi == true){
    $('#submaterEvaluasi').removeClass('bxs-lock-alt');
    $('#aevaluasi').attr('href', '/page/petunjuk_evaluasi.html');
  }

    resolve()
})
});

getData.then(datauser =>{
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
});