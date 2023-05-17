"use strict";

const cookies = document.cookie.split(';');
let Answer = 1;

for (let i = 0; i < cookies.length; i++) 
{
    const cookie = cookies[i].trim();
if (cookie.startsWith('Answer=')) 
{
    Answer = parseFloat(cookie.substring('Answer='.length), 10);
    break;
}
}

if (Answer > 3 && Answer < 4) 
{
    alert('잘했어');
    flag();
} 
else if (Answer >= 1 && Answer <= 3) 
{
    alert('조금 더 노력해봐');
} 
else 
{
    alert('바보');
}
const expires = new Date();
expires.setDate(expires.getDate() + 1);
document.cookie = `Answer=${Answer};expires=${expires.toUTCString()}`;