const chatHistory = [
	{
		id: 1,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 2,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 3,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 4,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 5,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 6,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 7,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 8,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 9,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
	{
		id: 10,
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
	},
]


const chatContainer = document.getElementById('chat')



for (let i = 0; i < chatHistory.length; i++) {
	const div = document.createElement('div')
	const list = document.createElement('li')
	const text = document.createElement('p')
	const img = document.createElement('img')
	img.alt = 'writer icon'
	img.src = i % 2 === 0 ? '/images/ai.png' : '/images/user.png'
	text.textContent = chatHistory[i].text
	div.classList.add('list-container')
	div.appendChild(img)
	div.appendChild(text)
	list.appendChild(div)
	chatContainer.appendChild(list)	
}



function askQuestion(){
	console.log('click');
	
}