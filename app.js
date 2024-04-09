const readline = require('readline')
const express = require('express');
const { generateMeta } = require('./controllers/openaiController')

// app setup
const app = express()
app.listen(4000, () => console.log('listening to requests on port 4000'))

// middleware
app.use(express.json())

// routes
app.post('/openai/meta', generateMeta)

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// function askQuestion() {
//   rl.question("", async (title) => {
//     await generateMeta(title);
//     askQuestion(); // Call askQuestion() again to prompt the user for the next input
//   });
// }
// console.log("Tell me how you are feeling. What is on your mind?: \n");
// askQuestion(); // Start the conversation

