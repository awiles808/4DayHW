document.addEventListener('DOMContentLoaded', function() { });

alert("Are you ready to rumble!");

//Calls for Player1
const player1 = ()=> {
    document.getElementById('player1').press(97);
};
//Calls for Player2

const player2 = ()=> {
    document.getElementById('player1').press(108);
};

document.onkeypress = function(e) {
    e = e || window.event; var charCode = e.charCode || e.keyCode, character = String.fromCharCode(charCode);
        console.log(charCode); };



