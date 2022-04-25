// lv1 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  return Number(
      s.replace(/zero/gi, '0')
          .replace(/one/gi, '1')
          .replace(/two/gi, '2')
          .replace(/three/gi, '3')
          .replace(/four/gi, '4')
          .replace(/five/gi, '5')
          .replace(/six/gi, '6')
          .replace(/seven/gi, '7')
          .replace(/eight/gi, '8')
          .replace(/nine/gi, '9')
  );
}