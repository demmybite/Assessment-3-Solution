const users = 100;
let userIdOdd = [];
let userIdEven = [];

for (let i = 1; i <= users; i++) {
  if (i % 2 === 0) {
    userIdEven.push(i);
  } else {
    userIdOdd.push(i);
  }
}

console.log(userIdEven);
console.log(userIdOdd);
