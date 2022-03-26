// lv1 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();
  
  for (let i = 0; i < sortedParticipant.length; i++) {
      if (sortedParticipant[i] !== sortedCompletion[i])
          return sortedParticipant[i];
  }
}