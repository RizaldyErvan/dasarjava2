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
    if(answer1 == "System.out.println") 
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
    if(answer2 == "Nama saya adalah + nama") 
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
    if(answer3 == "++x") 
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
    if(answer4 == "System.out.println") 
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
    if(answer5 == "Nilai dari variabel x sekarang adalah + x") 
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
    if(answer6 == "!=") 
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
    if(answer7 == "System.out.println") 
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
    if(answer8 == "5 tidak sama dengan 15") 
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
    if(answer9 == "||") 
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
    if(answer10 == "System.out.println") 
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
    if(answer11 == "Setidaknya satu dari pernyataan itu benar") 
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
    if(answer12 == "+=") 
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
    if(answer13 == "System.out.println") 
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
    if(answer14 == "Kata: + kata") 
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



   



    const jawaban = document.querySelectorAll(".jawab");
    if (jawaban[0].value == "System.out.println") {
        if (jawaban[1].value == "Nama saya adalah + nama") {
            if (jawaban[2].value == "++x") {
                if (jawaban[3].value == "System.out.println") {
                    if (jawaban[4].value == "Nilai dari variabel x sekarang adalah + x") {
                        if (jawaban[5].value == "!=") {
                          if (jawaban[6].value == "System.out.println") {
                              if (jawaban[7].value == "5 tidak sama dengan 15") {
                                  if (jawaban[8].value == "||") {
                                    if (jawaban[9].value == "System.out.println") {
                                        if (jawaban[10].value == "Setidaknya satu dari pernyataan itu benar") {
                                            if (jawaban[11].value == "+=") {
                                                if (jawaban[12].value == "System.out.println") {
                                                    if (jawaban[13].value == "Kata: + kata") {
                                                        
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
                      