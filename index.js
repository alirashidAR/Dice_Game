randomNumber1=Math.ceil(Math.random()*6);
randomNumber2=Math.ceil(Math.random()*6);
newDice1="images/dice"+randomNumber1+".png";
newDice2="images/dice"+randomNumber2+".png";


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else
{
    document.querySelector("h1").textContent="Draw !";
}



document.querySelector(".img1").setAttribute("src",newDice1);
document.querySelector(".img2").setAttribute("src",newDice2);
