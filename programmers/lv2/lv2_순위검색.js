// lv2 순위 검색
// https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript
// TODO: 효율성 개선 필요
function solution(infos, queries) {
  let answer = [];
  
  const parse = (query) => {
      const [lan, job, career, fs] = query.split(" and ");
      const [food, score] = fs.split(" ");
      
      return { lan, job, career, food, score };
  }
  
  const check = (a, b) => (a === "-" || a === b);
  
  const filtering = (query, info) => {
      const { lan, job, career, food, score } = query;
      const [l, j, c, f, s] = info.split(" ");
      
      return check(lan, l) && check(job, j) && check(career, c) && check(food, f) &&
          (score === "-" || Number(s) >= Number(score));
  }
  
  const search = (query) => {
      const q = parse(query);
      answer.push(infos.filter((info) => filtering(q, info)).length);
  }
  
  queries.forEach((query) => {
      search(query);
  })
  
  return answer;
}