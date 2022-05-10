const specialCharacters = ['|', '/', '-', '\\', '|', '/', '-', '\\']
let time = 100;
for (let chr of specialCharacters) {
  time += 200
  setTimeout(() => {
    process.stdout.write(`\r${chr}   `);
  }, time);
}



