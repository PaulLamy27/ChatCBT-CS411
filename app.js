const readline = require('readline')
const { generateMeta } = require('./controllers/openaiController')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askQuestion() {
  rl.question("", async (title) => {
    await generateMeta(title);
    askQuestion(); // Call askQuestion() again to prompt the user for the next input
  });
}
console.log("Tell me how you are feeling. What is on your mind?: \n");
askQuestion(); // Start the conversation