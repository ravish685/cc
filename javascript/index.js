
var randomnumber1;
randomnumber1=Math.floor(Math.random()*6)+1;
var imageno1="images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageno1);


var randomnumber2;
randomnumber2=Math.floor(Math.random()*6)+1;
var imageno2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageno2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 is the winner";
    document.querySelector("h1").style.fontSize="6rem";
}
if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 is the winner";
    document.querySelector("h1").style.fontSize="6rem";
}
if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}