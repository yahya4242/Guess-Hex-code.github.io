 // to generate random HEX code - 16777215 is the highest HEX
 correctRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
 incorrectRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);

 // show the HEX in the square
 document.getElementById("hexcode").innerHTML = correctRandomHex;

 const first = document.getElementById("first");
 const second = document.getElementById("second");

 // generate random num either 1 or 2
 let correctColor = Math.floor(Math.random() * 2);

 // apply in if statement
 if (correctColor === 1 && correctRandomHex !== incorrectRandomHex) {
     first.style.backgroundColor = correctRandomHex;
     second.style.backgroundColor = incorrectRandomHex;
     first.addEventListener("click", function () {
         location.reload();
     });
     second.addEventListener("click", function () {
         alert("Try again!")
     });

 } else if (correctColor !== 1 && correctRandomHex !== incorrectRandomHex) {
     first.style.backgroundColor = incorrectRandomHex;
     second.style.backgroundColor = correctRandomHex;
     second.addEventListener("click", function () {
         location.reload()
     });
     first.addEventListener("click", function () {
         alert("Try again!")
     });


 } else {
     document.getElementById("hexcode").innerHTML = "#ffffff";
     first.style.backgroundColor = "#ffffff";
     second.style.backgroundColor = "#33ff33";
     first.addEventListener("click", function () {
         location.reload();
     });
     second.addEventListener("click", function () {
         alert("Try again!")
     });
 }