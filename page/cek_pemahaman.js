const nomor1 = {
    nomor: 1,
    soal: 'Pembuat dan pengembang pertama bahasa pemrograman Java adalah…',
    pilihan: [
      'A. Duke',
      'B. Joe Palrang',
      'C. Sand Hill',
      'D. Menlo Park',
      'E. James Gosling',
    ],
    jawaban: 5,
    benar:
      'Tepat, James Gosling adalah pembuat dan pengembang pertama bahasa pemrograman Java',
    salah: 'Ayo cari jawaban yang benar!',
  };
  
  const soal = document.querySelector('#soal');
  soal.innerHTML = nomor1.soal;
  
  const judulSoal = document.querySelector('#judulSoal');
  judulSoal.innerHTML = `Pertanyaan ${nomor1.nomor} dari 3`;
  
  const pilihan = document.querySelector('.pilihan');
  // console.log(pilihan);
  var choice = '';
  for (i = 0; i < nomor1.pilihan.length; i++) {
    choice += `
          <span id="${i + 1}" onclick="cek(${
      i + 1
    })" style="cursor:pointer" class="soal alert alert-info">
              ${nomor1.pilihan[i]}
          </span>
      `;
    pilihan.innerHTML = choice;
  }
  
  function cek(val) {
    const evaluasi = document.querySelector('.evaluasi');
    if (nomor1.jawaban == val) {
      const tepat = document.getElementById(val);
      tepat.classList.add('alert-success');
      tepat.classList.remove('alert-info');
      tepat.classList.add('disabled');
    
      for (i = 0; i < nomor1.pilihan.length; i++) {
        const btn = document.querySelectorAll('.soal');
        if (tepat !== btn[i]) {
        btn[i].classList.remove('alert-danger');
        btn[i].classList.add('disabled');
        btn[i].classList.add('alert-info');
        }
      }
      evaluasi.innerHTML = `
          <div class="alert alert-success" role="alert">
              ${nomor1.benar}
          </div>
          `;
    } else {
      const tepat = document.getElementById(val);
      tepat.classList.add('alert-danger');
      
      tepat.classList.remove('alert-info');
      for (i = 0; i < nomor1.pilihan.length; i++) {
        const btn = document.querySelectorAll('.soal');
        // console.log(btn);
        if (tepat !== btn[i]) {
          btn[i].classList.remove('alert-danger');
          btn[i].classList.remove('disabled');
          btn[i].classList.add('alert-info');
        }
      }
      answer = nomor1.pilihan[val - 1];
      leng = answer.length;
      evaluasi.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Kurang tepat, bukan ${answer.substr(3, leng)}. ${answer.substr(
        3,
        leng,
      )} bukan pembuat dan pengembang pertama bahasa pemrograman Java. ${
        nomor1.salah
      }
          </div>
          `;
    }
  }
  
    document.getElementById('soalNext').addEventListener('click', function () {
    document.getElementById('pemahaman').style.display = 'none';
    document.getElementById('pemahaman2').style.display = 'block';
  });
  
  const nomor2 = {
    nomor: 1,
    soal: 'Psembuat dan pengembang pertama bahasa pemrograman Java adalah…',
    pilihan: [
      'A. Duke',
      'B. Joe Palrang',
      'C. Sand Hill',
      'D. Menlo Park',
      'E. James Gosling',
    ],
    jawaban: 5,
    benar:
      'Tepat, James Gosling adalah pembuat dan pengembang pertama bahasa pemrograman Java',
    salah: 'Ayo cari jawaban yang benar!',
  };
  
  const soal2 = document.querySelector('#soal2');
  soal2.innerHTML = nomor2.soal;
  
  const judulSoal2 = document.querySelector('#judulSoal2');
  judulSoal2.innerHTML = `Pertanyaan ${nomor2.nomor} dari 3`;
  
  const pilihan2 = document.querySelector('.pilihan2');
  // console.log(pilihan);
  var choice2 = '';
  for (i = 0; i < nomor2.pilihan.length; i++) {
    choice2 += `
          <span id="soal2${i + 1}" onclick="cek2(${
      i + 1
    })" style="cursor:pointer" class="soal alert alert-info">
              ${nomor2.pilihan[i]}
          </span>
      `;
    pilihan2.innerHTML = choice2;
  }
  
  function cek2(val) {
    console.log(val + " val")
    const evaluasi2 = document.querySelector('.evaluasi2');
    if (nomor2.jawaban == val) {
      const tepat2 = document.getElementById("soal2" + val);
      tepat2.classList.add('alert-success');
      tepat2.classList.remove('alert-info');
      tepat2.classList.add('disabled');
    
      for (i = 0; i < nomor2.pilihan.length; i++) {
        const btn2 = document.querySelectorAll('.soal');
        if (tepat2 !== btn2[i]) {
        btn2[i].classList.remove('alert-danger');
        btn2[i].classList.add('disabled');
        btn2[i].classList.add('alert-info');
        }
      }
      evaluasi2.innerHTML = `
          <div class="alert alert-success" role="alert">
              ${nomor2.benar}
          </div>
          `;
    } else {
      const tepat2 = document.getElementById("soal2" + val);
      tepat2.classList.add('alert-danger');
      
      tepat2.classList.remove('alert-info');
      for (i = 0; i < nomor2.pilihan.length; i++) {
        const btn2 = document.querySelectorAll('.soal');
        // console.log(btn);
        if (tepat2 !== btn2[i]) {
          btn2[i].classList.remove('alert-danger');
          btn2[i].classList.remove('disabled');
          btn2[i].classList.add('alert-info');
        }
      }
      answer = nomor2.pilihan[val - 1];
      leng = answer.length;
      evaluasi2.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Kurang tepat, bukan ${answer.substr(3, leng)}. ${answer.substr(
        3,
        leng,
      )} bukan pembuat dan pengembang pertama bahasa pemrograman Java. ${
        nomor2.salah
      }
          </div>
          `;
    }
  }
  
