 alert("Are you ready to rumble!");

const player1 = document.getElementById('player1');
let margValue = 0;

document.addEventListener('keydown',(event) => {
 //console.log(e.keycode)
console.log("Button is pushed")
});



function move(e) {

  if(e.keyCode == 39){
        margValue += 30;
        player1.style.left = margValue + ("px");
        if(margValue >= 800){
            alert("winner winner chicken dinner");
        }
}
   if(e.keyCode == 65){
        margValue += 30;
        player2.style.left = margValue + ("px");
        if(margValue >= 800){
            alert("winner winner chicken dinner");
}
}
};


document.onkeydown = move;








//  if(e.keyCode == 65){
//
//        margValue += 30;
//        player2.style.left = margValue + "px";
//        if(player2 >= 800){
//            alert("winner")
//}
//}














