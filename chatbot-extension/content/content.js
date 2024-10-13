// Inject a chatbot interface into the current webpage

let chatbotHTML = `
    <div id="chatbot-container" style="position: fixed; bottom: 20px; right: 20px; width: 300px; background-color: white; border: 1px solid #ccc; padding: 10px; z-index: 10000;">
        <div id="chatbot-header" style="background-color: #333; color: white; padding: 5px;">Chatbot</div>
        <div id="chatbot-messages" style="height: 200px; overflow-y: scroll; border: 1px solid #ccc; margin-bottom: 10px;"></div>
        <input id="chatbot-input" type="text" style="width: 70%; padding: 5px; margin-right: 10px;" placeholder="Ask me anything..."/>
        <button id="chatbot-send" style="padding: 5px;">Send</button>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// Add interaction logic for the chatbot
document.getElementById('chatbot-send').addEventListener('click', async () => {
    let userInput = document.getElementById('chatbot-input').value;
    if (userInput) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${userInput}`;
        document.getElementById('chatbot-messages').appendChild(userMessage);

        const botResponse = await getChatbotResponse(userInput);
        const botMessage = document.createElement('div');
        botMessage.textContent = `Bot: ${botResponse}`;
        document.getElementById('chatbot-messages').appendChild(botMessage);

        document.getElementById('chatbot-input').value = '';
    }
});

async function getChatbotResponse(userInput) {
    // Process the user input and return a response
    if (userInput.toLowerCase().includes('faq')) {
        // Optionally scrape FAQs from the page or use API calls here
        return "Here are some FAQs from the website!";
    } else {
        return "I'm not sure about that. Let me connect you to a real agent.";
    }
}
