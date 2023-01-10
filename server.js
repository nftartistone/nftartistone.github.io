const express = require('express');
const app = express();
const openai = require('openai');

// Set the API key for OpenAI
openai.apiKey = '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';

// Set up a route for the Rewrite button
app.post('/rewrite', (req, res) => {
  // Retrieve the script and selected author from the request body
  const script = req.body.script;
  const author = req.body.author;

  // Use the OpenAI API to rewrite the script in the selected author's style
  openai.completion.create({
    model: 'text-davinci-002',
    prompt: `Rewrite this script in the style of ${author}: ${script}`,
    temperature: 0.7
  }, (error, response) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      // Send the rewritten script back to the client
      res.send(response.text);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
