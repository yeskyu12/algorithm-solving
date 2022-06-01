// lv1 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
    const left = [1, 4, 7, '*'];
    const right = [3, 6, 9, '#'];
    const center = [2, 5, 8, 0];

    let leftFinger = '*';
    let rightFinger = '#';
    let result = '';

    const pressLeft = (num) => {
        result += 'L';
        leftFinger = num;
    }

    const pressRight = (num) => {
        result += 'R';
        rightFinger = num;
    }

    const pressCenter = (num) => {
        const leftDist = getDistance(num, leftFinger, left);
        const rightDist = getDistance(num, rightFinger, right);

        if (leftDist < rightDist) pressLeft(num);
        else if (leftDist > rightDist) pressRight(num);
        else hand === 'left' ? pressLeft(num) : pressRight(num);
    }

    const getDistance = (num, h, keypad) => {
        if (center.includes(h)) return Math.abs(center.indexOf(h) - center.indexOf(num));
        return Math.abs(keypad.indexOf(h) - center.indexOf(num)) + 1;
    }

    numbers.forEach((number) => {
        if (left.includes(number)) pressLeft(number);
        else if (right.includes(number)) pressRight(number);
        else pressCenter(number);
    })


    return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL");
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left") === "LRLLRRLLLRR");
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right") === "LLRLLRLLRL");