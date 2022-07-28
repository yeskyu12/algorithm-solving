// lv3 베스트앨범
// https://school.programmers.co.kr/learn/courses/30/lessons/42579
function solution(genres, plays) {
  const genreSet = new Set(genres);
  
  const genrePlays = genres
      .reduce((arr, genre, i) => [...arr, {
          genre,
          play: plays[i],
          index: i,
      }], [])
      .sort((a, b) => {
          if (b.genre < a.genre) return 1;
          if (b.genre > a.genre) return -1;
          if (b.play !== a.play) return b.play - a.play;
          return a.index - b.index;
      });
  
  const genreTotalPlays = [...genreSet].reduce((totalPlays, genre) => {
      const total = genrePlays
          .filter((genrePlay) => (genrePlay.genre === genre))
          .reduce((acc, cur) => acc + cur.play, 0);
      return {...totalPlays, [genre]: total};
  }, {});
  
  const orderedGenreTotalPlays = Object
      .entries(genreTotalPlays)
      .sort((a, b) => b[1] - a[1]);
  
  const answer = orderedGenreTotalPlays.reduce((arr, cur) => {
      const bests = genrePlays.filter((genrePlay) => (genrePlay.genre === cur[0]));
      
      arr.push(bests[0].index);
      if (bests.length > 1) arr.push(bests[1].index);
      
      return arr;
  }, [])
  
  return answer;
}