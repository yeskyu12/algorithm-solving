// lv2 스킬트리
// https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript
function solution(skill, skill_trees) {
  let count = 0;
  
  skill_trees.forEach((skillTree) => {
      let skillCopy = skill;
      let available = true;
      
      for (let i in skillTree) {
          const nextSkill = skillTree[i];
          
          if (!skillCopy.includes(nextSkill)) continue;
          
          if (skillCopy[0] !== nextSkill) {
              available = false;
              break;
          }
          
          skillCopy = skillCopy.substring(1);
      }
      
      if (available) count++;
  })
  
  return count;
}