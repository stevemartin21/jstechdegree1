// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);  */


/*  Here is the array with  5 objects and each object has two value/pairs one for quotes and one for source */


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

/*  This is a function to get a random quote---I have usd the random()  function to get a number from 0-1 multiplied it by the length of the quotes array
and the used the math.floor to round the number to an integer */



 function getRandomQuote (){
	 var random =Math.floor(Math.random()*quotes.length);
	 return random; 

	}

/*  the printQuote function  takes the results from the GetRandomQuote Function and builds some HTMl from it and selects the place on the HTML page to insert the created HTML */


function printQuote(){

	let random = getRandomQuote();
	var phrase = quotes[random].quote;
	var author = quotes[random].source;
	var place = document.getElementsByClassName('quote')[0];
	var person = document.getElementsByClassName('source')[0];
	place.innerHTML = phrase;
	person.innerHTML= author;
}

/*  THis is the part where I select the part of the page and set an event handler to the section */


document.getElementById('loadQuote').addEventListener("click", printQuote, false); 
