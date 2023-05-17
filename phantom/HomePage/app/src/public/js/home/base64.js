"use strict"


let Solve = '';

const random = (length = 8) => 
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //문자열 난수 생성 값 chars
    Solve = '';
  
    for (let i = 0; i < length; i++) 
    {
        Solve += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return Solve;
};

function EncodeSolve(Solve)
{
    const EncodedString = btoa(unescape(encodeURIComponent(Solve)));
    document.getElementById('output').innerHTML = EncodedString;
}

function checkAnswer() 
{
    const input = document.getElementById("Solve2").value;

    if (input === Solve) 
    {
        alert("잘했어")
        flag();
    } 
    else 
    {
        alert("바보")
    }
}

window.onload = function() 
{
    random(); // Solve 값을 생성
    EncodeSolve(Solve); // Solve 값을 인코딩하여 output에 표시
};