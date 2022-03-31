let count = 1;
// let time=5;
// let set=setInterval(vaxt,1000);
// function vaxt(){
//     time--;
// document.getElementById('show').innerHTML=time;
//            if(time==0){
//                clearInterval(set );}
// }

let cimbom = document.getElementById("cimbom");

let color1 = "yellow";
let color2 = "red";

function change() {
  if (count % 2 == 0) {
    cimbom.style.backgroundColor = color1;
    count++;
  } else {
    cimbom.style.backgroundColor = color2;
    count++;
  }
}


setInterval(change, 5000);
change();