//     document.getElementById('soalNext').addEventListener('click', function () {
//     document.getElementById('pemahaman').style.display = 'none';
//     document.getElementById('pemahaman2').style.display = 'block';
//   });
//   const nomor2 = {
//     nomor: 2,
//     soal: 'Bahasa Java disebut juga dengan bahasa...',
//     pilihan: ['A. Object-oriented', 'B. General-purpose', 'C. Class-based', 'D. Concurrent', 'E. Benar Semua'],
//     jawaban: 5,
//     benar:
//       'Tepat, Bahasa Java disebut juga dengan bahasa Object-oriented, General Purpose, Class-based, dan Concurrent.',
//     salah: 'Ayo cari jawaban yang benar!',
//   };
  
//   const soal2 = document.querySelector('#soal2');
//   soal2.innerHTML = nomor2.soal;
  
//   const judulSoal2 = document.querySelector('#judulSoal2');
//   judulSoal2.innerHTML = `Pertanyaan ${nomor2.nomor} dari 3`;
  
//   const pilihan2 = document.querySelector('.pilihan2');
//   // console.log(pilihan2);
//   var choice2 = '';
//   for (j = 0; j < nomor2.pilihan.length; j++) {
//     choice2 += `
//           <span id="soal2${j + 1}" onclick="cek2(soal2${
//       j + 1
//     })" style="cursor:pointer" class="soal alert alert-info">
//               ${nomor2.pilihan[j]}
//           </span>
//       `;
//     pilihan2.innerHTML = choice2;
//   }
  
//   function cek2(val) {
//     // console.log(val.getAttribute('id'));
//     const evaluasi2 = document.querySelector('.evaluasi2');
//     const tepat2 = document.getElementById(val.getAttribute('id'));
//     // console.log(val.getAttribute('id').substr(5));
//     if (nomor2.jawaban == val.getAttribute('id').substr(5)) {
//       tepat2.classList.add('alert-success');
//       tepat2.classList.remove('alert-info');
//       tepat2.classList.add('disabled');
//       for (j = 0; j < nomor2.pilihan.length; j++) {
//         const btn2 = document.querySelectorAll('.soal');
//         if (tepat2 !== btn2[j]) {
//         btn2[j].classList.remove('alert-danger');
//         btn2[j].classList.add('disabled');
//         btn2[j].classList.add('alert-info');
//         }
//       }
//       evaluasi2.innerHTML = `
//       <div class="alert alert-success" role="alert">
//       ${nomor2.benar}
//       </div>
//       `;
//     } else {
//       tepat2.classList.add('alert-danger');
//       tepat2.classList.remove('alert-info');
//       for (j = 0; j < nomor2.pilihan.length; j++) {
//         const btn2 = document.querySelector('.soal');
//         // console.log(btn2);
//         if (tepat2 !== btn2[j]) {
//             btn2[j].classList.remove('alert-danger');
//             btn2[j].classList.remove('disabled');
//             btn2[j].classList.add('alert-info');
//           }
//         }
//       }
//       answer = nomor2.pilihan[val.getAttribute('id').substr(5) - 1];
//       leng = answer.length;
//       evaluasi2.innerHTML = `
//           <div class="alert alert-danger" role="alert">
//               Kurang tepat, bukan ${answer.substr(3, leng)}. ${answer.substr(
//         3,
//         leng,
//       )} bukan bahasa Java disebut dengan beberapa bahasa. ${
//         nomor2.salah
//       }
//           </div>
//           `;
//     }
  
  
//   document.getElementById('soalNext2').addEventListener('click', function () {
//     document.getElementById('pemahaman2').style.display = 'none';
//     document.getElementById('pemahaman3').style.display = 'block';
//   });
//   document.getElementById('soalPrev2').addEventListener('click', function () {
//     document.getElementById('pemahaman2').style.display = 'none';
//     document.getElementById('pemahaman').style.display = 'block';
//   });
  
