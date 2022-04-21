const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also accetable :)' , (answer0) => {
  rl.question('What\'s an activity you like doing?\n', (answer1) => {
    rl.question('What do you listen to while doing that?\n', (answer2) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)\n', (answer3) => {
        rl.question('What is your favourite thing to eat for that meal?\n', (answer4) => {
          rl.question('Which sport is your absolute favourite?\n', (answer5) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer6) => {
              console.log(`Your name is ${answer0}. The activity that you like to do is ${answer1}. You listen to ${answer2} while doing ${answer1}. Your favourite meal time is ${answer3}. During that meal time your favourite thing to eat is ${answer4}. Your most absolute favourite sports is ${answer5}. Your superpower is ${answer6}. `);
              rl.close();
            });
          });
        });
      });
    });
  });
});