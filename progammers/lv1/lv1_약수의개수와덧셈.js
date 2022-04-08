// lv1 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
    let answer = 0;
    const length = right - left + 1;
    const counts = new Array(length).fill(0);
    
    for (let number = left; number <= right; number++) {
        const i = number - left;
        let index = 1;
        
        while (index <= number) {
            if (number % index++ === 0) counts[i]++;
        }
    }
    
    counts.forEach((count, i) => count % 2 === 0 ? answer += (i + left) : answer -= (i + left));
    return answer;
}
