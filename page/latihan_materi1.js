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
  if(answer1 == "System.out.println"||answer1 == "System.out.print") 
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
  if(answer2 == "System.out.println(17)"||answer2 == "System.out.print(17)") 
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
  if(answer3 == "/*") 
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
  if(answer4 == "*/") 
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
  if(answer5 == "System.out.print") 
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
  if(answer6 == "System.out.print") 
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
  if(answer8 == "System.out.println") 
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
  if(answer9 == "System.out.println") 
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
  const jawaban = document.querySelectorAll(".jawab");
  if (jawaban[0].value == "System.out.println"||jawaban[0].value == "System.out.print") {
      if (jawaban[1].value == "System.out.println(17)"||jawaban[1].value == "System.out.print(17)") {
          if (jawaban[2].value == "/*") {
              if (jawaban[3].value == "*/") {
                  if (jawaban[4].value == "System.out.print") {
                      if (jawaban[5].value == "System.out.print") {
                        if (jawaban[6].value == "System.out.println") {
                            if (jawaban[7].value == "System.out.println") {
                                if (jawaban[8].value == "System.out.println") {
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
}