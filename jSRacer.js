 alert("Are you ready to rumble!");

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
let margValue = 0;

document.addEventListener('keydown',(event) => {
 //console.log(e.keycode)
console.log("Button is pushed")
});



function move(e) {

  if(e.keyCode == 39){
        margValue += 70;
        player1.style.left = margValue + ("px");
        if(margValue >= 1000){
            alert("Player 1 Is The Winner Winner Chicken Dinner!!");
        }
}
   if(e.keyCode == 65){
        margValue += 70;
        player2.style.left = margValue + ("px");
        if(margValue >= 1000){
            alert("Player 2 Is The Winner Winner Chicken Dinner!!");
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














