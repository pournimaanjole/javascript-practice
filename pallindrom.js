// pallindrom function 
 
const pallindrom = (num) =>{
let numStr = num.toString();
let result = numStr.split('').reverse().join('');
return numStr === result;

}
 console.log(pallindrom(161));
 