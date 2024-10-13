document.getElementById('chatbot-send').addEventListener('click', async () => {
    let userInput = document.getElementById('chatbot-input').value;
    if (userInput) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${userInput}`;
        document.getElementById('chatbot-messages').appendChild(userMessage);

        // Call the chatbot response function
        const botResponse = await getChatbotResponse(userInput);
        const botMessage = document.createElement('div');
        botMessage.textContent = `Bot: ${botResponse}`;
        document.getElementById('chatbot-messages').appendChild(botMessage);

        // Clear input field
        document.getElementById('chatbot-input').value = '';
    }
});

async function getChatbotResponse(userInput) {
    // For simplicity, this function returns canned responses.
    // You can add API calls here if needed.
    if (userInput.toLowerCase().includes('hello')) {
        return "Hi there! How can I assist you today?";
    } else {
        return "I'm not sure about that. Let me connect you to a real agent.";
    }
}
