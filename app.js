const chatGPT_API_KEY = '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';

let text =
  'It is important to drink plenty of fluids, such as water and sports drinks, to stay hydrated. If you are experiencing symptoms such as fatigue, headaches, or dizziness, it may be helpful to drink electrolyte-rich beverages like coconut water or Gatorade. Additionally, if';

const body = document.getElementById('body');
// body.scrollTop = body.scrollHeight

const chatContainer = document.getElementById('chat');

let textInput = document.getElementById('text-input');

// user input handler: this will add the user input to the chat
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
  chatContainer.scrollTop = chatContainer.scrollHeight;
  document.getElementById('submit-btn').disabled = true;
}

<<<<<<< HEAD
// AI response handler: this will add the AI response to the chat
function chatResponse(response) {
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
  chatContainer.scrollTop = chatContainer.scrollHeight;
  document.getElementById('submit-btn').disabled = false;
=======
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
>>>>>>> refs/remotes/origin/main
}

// This will make a request to the API

async function askQuestion() {
  userInput();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${chatGPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt:
        'Act as a doctor and give guidance based on this symptoms: \n\n' +
        textInput.value.trim(),
      temperature: 0.5,
      max_tokens: 200,
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
    let text = json.choices[0].text.trim();

    //This condition is to filter the result and make sure not to cut any text.

    let index = text.indexOf('\n\n');
    if (index !== -1) {
      let filteredText = text.substring(text.indexOf('\n\n') + 2);
      console.log(filteredText);
      chatResponse(filteredText);
    } else {
      chatResponse(text);
      console.log(text);
    }

    document.getElementById('text-input').value = '';
  } catch (error) {
    console.error(error);
  }
}
