// lv2 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
function solution(record) {
  const result = [];
  const nicknameMap = new Map();
  
  const setNickname = (r) => {
      const [command, uid, nickname] = r;
      
      if (nickname) nicknameMap.set(uid, nickname);    
  }
  
  const pushResult = (r) => {
      const [command, uid] = r;
      
      if (command === "Leave") {
          result.push(`${nicknameMap.get(uid)}님이 나갔습니다.`);
          return;
      }
      if (command === "Enter") {
          result.push(`${nicknameMap.get(uid)}님이 들어왔습니다.`);
      }
  }
  
  record.forEach((rec) => {
      setNickname(rec.split(" "));
  })
  
  record.forEach((rec) => {
      pushResult(rec.split(" "));
  })
  
  return result;
}