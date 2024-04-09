const openai = require('../config/openaiConfig')
require('dotenv').config()


const generateMeta = async (prompt) => {

  const response = await openai.chat.completions.create({
    messages: [
      { 
        role: 'user', 
        content: `Respond to the following as if you are a CBT therapist: ${prompt}`
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(response.choices[0].message.content)
}

module.exports = {generateMeta};