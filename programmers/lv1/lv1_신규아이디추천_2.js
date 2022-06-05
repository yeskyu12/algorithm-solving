// lv1 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  const newId = new_id
  .toLowerCase()                                  // 1단계
  .replace(/[^\w-._]+/g, '')                      // 2단계
  .replace(/\.+/g, '.')                           // 3단계
  .replace(/^\.|\.$/g, '')                        // 4단계
  .padEnd(1, 'a')                                 // 5단계
  .slice(0, 15).replace(/^\.|\.$/g, '')           // 6단계
  
  return newId.padEnd(3, newId[newId.length-1]);  // 7단계
}