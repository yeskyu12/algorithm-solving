// lv2 주차 요금 계산
// https://programmers.co.kr/learn/courses/30/lessons/92341
function solution(fees, records) {
  const answer = [];
  const carMap = new Map();
  
  const getMinutes = (time) => {
      const [hours, minutes] = time.split(":");
      return Number(minutes) + Number(hours) * 60;
  }
  
  const getFee = (acc) => {
      const [basicTime, basicFee, unitTime, unitFee] = fees;
      
      return acc < basicTime ? basicFee : basicFee + Math.ceil((acc - basicTime) / unitTime) * unitFee;
  }
  
  records.forEach((record) => {
      const [time, number] = record.split(" ");
      
      let carData = {
          accumulate: 0,
          prevTime: getMinutes(time),
      }
      
      if (carMap.has(number)) {
          const { accumulate, prevTime } = carMap.get(number);
          
          if (prevTime !== "") {
              carData = {
                  accumulate: accumulate + getMinutes(time) - prevTime,
                  prevTime: "",
              };
          } else {
              carData = {
                  accumulate,
                  prevTime: getMinutes(time),
              };
          }
      }
      
      carMap.set(number, carData);
  })
  
  const carArr = [...carMap].sort((a, b) => a[0] - b[0]);
  
  carArr.forEach((car) => {
      const { accumulate, prevTime } = car[1];
      let acc = accumulate;
      
      if (prevTime !== "") {
          acc += getMinutes("23:59") - prevTime;
      }
      
      answer.push(getFee(acc));
  })
  
  return answer;
}