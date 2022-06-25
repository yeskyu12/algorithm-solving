// lv2 [1차] 캐시
// https://programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  
  const cache = [];
  
  return cities.reduce((acc, cur) => {
      const city = cur.toLowerCase();
      const index = cache.indexOf(city);
      const isCacheHit = index > -1;
      
      if (isCacheHit) {
          cache.splice(index, 1);
      }
      else if (cache.length >= cacheSize) {
          cache.splice(0, 1);
      }
      
      cache.push(city);
      
      return isCacheHit ? acc + 1 : acc + 5;
  }, 0);
}