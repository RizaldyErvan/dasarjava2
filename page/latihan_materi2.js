// function cekJawaban1(){
//     let answer1 =document.getElementById("answer1-1").value;  
//     if(answer1 == "Hello World! Mari belajar C++ Di mana saja") 
//     {
//         document.getElementById("answer1-1").style.border = "2px solid green";
//     } 
//     else  {  
//         document.getElementById("answer1-1").style.border = "2px solid red";
//     }
  
//   }

//   function cekJawaban2(){
//     let answer1 =document.getElementsByName('options');
//     for(i = 0; i < answer1.length; i++) {
//         if(answer1[i].checked)
//         {
//             if(answer1[i].value== "tidak") 
//     { 
//         document.getElementById("hasil").innerHTML
//                 = "Jawaban Benar <i class='fa fa-check fs-5' aria-hidden='true'></i>";
//         document.getElementById("hasil").style.color= "green";
//         const barisBaru = document.getElementById("materibaris");
//             barisBaru.hidden = false;
        
//     } 
//     else {     
//         document.getElementById("hasil").innerHTML
//                 = "Jawaban Salah <i class='fa fa-times fs-5' aria-hidden='true'></i>";
//         document.getElementById("hasil").style.color= "red";
//         const barisBaru = document.getElementById("materibaris");
//             barisBaru.hidden = false;    
//         }
//         }
        
//     }
  
// }

