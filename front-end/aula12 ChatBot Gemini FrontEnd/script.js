// Input da mensagem digitada pelo user
let inputMessage = document.getElementById('message');
//Div onde a mensagem será exibida sendo do usuário e assistente
let chatlog = document.getElementById('chat-log');
//Array que ira salvar o historico local de mensagens com a IA
let messagesGemini = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let messageText = inputMessage.value;

    let newMessageGemini = {
        "role": "user",
        "parts": [{"text": messageText}]
    };

    messagesGemini.push(newMessageGemini);

    inputMessage.value = '';
    console.log(messagesGemini);

    let messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
    <div class="message__text"> ${messageText}</div>`;
    chatlog.appendChild(messageElement);
});