// waktu Mundur
countdown();
function countdown(){
    const totalTime = 30; //menit
    let waktu = totalTime * 60; //sekon


    if (sessionStorage.getItem("waktu") == null) {
        var waktu2 = sessionStorage.setItem("waktu", waktu);
    } else {
        var waktu2 = sessionStorage.getItem("waktu");
    }

    let timer = setInterval(function(){
        // counter++;
        if(sessionStorage.getItem("waktu") == 0){
            clearInterval(timer);
            sessionStorage.removeItem("waktu");
            swal ( "Mohon Maaf Waktu Habis" ,  "Waktu pengerjaan Kamu telah berakhir" ,  "error" )
            .then(()=>{
              document.location.href  = "javascript: history.go(-1)"; //kembali ke halaman sebelumnya
            })
        }else{
            var waktu3 = sessionStorage.setItem("waktu", (sessionStorage.getItem("waktu")-1));
        }
        const min = Math.floor(sessionStorage.getItem("waktu")/60)
        let sec = sessionStorage.getItem("waktu") % 60;
        let sekon = sec  < 10 ? '0' + sec  : sec ;
        let menit = min < 10 ? '0' + min : min;
        $(".timer-soal").text(menit + ":" + sekon);
        
        if((min == 6) && (sec == 0)){
            swal("Perhatikan waktu tersisa 5 menit", {
                    buttons: false,
                    timer: 1500,
                  });
        }
        // if(min <= 1){
        //     blinkFont()
        // }
    }, 1000);

}
// Time kedap kedip kurang dari 2 menit
// function blinkFont(){
//     $(".timer-soal").css("color", "red");
//     setTimeout("blinkFont()",500)
// };

// function blinkFont(){
//     $(".timer-soal").css("color", "white");
//     setTimeout("blinkFont()",500)
// };