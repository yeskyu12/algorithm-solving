// lv3 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
function solution(n, computers) {
  var answer = 0;
  
  const networks = [...computers];
  
  const getNetwork = (i, j) => {
      networks[i][j] = networks[j][i] = -1;
      const nextNetwork = networks[j];
      nextNetwork.forEach((connected, index) => {
          if (connected === 1) {
              getNetwork(j, index);
          }
      })
  }
  
  const findNetwork = (network, i) => {
      network.forEach((connected, j) => {
          if (connected === 1) {
              answer++;
              getNetwork(i, j);
          }
      })
  }
  
  networks.forEach((network, i) => {
      findNetwork(network, i);
  })
  
  return answer;
}