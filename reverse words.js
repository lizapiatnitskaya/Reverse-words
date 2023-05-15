function reverseWords(str) {
  str=str.split(" ");
  let arr=[];
  for(let i=0; i<str.length; i++){
    arr.push([...str[i]].reverse().join(""));
  }
  return arr.join(" ");
}
console.log(reverseWords("double  spaced  words"));