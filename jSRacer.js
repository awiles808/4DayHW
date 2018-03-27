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
//player1.style.left = player1style.Left + "px";
}
};

console.log(move());


















