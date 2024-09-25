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
});