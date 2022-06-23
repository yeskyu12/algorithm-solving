// lv3 불량 사용자
// https://programmers.co.kr/learn/courses/30/lessons/64064?language=javascript
function solution(user_id, banned_id) {
  const banList = [];
  const banSet = new Set();
  
  const matchIds = (userId, bannedId, length) => {
      for (let i = 0; i < length; i++) {
          if (bannedId[i] !== '*' && userId[i] !== bannedId[i]) return false;
      }
      return true;
  }
  
  const findBannedId = (bannedId) => {
      user_id.forEach((userId) => {
          const { length } = bannedId;
          if (userId.length === length && matchIds(userId, bannedId, length)) {
              banList[banList.length - 1].push(userId);
          }
      })
  }
  
  const combinationIds = (index, arr) => {
      if (index === banList.length) {
          banSet.add(arr.sort().join(""));
          return;
      }
      
      const ids = banList[index];
      const { length } = ids;
      
      for (let i = 0; i < length; i++) {
          if (!arr.includes(ids[i])) combinationIds(index + 1, [...arr, ids[i]]);
      }
  }
  
  banned_id.forEach((bannedId) => {
      banList.push([]);
      findBannedId(bannedId);
  })
  
  combinationIds(0, []);
  
  return banSet.size;
}