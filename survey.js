const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`So your name is ${answer}`);
  let name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`And you like ${answer}`);
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Oh, nice, you like listening ${answer}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`Gotcha, you like to eat ${answer}`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`And your favourite food is ${answer}`);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Besides eating you like ${answer}, eh?`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`And your superpower is ${answer}, gotcha`);
              console.log(`Thank you for your valuable feedback: ${name}`);
  rl.close();
            });
          });
        });
      });
    });
  });
});
















// const name = "What's your name? Nicknames are also acceptable :) ";
// const activity = "What's an activity you like doing? ";
// const music = "What do you listen to while doing that? ";
// const meal = "Which meal is your favourite (eg: dinner, brunch, etc.) ";
// const food = "What's your favourite thing to eat for that meal? ";
// const sports = "Which sport is your absolute favourite? ";
// const superPower = "What is your superpower? In a few words, tell us what you are amazing at! ";
// const arr = [name, activity, music, meal, food, sports, superPower];
// let result = "";
// const askQuestion = i => {
//   if (i < arr.length) {
//     rl.question(arr[i], (answer) => {
//       result += '\n' + answer;
//       askQuestion(i + 1);
//     });
//   } else {
//     console.log(`Thank you for your valuable feedback: ${result}`);
//     rl.close();
//   }
// };
// askQuestion(0);