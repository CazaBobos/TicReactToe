export function calculateWinner(squares){
  const lines = [
    [0,1,2], //H top
    [3,4,5], //H middle
    [6,7,8], //H bottom
    [0,3,6], //V Left
    [1,4,7], //V Middle
    [2,5,8], //V Right
    [0,4,8], //D decreasing ltr
    [2,4,6]  //D increasing ltr
  ]
  for(let i=0; i < lines.length; i++){
    const[a,b,c] = lines[i];
    if(squares[a] &&
      squares[a]===squares[b] &&
      squares[a]===squares[c])
      return squares[a];
  }
  return null;
}