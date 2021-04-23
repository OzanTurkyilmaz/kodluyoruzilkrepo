let myName = document.querySelector("#myName")
myName = prompt("Adınız Nedir ?")
document.querySelector("#myName").innerHTML = myName

let myClock = document.querySelector("#myClock")
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var day = d.getDay();
    if(day == 1) {
        day = "Pazartesi"
    } else if(day == 2) {
        day = "Salı"
    } else if(day == 3) {
        day = "Çarşamba"
    } else if(day == 4) {
        day = "Perşembe"
    } else if(day == 5) {
        day = "Cuma"
    } else if(day == 6) {
        day = "Cumartesi"
    } else if(day == 7) {
        day = "Pazar" 
    } 

    myClock.textContent = 
  
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)+ '  ' + day
  }
   
  setInterval(time, 1000);