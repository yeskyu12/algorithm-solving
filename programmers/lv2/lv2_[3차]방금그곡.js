// lv2 [3차] 방금그곡
// https://programmers.co.kr/learn/courses/30/lessons/17683
function solution(m, musicInfos) {
    const music = {
        name: "(None)",
        time: 0,
    };
    
    const getPlayedTime = (start, end) => {
        const [sHour, sMin] = start.split(":");
        const [eHour, eMin] = end.split(":");
        return (eHour - sHour) * 60 + (eMin - sMin);
    }
    
    const convertMelody = (melody) => melody.replace(/[A-Z]#/gi, s => s[0].toLowerCase());
    
    m = convertMelody(m);
    
    musicInfos.forEach((musicInfo) => {
        const [start, end, name, sheet] = musicInfo.split(",");
        const playedTime = getPlayedTime(start, end);
        let playedMusic = "";
        
        const melody = convertMelody(sheet);
        
        for (let i = 0; i < playedTime; i++) {
            playedMusic += melody[i % melody.length];
        }
        
        if (playedMusic.includes(m) && playedTime > music.time) {
            music.name = name;
            music.time = playedTime;
        }
    })
    
    return music.name;
}
