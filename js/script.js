// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);  */



let quotes = [
	{
		quote: 'Ask now what your country can do for you, but what you can do for your country',
		source: "John F Kennedy"
	},

	{
		quote: 'One small step for man, one giant step for mankind',
		source: 'Neil Armstrong'
	},

	{
		quote: 'Just do it',
		source: 'NIke'
	},

	{ 
		quote: 'Tear Down this Wall',
		source: "Ronald Reagan"

	},

	{
		quote: 'Be the change that you wish to see in the world.',
		source: 'Mahatma Gandhi'
	}


];

/*let random = Math.floor(Math.random()*quotes.length); */


function printQuote(){
	let random = Math.floor(Math.random()*quotes.length);

	var phrase = quotes[random].quote;
	var author = quotes[random].source;
	var place = document.getElementsByClassName('quote')[0];
	var person = document.getElementsByClassName('source')[0];
	place.innerHTML = phrase;
	person.innerHTML= author;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false); 
