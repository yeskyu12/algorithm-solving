// lv3 디스크 컨트롤러
// https://school.programmers.co.kr/learn/courses/30/lessons/42627
const sortJob = (a, b) => a[0] - b[0];

const sortWaiting = (a, b) => a[1] - b[1];

function solution(jobs) {
    const jobsCopy = [...jobs].sort(sortJob);
    
    let totalTime = 0;
    let waitingQueue = [];
    let time = 0;
    let currentJob = [0, 0];
    
    const pushJobs = () => {
        while (jobsCopy.length > 0 && jobsCopy[0][0] <= time) {
            waitingQueue.push(jobsCopy.shift());
        }
    }
    
    const processJob = () => {
        const [start, end] = currentJob;
        if (end > time) return;
        
        waitingQueue = waitingQueue.sort(sortWaiting);
        const [requestTime, processTime] = waitingQueue[0];

        if (requestTime <= time) {
            currentJob = [time, time + processTime];
            waitingQueue.shift();
            totalTime += (time - requestTime) + processTime;
        }
    }
    
    while (jobsCopy.length > 0 || waitingQueue.length > 0) {
        pushJobs();        
        processJob();
        time++;
    }
    
    return totalTime / jobs.length;
}