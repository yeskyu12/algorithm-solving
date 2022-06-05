// lv2 줄 서는 방법
// https://programmers.co.kr/learn/courses/30/lessons/12936?language=javascript
function solution(n, k) {
    const getPermutations = function (arr, count) {
        const result = [];
        if (count === 1) return arr.map((el) => [el]);

        arr.forEach((curr, i, origin) => {
            const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
            const permutations = getPermutations(rest, count - 1);
            const attach = permutations.map((p) => [curr, ...p]);
            result.push(...attach);
        });

        return result;
    }
    
    const permutations = getPermutations([...Array(n)].map((v, i) => i + 1), n);
    
    return permutations[k - 1];
}
