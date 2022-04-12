const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable: ', (nickname) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (song) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`Who am I? Well, HERE WE GO! My name is ${nickname}, and I love ${activity}. Like, SO. MUCH. I also love listening to ${song} while I do that. My favorite meal is ${meal}, but the best part of that is ${food}. And obviously ${sport} rules. You'd never guess it, but my superpower is: ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});










