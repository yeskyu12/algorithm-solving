// lv2 [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  const convertStr = (str) => str.toLowerCase().replace(/[^a-z]/g, " ");
  
  const s1 = convertStr(str1);
  const s2 = convertStr(str2);
  
  if (s1 === s2) return 65536;
  
  const getGroup = (str) => str.split(" ").reduce((acc, cur) => {
      cur.split("").map((c, i) => {
          if (cur[i + 1]) {
              const el = c + cur[i + 1];
              
              if (!acc.has(el)) acc.set(el, 0);
              acc.set(el, acc.get(el) + 1);
          }
      })
      
      return acc;
  }, new Map());
  
  const group1 = getGroup(s1);
  const group2 = getGroup(s2);
  
  const calculate = (g1, g2) => {
      let intersection = 0, union = 0;
      const unionMap = new Map([...g2]);
      
      for (const [key, value] of g1.entries()) {
          if (g2.has(key)) {
              const value2 = g2.get(key);
              intersection += Math.min(value, value2);
              unionMap.set(key, Math.max(value, value2));
          } else {
              unionMap.set(key, value);
          }
      }
      
      for (const value of unionMap.values()) {
          union += value;
      }
      
      return Math.floor(intersection / union * 65536);
  }
  
  const jaccardSimilarity = calculate(group1, group2);
  
  return jaccardSimilarity;
}