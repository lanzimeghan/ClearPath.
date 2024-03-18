const express = require("express");
const { OpenAIApi, Configuration } = require("openai");

const app = express();

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(
  "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"
);

app.post("/generate-affirmation", async (req, res) => {
  try {
    const userInput = req.body.input;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You: ${userInput}\nAI: Generate an affirmation for today.`,
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    });

    res.json({ affirmation: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/generate-challenge", async (req, res) => {
  try {
    const userInput = req.body.input;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You: ${userInput}\nAI: Give me a wellness challenge for today.`,
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    });

    res.json({ challenge: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
