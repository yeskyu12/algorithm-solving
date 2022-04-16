// lv1 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
function solution(id_list, report, k) {
  const answer = [];
  const reportIds = {};
  const reportedIds = {};
  
  id_list.forEach((id) => {
      reportIds[id] = 0;
      reportedIds[id] = [];
  })
  
  report.forEach((r) => {
      const id = r.split(" ");
      const reportId = id[0];
      const reportedId = id[1];
      
      if (!reportedIds[reportedId].includes(reportId)) reportedIds[reportedId].push(reportId);
  })
  
  Object.values(reportedIds).forEach((reportedId) => {
      if (reportedId.length >= k) {
          reportedId.forEach((reportId) => reportIds[reportId]++)
      }
  })
  
  id_list.forEach((id) => {
      answer.push(reportIds[id]);
  })
  
  return answer;
}