//   const nomor3 = {
//     nomor: 3,
//     soal: 'Perangkat lunak yang digunakan untuk mengakses website adalah...',
//     pilihan: ['A. Web Server', 'B. Website', 'C. Web Browser', 'D. HTML', 'E. Internet'],
//     jawaban: 3,
//     benar: 'Tepat, Web Browser adalah perangkat lunak yang digunakan untuk mengakses website.',
//     salah: 'Ayo cari jawaban yang benar!',
//   };
  
//   const soal3 = document.querySelector('#soal3');
//   soal3.innerHTML = nomor3.soal;
  
//   const judulSoal3 = document.querySelector('#judulSoal3');
//   judulSoal3.innerHTML = `Pertanyaan ${nomor3.nomor} dari 3`;
  
//   const pilihan3 = document.querySelector('.pilihan3');
//   // console.log(pilihan3);
//   var choice3 = '';
//   for (i = 0; i < nomor3.pilihan.length; i++) {
//     choice3 += `
//           <span id="soal3${i + 1}" onclick="cek3(soal3${
//       i + 1
//     })" style="cursor:pointer" class="soal alert alert-info">
//               ${nomor3.pilihan[i]}
//           </span>
//       `;
//     pilihan3.innerHTML = choice3;
//   }
  
//   function cek3(val) {
//     // console.log(val.getAttribute('id'));
//     const evaluasi3 = document.querySelector('.evaluasi3');
//     const tepat3 = document.getElementById(val.getAttribute('id'));
//     // console.log(val.getAttribute('id').substr(5));
//     if (nomor3.jawaban == val.getAttribute('id').substr(5)) {
//       tepat3.classList.add('btn-success');
//       for (i = 0; i < nomor3.pilihan.length; i++) {
//         const btn3 = document.querySelector(`#soal3${i + 1}`);
//         btn3.classList.remove('btn-danger');
//         btn3.classList.add('disabled');
//       }
//       evaluasi3.innerHTML = `
//       <div class="alert alert-success" role="alert">
//       ${nomor3.benar}
//       </div>
//       `;
//     } else {
//       tepat3.classList.add('btn-danger');
//       tepat3.classList.add('disabled');
//       for (i = 0; i < nomor3.pilihan.length; i++) {
//         const btn3 = document.querySelector(`#soal3${i + 1}`);
//         // console.log(btn3);
//         if (tepat3 !== btn3) {
//           btn3.classList.remove('btn-danger');
//           btn3.classList.remove('disabled');
//         }
//       }
//       answer = nomor3.pilihan[val.getAttribute('id').substr(5) - 1];
//       leng = answer.length;
//       evaluasi3.innerHTML = `
//           <div class="alert alert-danger" role="alert">
//               Kurang tepat, bukan ${answer.substr(3, leng)}. ${answer.substr(
//         3,
//         leng,
//       )} bukan perangkat lunak yang digunakan untuk mengakses website. ${nomor3.salah}
//           </div>
//           `;
//     }
//   }
  
//   document.getElementById('soalPrev3').addEventListener('click', function () {
//     document.getElementById('pemahaman3').style.display = 'none';
//     document.getElementById('pemahaman2').style.display = 'block';
//   });