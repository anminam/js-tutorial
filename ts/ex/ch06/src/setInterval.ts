const period = 1000;

let value = 0;
const id = setInterval(() => {
  if (value >= 3) {
    clearInterval(id);
    console.log("finished...");
  } else {
    console.log(++value);
  }
}, period);
