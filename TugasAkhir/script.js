function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

function playHoverSound() {
  let sound = new Audio('assets/pop.mp3');
  sound.play();
}
// function playBacksound() {
//   var audio = new Audio("assets/backsound.mp3");
//   audio.play();
// }

// window.onload = function() {
//   playBacksound(); // Jalankan backsound setelah laman Home.html dimuat
// };