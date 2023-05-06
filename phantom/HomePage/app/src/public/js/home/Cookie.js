"use strict";

/*
res.cookie('Answer', '5');
res.setHeader('Set-Cookie', 'Answer=5')

if (!req.headers.cookie || req.headers.cookie.indexOf('Answer=') === -1) {
    res.setHeader('Set-Cookie', 'Answer=5');
} // Answer쿠키의 초기값은 5

const cookies = req.headers.cookie;
const answer = parseInt(cookies ? cookies.split('=')[1] : 5);
var solvedAnswer = "wrong";

// 쿠키 값이 3 초과일 때 solve 함수 실행
if (answer > 3) {
    solvedAnswer = "correct";
} else if (answer >= 4 || isNaN(answer)) { // Answer 쿠키 값에 범위에서 벗어난 값은 전부 5로 초기화
    res.setHeader('Set-Cookie', 'Answer=5');
    solvedAnswer = "wrong";
}
*/
const cookies = document.cookie.split(';');
let Answer = 1;

for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].trim();
  if (cookie.startsWith('Answer=')) {
    Answer = parseFloat(cookie.substring('Answer='.length), 10);
    break;
  }
}

if (Answer > 3 && Answer < 4) {
  alert('잘했어');
  score(1);
} else if (Answer >= 1 && Answer <= 3) {
  alert('조금 더 노력해봐');
} else {
  alert('바보');
}
const expires = new Date();
expires.setDate(expires.getDate() + 1);
document.cookie = `Answer=${Answer};expires=${expires.toUTCString()}`;