function cekJawaban(){
    let answer1 =document.getElementById("answer1").value;  
    if(answer1 == "hasil") 
    {
        document.getElementById("answer1").style.border = "2px solid green";
    } 
    else  {  
        document.getElementById("answer1").style.border = "2px solid red";
        Swal.fire(
            'Mohon Maaf!',
            'Jawaban Anda Masih ada yang Salah!',
            'error'
          )
    }
  
    let answer2 =document.getElementById("answer2").value;
    if(answer2 == "hasil") 
    { 
        document.getElementById("answer2").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer2").style.border = "2px solid red";
        Swal.fire(
            'Mohon Maaf!',
            'Jawaban Anda Masih ada yang Salah!',
            'error'
          )
    }
  
    let answer3 =document.getElementById("answer3").value;
    if(answer3 == "int") 
    { 
        document.getElementById("answer3").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer3").style.border = "2px solid red";
        Swal.fire(
            'Mohon Maaf!',
            'Jawaban Anda Masih ada yang Salah!',
            'error'
          )
    }
    
    let answer4 =document.getElementById("answer4").value;
    if(answer4 == "double") 
    { 
        document.getElementById("answer4").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer4").style.border = "2px solid red";
        Swal.fire(
            'Mohon Maaf!',
            'Jawaban Anda Masih ada yang Salah!',
            'error'
          )
    }
  
    let answer5 =document.getElementById("answer5").value;
    if(answer5 == "char") 
    { 
        document.getElementById("answer5").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer5").style.border = "2px solid red";
        Swal.fire(
            'Mohon Maaf!',
            'Jawaban Anda Masih ada yang Salah!',
            'error'
          )
    }
    
    let answer6 =document.getElementById("answer6").value;
    if(answer6 == "String") 
    { 
        document.getElementById("answer6").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer6").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }
  
    let answer7 =document.getElementById("answer7").value;
    if(answer7 == "nama") 
    { 
        document.getElementById("answer7").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer7").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }
  
    let answer8 =document.getElementById("answer8").value;
    if(answer8 == "jumlahSepatu = 5") 
    { 
        document.getElementById("answer8").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer8").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }
  
    let answer9 =document.getElementById("answer9").value;
    if(answer9 == "hargaSatuan = 2.5") 
    { 
        document.getElementById("answer9").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer9").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer10 =document.getElementById("answer10").value;
    if(answer10 == "namaLengkap = Fulan") 
    { 
        document.getElementById("answer10").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer10").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer11 =document.getElementById("answer11").value;
    if(answer11 == "hargaSatuan") 
    { 
        document.getElementById("answer11").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer11").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer12 =document.getElementById("answer12").value;
    if(answer12 == "int") 
    { 
        document.getElementById("answer12").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer12").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer13 =document.getElementById("answer13").value;
    if(answer13 == ",") 
    { 
        document.getElementById("answer13").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer13").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer14 =document.getElementById("answer14").value;
    if(answer14 == ",") 
    { 
        document.getElementById("answer14").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer14").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer15 =document.getElementById("answer15").value;
    if(answer15 == "+") 
    { 
        document.getElementById("answer15").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer15").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer16 =document.getElementById("answer16").value;
    if(answer16 == "+") 
    { 
        document.getElementById("answer16").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer16").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer17 =document.getElementById("answer17").value;
    if(answer17 == "String") 
    { 
        document.getElementById("answer17").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer17").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer18 =document.getElementById("answer18").value;
    if(answer18 == "namaMotor") 
    { 
        document.getElementById("answer18").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer18").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer19 =document.getElementById("answer19").value;
    if(answer19 == "Xsr") 
    { 
        document.getElementById("answer19").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer19").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }

    let answer20 =document.getElementById("answer20").value;
    if(answer20 == "namaMotor") 
    { 
        document.getElementById("answer20").style.border = "2px solid green";
    } 
    else {     
        document.getElementById("answer20").style.border = "2px solid red";
        Swal.fire(
          'Mohon Maaf!',
          'Jawaban Anda Masih ada yang Salah!',
          'error'
        )
    }



    const jawaban = document.querySelectorAll(".jawab");
    if (jawaban[0].value == "hasil") {
        if (jawaban[1].value == "hasil") {
            if (jawaban[2].value == "int") {
                if (jawaban[3].value == "double") {
                    if (jawaban[4].value == "char") {
                        if (jawaban[5].value == "String") {
                          if (jawaban[6].value == "nama") {
                              if (jawaban[7].value == "jumlahSepatu = 5") {
                                  if (jawaban[8].value == "hargaSatuan = 2.5") {
                                    if (jawaban[9].value == "namaLengkap = Fulan") {
                                        if (jawaban[10].value == "hargaSatuan") {
                                            if (jawaban[11].value == "int") {
                                                if (jawaban[12].value == ",") {
                                                    if (jawaban[13].value == ",") {
                                                        if (jawaban[14].value == "+") {
                                                            if (jawaban[15].value == "+") {
                                                                if (jawaban[16].value == "String") {
                                                                    if (jawaban[17].value == "namaMotor") {
                                                                        if (jawaban[18].value == "Xsr") {
                                                                            if (jawaban[19].value == "namaMotor") {
                          Swal.fire(
                              'Selamat!',
                              'Jawaban Anda Benar Semua!',
                              'success'
                            )
                          }
                        }
                    }
                }
            }
        }
    }
}
                                            }
                                        }
                                    }
                      
                        }
                      }
                  }
                      
                    }
                      
                    }
                  }
                
              }
     }
    }
  }

  function reset(){
	let answer1 = document.querySelectorAll("answer1");
    let answer2 = document.querySelectorAll("answer2");
    let answer3 = document.querySelectorAll("answer3");
    let answer4 = document.querySelectorAll("answer4");
    let answer5 = document.querySelectorAll("answer5");
    let answer6 = document.querySelectorAll("answer6");
    let answer7 = document.querySelectorAll("answer7");
    let answer8 = document.querySelectorAll("answer8");
    let answer9 = document.querySelectorAll("answer9");
    let answer10 = document.querySelectorAll("answer10");
    let answer11 = document.querySelectorAll("answer11");
    let answer12 = document.querySelectorAll("answer12");
    let answer13 = document.querySelectorAll("answer13");
    let answer14 = document.querySelectorAll("answer14");
    let answer15 = document.querySelectorAll("answer15");
    let answer16 = document.querySelectorAll("answer16");
    let answer17 = document.querySelectorAll("answer17");
    let answer18 = document.querySelectorAll("answer18");
    let answer19 = document.querySelectorAll("answer19");
    let answer20 = document.querySelectorAll("answer20");

	document.getElementById("answer1").value = "";
    document.getElementById("answer1").style.border = "1px solid black";
	document.getElementById("answer2").value = "";
    document.getElementById("answer2").style.border = "1px solid black";
    document.getElementById("answer3").value = "";
    document.getElementById("answer3").style.border = "1px solid black";
    document.getElementById("answer4").value = "";
    document.getElementById("answer4").style.border = "1px solid black";
    document.getElementById("answer5").value = "";
    document.getElementById("answer5").style.border = "1px solid black";
    document.getElementById("answer6").value = "";
    document.getElementById("answer6").style.border = "1px solid black";
    document.getElementById("answer7").value = "";
    document.getElementById("answer7").style.border = "1px solid black";
    document.getElementById("answer8").value = "";
    document.getElementById("answer8").style.border = "1px solid black";
    document.getElementById("answer9").value = "";
    document.getElementById("answer9").style.border = "1px solid black";
    document.getElementById("answer10").value = "";
    document.getElementById("answer10").style.border = "1px solid black";
    document.getElementById("answer11").value = "";
    document.getElementById("answer11").style.border = "1px solid black";
    document.getElementById("answer12").value = "";
    document.getElementById("answer12").style.border = "1px solid black";
    document.getElementById("answer13").value = "";
    document.getElementById("answer13").style.border = "1px solid black";
    document.getElementById("answer14").value = "";
    document.getElementById("answer14").style.border = "1px solid black";
    document.getElementById("answer15").value = "";
    document.getElementById("answer15").style.border = "1px solid black";
    document.getElementById("answer16").value = "";
    document.getElementById("answer16").style.border = "1px solid black";
    document.getElementById("answer17").value = "";
    document.getElementById("answer17").style.border = "1px solid black";
    document.getElementById("answer18").value = "";
    document.getElementById("answer18").style.border = "1px solid black";
    document.getElementById("answer19").value = "";
    document.getElementById("answer19").style.border = "1px solid black";
    document.getElementById("answer20").value = "";
    document.getElementById("answer20").style.border = "1px solid black";
}