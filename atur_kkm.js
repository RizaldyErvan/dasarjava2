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

$(document).ready(function(){
    onValue(ref(db, "kkm/"), (snapshot) => {
        const dataKKm = snapshot.val()
        $('.kkm1').html(dataKKm.kuis1.kkm);
        $('.kkm2').html(dataKKm.kuis2.kkm);
        $('.kkm3').html(dataKKm.kuis3.kkm);
        $('.kkm4').html(dataKKm.kuis4.kkm);
        $('.kkm5').html(dataKKm.kuis5.kkm);
        $('.kkm6').html(dataKKm.kuis6.kkm);
        $('.evaluasi').html(dataKKm.evaluasi.kkm)

    
        $('.btnkuis1').click(function(){
            $('#isiKKM1').val(dataKKm.kuis1.kkm)
        });

        $('.btnkuis2').click(function(){
            $('#isiKKM2').val(dataKKm.kuis2.kkm)
        });

        $('.btnkuis3').click(function(){
            $('#isiKKM3').val(dataKKm.kuis3.kkm)
        });

        $('.btnkuis4').click(function(){
            $('#isiKKM4').val(dataKKm.kuis4.kkm)
        });

        $('.btnkuis5').click(function(){
            $('#isiKKM5').val(dataKKm.kuis5.kkm)
        });

        $('.btnkuis6').click(function(){
            $('#isiKKM6').val(dataKKm.kuis6.kkm)
        });

        $('.btnEvaluasi').click(function(){
            $('#isiKKMEvaluasi').val(dataKKm.evaluasi.kkm)
        });

        //set KKM 1
        $('#setbtnKuis1').click(function(){
            if(($('#isiKKM1').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis1'), {
                    kkm: $('#isiKKM1').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM1').modal('hide');
                    })
                })
            }
        });

        //set KKM 2
        $('#setbtnKuis2').click(function(){
            if(($('#isiKKM2').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis2'), {
                    kkm: $('#isiKKM2').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM2').modal('hide');
                    })
                })
            }
        });

        //set KKM 3
        $('#setbtnKuis3').click(function(){
            if(($('#isiKKM3').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis3'), {
                    kkm: $('#isiKKM3').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM3').modal('hide');
                    })
                })
            }
        });

        //set KKM 4
        $('#setbtnKuis4').click(function(){
            if(($('#isiKKM4').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis4'), {
                    kkm: $('#isiKKM4').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM4').modal('hide');
                    })
                })
            }
        });

        //set KKM 5
        $('#setbtnKuis5').click(function(){
            if(($('#isiKKM5').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis5'), {
                    kkm: $('#isiKKM5').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM5').modal('hide');
                    })
                })
            }
        });

        //set KKM 6
        $('#setbtnKuis6').click(function(){
            if(($('#isiKKM6').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/kuis6'), {
                    kkm: $('#isiKKM6').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKM6').modal('hide');
                    })
                })
            }
        });

        //set KKM evaluasi
        $('#setbtnEvaluasi').click(function(){
            if(($('#isiKKMEvaluasi').val()) == ""){
                Swal.fire({
                    icon: 'error',
                    title: 'Nilai KKM masih ada yang kosong',
                    text: 'Mohon Cek Kembali Lagi!',
                })
                  return false;
            }else{
                update(ref(db, 'kkm/evaluasi'), {
                    kkm: $('#isiKKMEvaluasi').val(),
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: "Selamat KKM Berhasil diubah",
                    }).then(()=>{
                        $('#fromeditKKMEvaluasi').modal('hide');
                    })
                })
            }
        });
    })
});