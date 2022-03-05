// lv1 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
    return phone_number.slice(-4).padStart(phone_number.length, '*');
}