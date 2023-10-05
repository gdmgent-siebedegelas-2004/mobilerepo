const myLoopingArray = ["one", "two", "three", { name: "Siebe" }];

for (let i = 0; i < myLoopingArray.length; i++) {
  console.log(myLoopingArray[i]);
}

for (let index in myLoopingArray) {
  console.log(myLoopingArray[index]);
}

for (let obj of myLoopingArray) {
  console.log(obj);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
