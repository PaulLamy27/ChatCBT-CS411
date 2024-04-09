const { Configuration, OpenAI } = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    api_key: 'API_KEY'
  });

// const openai = new OpenAIApi(openaiConfig)

module.exports = openai