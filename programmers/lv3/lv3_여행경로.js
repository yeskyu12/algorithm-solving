// lv3 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
function solution(tickets) {
    let answer = [];
    
    const getAnswer = (route) => {
        if (answer.length === 0) answer = route;
        if (answer.join("") > route.join("")) answer = route;
    }
    
    const getNexts = (airport, remainedTickets) => {
        const nexts = remainedTickets
            .filter((ticket, i) => {
                if (ticket[0] === airport) {
                    return ticket;
                }
            });
        return nexts;
    }
    
    const travel = (remainedTickets, route) => {
        if (remainedTickets.length === 0) {
            getAnswer(route);
            return;
        }
        const current = route[route.length - 1];
        const nexts = getNexts(current, remainedTickets);
        nexts.forEach((next) => {
            const index = remainedTickets.findIndex((ticket) => ticket.join("") === next.join(""));
            const remainedTicketsCopy = [...remainedTickets];
            
            remainedTicketsCopy.splice(index, 1);
            travel(remainedTicketsCopy, [...route, next[1]]);
        })
    }
    
    travel([...tickets], ["ICN"]);
    return answer;
}
