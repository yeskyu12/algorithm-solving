// lv1 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
function solution(n, lost, reserve) {
    const trainings = new Array(n).fill(1);

    reserve.forEach((r) => trainings[r - 1]++);
    lost.forEach((l) => trainings[l - 1]--);
    
    for (let i = 0; i < n; i++) {
        if (trainings[i] < 2) continue;
        if (trainings[i - 1] == 0) {
            trainings[i - 1] = trainings[i] = 1;
            continue;
        }
        if (trainings[i + 1] == 0) {
            trainings[i + 1] = trainings[i] = 1;
        }
    }
    
    console.log(trainings)
    return trainings.filter((t) => t > 0).length;
}
