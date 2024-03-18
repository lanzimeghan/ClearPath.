import axios from "axios";

const apiKey = "AIzaSyCFHwO6Ao0ehHVzRjntznGGy479YM5AEFA";
const text = "I love using the Google Cloud Natural Language API!";

export const analyzeSentiment = async () => {
  try {
    const response = await axios.post(
      "https://language.googleapis.com/v1/documents:analyzeSentiment?key=" +
        apiKey,
      {
        document: {
          content: text,
          type: "I'm really sad",
        },
      }
    );

    // Handle response from the API
    console.log("Sentiment analysis result:", response.data);
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
  }
};

// Call the function to analyze sentiment
analyzeSentiment();
