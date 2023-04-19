let math = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src","images/dice"+math+".png")


let mathNum = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src","images/dice"+mathNum+".png")

if(math>mathNum){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}else if(mathNum>math){
    document.querySelector("h1").innerHTML = "Player 2 wins"

}else{
    document.querySelector("h1").innerHTML = "Draw"
}