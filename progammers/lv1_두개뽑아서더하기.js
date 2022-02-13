function solution(numbers) {
    var set = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j]);
        }
    }

    return [...set].sort(function(a,b) {
        return a - b;
    });
}