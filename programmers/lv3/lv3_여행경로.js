// lv3 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// TODO: 사전순으로 경로 막히는 케이스 고려 필요
function solution(tickets) {
  const answer = ["ICN"];
  
  const ticketsCopy = [...tickets].sort((a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0;
  });
  
  const getNext = (airport) => {
      const index = ticketsCopy.findIndex((ticket) => ticket[0] === airport);
      const next = ticketsCopy[index];
      ticketsCopy.splice(index, 1);
      return next;
  }
  
  while (ticketsCopy.length > 0) {
      const current = answer[answer.length - 1];
      const next = getNext(current);
      answer.push(next[1]);
  }
  
  return answer;
}