const chatGPT_API_KEY = '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';
const chatGPT_API_URL = 'https://api.openai.com/v1/chat/completions';

const chatHistory = [];
const chatContainer = document.getElementById('chat');
let textInput = document.getElementById('text-input');

// function generateList() {
//   for (let i = 0; i < chatHistory.length; i++) {
//     img.alt = 'writer icon';
//     img.src = i % 2 === 0 ? '/images/ai.png' : '/images/user.png';
//     text.textContent = chatHistory[i];
//     div.classList.add('list-container');
//     div.appendChild(img);
//     div.appendChild(text);
//     list.appendChild(div);
//     chatContainer.appendChild(list);
//   }
// }

function userInput() {
  const list = document.createElement('li');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const text = document.createElement('p');

  img.alt = 'writer icon';
  img.src = 'images/user.png';
  text.textContent = textInput.value;
  div.classList.add('list-container');
  div.appendChild(img);
  div.appendChild(text);
  list.appendChild(div);
  chatContainer.appendChild(list);
}

function chatResponse(response){
	const list = document.createElement('li');
	const div = document.createElement('div');
	const img = document.createElement('img');
	const text = document.createElement('p');
  
	img.alt = 'writer icon';
	img.src = 'images/ai.png';
	text.textContent = response;
	div.classList.add('list-container');
	div.appendChild(img);
	div.appendChild(text);
	list.appendChild(div);
	chatContainer.appendChild(list);
}

async function askQuestion() {
	console.log(textInput.value);
  userInput();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${chatGPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: 'rewrite:' + textInput.value.trim(),
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    }),
  };

  try {
    const response = await fetch(
      'https://api.openai.com/v1/completions',
      options
    );
    const json = await response.json();
    console.log(json.choices[0].text.trim());
    chatResponse(json.choices[0].text.trim())
    document.getElementById('text-input').value = '';
  } catch (error) {
    console.error(error);
  }
}
