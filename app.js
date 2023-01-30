console.log("MPC2000 Sampler");

// set window prevent default

window.addEventListener("click", function (e) {
  e.preventDefault();
});

const mpcImage = document.querySelector(".mpc-sampler");
console.log(mpcImage);

// const mpcPads = [...document.getElementsByTagName("a")];
// console.log(mpcPads);

const mpcPads = document.querySelectorAll(".pad");

// console.log(mpcPads);
// function getWindowPosition() {
//   const rect = mpcImage.getBoundingClientRect();
//   console.log(rect);
//   const x = rect.x;
//   const y = rect.y;
//   console.log(x, y);
// }

// mpcImage.addEventListener("mousemove", function (e) {
//   let pageX = e.pageX;
//   let pageY = e.pageY;
//   console.log(pageX, pageY);
// });

window.addEventListener("mousemove", function (e) {
  let pageX = e.pageX;
  let pageY = e.pageY;
  // console.log(pageX);
  // console.log(pageY);
});

// sound sample sources

const kickSrc = "KICK1.mp3";
const clap5Src = "CLAP5.mp3";
const hhClose5Src = "HHCLOSE5.mp3";
const hhOpen1Src = "HHOPEN1.mp3";
const honkySrc = "HONKY1.mp3";
const p6Src = "P6.mp3";
const piano1Src = "PIANOL1_1.mp3";
const piano2Src = "PIANOLL2.mp3";
const piano3Src = "PIANOM1.mp3";
const shakerSrc = "SHAKER1.mp3";
const snare1Src = "SNARE1.mp3";
const snare2Src = "SNARE5.mp3";
const snare3Src = "SNAREA11.mp3";
const tablaSrc = "TABLA.mp3";
const timbaleSrc = "TIMBALE1.mp3";
const toyPianoSrc = "TOYPIAN1.mp3";

const kickSample = new Audio(kickSrc);
const clapSample = new Audio(clap5Src);
const hhClose5Sample = new Audio(hhClose5Src);
const hhOpen1Sample = new Audio(hhClose5Src);
const honkySample = new Audio(honkySrc);
const p6Sample = new Audio(p6Src);
const piano1Sample = new Audio(piano1Src);
const piano2Sample = new Audio(piano2Src);
const piano3Sample = new Audio(piano3Src);
const shakerSample = new Audio(shakerSrc);
const snare1Sample = new Audio(snare1Src);
const snare2Sample = new Audio(snare2Src);
const snare3Sample = new Audio(snare3Src);
const tablaSample = new Audio(tablaSrc);
const timbaleSample = new Audio(timbaleSrc);
const toyPianoSample = new Audio(toyPianoSrc);

// add incremented class to each pad and event listener
// audio files

mpcPads.forEach(function (pad, index) {
  pad.classList.add(`${index + 1}`);
  const attr = document.createAttribute("data-id");
  attr.value = `${index + 1}`;
  pad.setAttributeNode(attr);
  pad.addEventListener("click", function () {
    console.log(`pad ${index + 1} pressed!`);
    let pressedPad = index + 1;
    console.log(pressedPad);
    if (pressedPad === 1) {
      kickSample.play();
    }
    if (pressedPad === 2) {
      clapSample.play();
    }
    if (pressedPad === 3) {
      hhClose5Sample.play();
    }
    if (pressedPad === 4) {
      hhOpen1Sample.play();
    }
    if (pressedPad === 5) {
      honkySample.play();
    }
    if (pressedPad === 6) {
      p6Sample.play();
    }
    if (pressedPad === 7) {
      piano1Sample.play();
    }
    if (pressedPad === 8) {
      piano2Sample.play();
    }
    if (pressedPad === 9) {
      piano3Sample.play();
    }
    if (pressedPad === 10) {
      shakerSample.play();
    }
    if (pressedPad === 11) {
      snare1Sample.play();
    }
    if (pressedPad === 12) {
      snare2Sample.play();
    }
    if (pressedPad === 13) {
      snare3Sample.play();
    }
    if (pressedPad === 14) {
      tablaSample.play();
    }
    if (pressedPad === 15) {
      timbaleSample.play();
    }
    if (pressedPad === 16) {
      toyPianoSample.play();
    }
  });
});
