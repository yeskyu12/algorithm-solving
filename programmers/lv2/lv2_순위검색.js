// lv2 순위 검색
// https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript
// TODO: 효율성 개선 필요
function solution(infos, queries) {
    let answer = [];
    
    const lan = ["c", "j", "p", "-"];
    const job = ["b", "f", "-"];
    const career = ["j", "s", "-"];
    const food = ["c", "p", "-"];
    const groups = {};
    
    lan.forEach((l) => {
        job.forEach((j) => {
            career.forEach((c) => {
                food.forEach((f) => {
                    const group = l + j + c + f;
                    groups[group] = [];
                })
            })
        })
    })
    
    infos.forEach((info) => {
        const [l, j, c, f, score] = info.split(" ");
        const group = l[0] + j[0] + c[0] + f[0];
        
        groups[group].push(Number(score));
    })
    
    const check = (k1, k2) => {
        const key = k1.split("");
        let isSame = true;
        
        key.forEach((k, i) => {
            if (k !== "-" && k !== k2[i]) isSame = false;
        })
        return isSame;
    }
    
    const getScores = (key) => {
        const [l, j, c, f] = key.split("");
        const scores = [];
        
        for (const [k, v] of Object.entries(groups)) {
            if (!k.includes("-") && check(key, k)) scores.push(...groups[k])
        }
        
        groups[key] = scores;
    }
    
    for (const key of Object.keys(groups)) {
        if (key.includes("-")) getScores(key);
    }
    
    const getMembers = (group, score) => {
        const members = groups[group].filter((s) => s >= score);
        answer.push(members.length);
    }
    
    queries.forEach((query) => {
        const [l, j, c, fs] = query.split(" and ");
        const [f, s] = fs.split(" ");
        const group = l[0] + j[0] + c[0] + f[0];
        const score = s === "-" ? 0 : Number(s);
        
        getMembers(group, score);
    })
    
    return answer;
}