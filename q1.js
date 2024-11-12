let n = 1627;  //Change the value here
let y = 0;
let m = 0;
let d = 0;
let j = 0;
let i = 0;
while (n >= 365) {
    y++;
    n -= 365;
    j++;
    if (j == 3 && n>=366) {
        j = 0;
        y++;
        n -= 366;
    }
   
}

while (n >= 31) {
  m++;
  n -= 31;
  i++;
  if (i == 1&&n>=28) {
    i++;
    m++;
    n -= 28;
  }
  if (n >= 30 && i != 2 ) {
    m++;
    n -= 30;
  }
}
d = n;
console.log(y+"year", m+"months", d+"days");
