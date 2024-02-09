const chatHistory = document.querySelector('.chat-history');
const chatInput = document.querySelector('.chat-input');
const chatForm = document.querySelector('.chat-form');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Add your logic to handle message sending here
  // (e.g., store in local storage, send to server)

  const message = chatInput.value;
  chatInput.value = '';

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');

  const userElement = document.createElement('span');
  userElement.classList.add('chat-message-user');
  userElement.textContent = 'You:';

  const textElement = document.createElement('span');
  textElement.classList.add('chat-message-text');
  textElement.textContent = message;

  messageElement.appendChild(userElement);
  messageElement.appendChild(textElement);

  chatHistory.appendChild(messageElement);

  // Scroll to the bottom of the chat history
  chatHistory.scrollTop = chatHistory.scrollHeight;
});
