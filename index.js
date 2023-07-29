var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomdice="./images/dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src", randomdice);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomdice2="./images/dice" + randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",randomdice2);
var name1=prompt("enter player 1 name");
document.querySelector(".name1").innerHTML=name1;
var name2=prompt("enter player2 name");
document.querySelector(".name2").innerHTML=name2;
if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML="&#128513" + name1 + " wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=name2 + " wins &#128513";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}