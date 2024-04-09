const openai = require('../config/openaiConfig')
require('dotenv').config()

const generateMeta = async (req, res) => {
  const {prompt} = req.body;

  const response = await openai.chat.completions.create({
    messages: [
      { 
        role: 'user', 
        content: `Respond to the following as if you are a CBT therapist: ${prompt}`
      },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 4000
  })

  console.log(response.choices[0].message.content)

  res.status(200).json({
    response: response.choices[0].message.content
  });
}

module.exports = {generateMeta};