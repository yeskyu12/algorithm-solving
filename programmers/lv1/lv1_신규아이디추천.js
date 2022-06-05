// lv1 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  let newId = new_id
  // 1단계
  .toLowerCase()
  // 2단계
  .replace(/[^\w-._]+/g, '')
  // 3단계
  .replace(/\.+/g, '.');
  
  // 4단계
  if (newId.startsWith('.')) newId = newId.slice(1);
  if (newId.endsWith('.')) newId = newId.slice(0, newId.length - 1);
  // 5단계
  if (newId === '') newId = 'a';
  // 6단계
  if (newId.length > 15) newId = newId.slice(0, 15);
  if (newId.endsWith('.')) newId = newId.slice(0, newId.length - 1);
  // 7단계
  while(newId.length < 3) {
      newId += newId[newId.length - 1];
  }
  
  return newId;
}
