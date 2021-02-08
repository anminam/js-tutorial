const names = ["jack", "june", "Steve"];

for (let index in names) {
  const name = names[index];
  console.log(`[${index}: ${name}]`);
}
