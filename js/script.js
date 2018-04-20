// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);  */


/*  Here is the array with  5 objects and each object has two value/pairs one for quotes and one for source */

//THis is an array of objects and is used to the array uses [] and each object is separated by { } and a ,
// objects are also used to have a key and a value with a semi colon separating them 


let skills = [
	{
		skill: 'Bootstrap Design',
		category: "Front End Development"
	},

	{
		skill: 'CSS Grid',
		category: "Front End Development"
	},

	{
		skill: 'HTML Layout',
		category: "Front End Developement"
	},

	{ 
		skill: 'Array & Objects',
		category: "Javascript"

	},

	{
		skill: 'Functions',
		category: "Javascript"
	}


];

/*  This is a function to get a random quote---I have usd the random()  function to get a number from 0-1 multiplied it by the length of the quotes array
and the used the math.floor to round the number to an integer */

//The random number generator pics a number fromt he total length of the array, the random function generates a number from 0-1 and then you times it by the length
// and then use the Math.floor to round it down, I have created a separate function and then called it in the next function when it is run and stored the out put in a variable
// I think a good way to to use function and take input and store inputs in variable sna dthen use the vairable in other functions and store then in variables 
//it is a good way to break thigns up , functions take inout and create outputs, the inputs can be added dymanically 
// the return statement says what should be the output of the function and what value it should return 

 function getRandomSkill (){
	 var random =Math.floor(Math.random()*skills.length);
	 return random; 

	}

/*  the printQuote function  takes the results from the GetRandomQuote Function and builds some HTMl from it and selects the place on the HTML page to insert the created HTML */

//the next function takes the resutls of the first functino by calling it and storing it in a  variable.
//it then accesses the array called skills and inserts the results of the function stored in the vairable random
//I have saved the results of accessing two object values using the random selector in two variables mySkills & Mycategory
//I then selected two sections ont he html site one for skills and one for category
//the next things i did was set the innerHTML of these sections to the results of the query for the array, 
// to access the array you need to first name the array skills and then use an index number to choose a number in the array 
//  the number chooses one item in the array and then you need to choose one of the values in the object with the dot notation .  
// This will select one of the keys in the object and will return the value selected
//


function printSkill(){

	let random = getRandomSkill();
	var mySkills = skills[random].skill;
	var myCategory = skills[random].category;
	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
}

/*  THis is the part where I select the part of the page and set an event handler to the section */

//


document.getElementById('loadSkill').addEventListener("click", printSkill, false); 
document.getElementById('loadEducation').addEventListener("click", printEducation, false); 
document.getElementById('loadExperience').addEventListener("click", printExperience, false); 
document.getElementById('loadAchievements').addEventListener("click", printAchievement, false); 



//Create objects for each one of these
//Section for Education, Experience, Awards
// Testimonails of previous employers



var education = [
{
	School:  'University of Utah',
	Degree: "Finance BA"
},
{
	School: "University of Utah",
	Degree: "Master of Business Finance"
},
{
	School: 'Western Governors University',
	Degree: "Accounting BA"
},
{
	School: 'Team Treehouse ',
	Degree: 'Full Stack Javascript Tech Degree'
},
{
	School: 'Team Treehouse',
	Degree: 'Front End Development '
}
]

console.log(education);


 function getRandomEducation (){
	 var random =Math.floor(Math.random()*education.length);
	 return random; 

	}

function printEducation(){

	let random = getRandomEducation();
	var mySkills = education[random].School;
	var myCategory = education[random].Degree;
	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
}



var experience = [

{
	Company:  "Curb Real Estate",
	Position: "Associate Broker",
	Responsibilities: "Many"
},

{
	Company:  "Realty Path Real Estate",
	Position: "Associate Broker",
	Responsibilities: "Many"
},

{
	Company:  "TD Ameritrade",
	Position: "Sales Associate",
	Responsibilities: "Many"
},

{
	Company:  "Robison & Company",
	Position: "Associate Broker",
	Responsibilities: "Many"
}


]

function getRandomExperience (){
	 var random =Math.floor(Math.random()*experience.length);
	 return random; 

	}

function printExperience(){

	let random = getRandomExperience();
	var mySkills = experience[random].Company;
	var myCategory = experience[random].Position;
	var myResponsibility = experience[random].Responsibilities;

	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	var responsibility = document.getElementsByClassName('responsibility')[0];

	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
	responsibility.innerHTML= myResponsibility;

}


var achievements = [
{
	Company: "Curb Real Estate",
	Title: "Outstanding Sales Performance",
	Year: '2016'
},
{
	Company: "Realty Path Real Estate",
	Title: "Outstanding Sales Performance",
	Year: '2015'
},

{
	Company: "Realty Path Real Estate",
	Title: "Outstanding Leadership Performance",
	Year: '2014'
},
]

function getRandomAchievement (){
	 var random =Math.floor(Math.random()*achievements.length);
	 return random; 

	}

function printAchievement(){

	let random = getRandomAchievement();
	var mySkills = achievements[random].Company;
	var myCategory = achievements[random].Title;
	var myResponsibility = achievements[random].Year;

	var skill = document.getElementsByClassName('skill')[0];
	var category = document.getElementsByClassName('category')[0];
	var responsibility = document.getElementsByClassName('responsibility')[0];

	skill.innerHTML = mySkills;
	category.innerHTML= myCategory;
	responsibility.innerHTML= myResponsibility;

}



console.log(experience);

console.log(skills);

console.log(achievements);


// Regular Array 


var a = [1,2,3,4,5,6,7,8,9,10];
var b = ["Bob", "Sally", "Ted", "Larry"]
var c = ["Green", "Red", "Blue", "Purple"]
var d = ["Apple", "Orange", "Pear", "Lime"]
var e = [21,22,23,24,25,26]
var f = ['Monday', 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var g = ['January', 'February', "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"] 
var h = [11,12,13,14,15,16,17]
var i = ['Great', "Good", "Ok", "Poor"]

console.log(f);


//Associative Array 

var assA = [

[1,2,3,4,5,6,7,8,9,10],

["Bob", "Sally", "Ted", "Larry"],

["Green", "Red", "Blue", "Purple"],

["Apple", "Orange", "Pear", "Lime"],

[21,22,23,24,25,26],

['Monday', 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

['January', 'February', "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"],

[11,12,13,14,15,16,17],

['Great', "Good", "Ok", "Poor"],

]

//var objA = 

var showButton = document.getElementById('loadArray');

showButton.addEventListener('click', showArray, true);

function showArray(){
	var text = "";

	var show =document.getElementById('showArray');
	for (i=0; i<g.length; i++){
		 text += "The month is " + g[i] + "<br>";
	}
	show.innerHTML = text;
 
	

}


//AssociativeArray 

var showButtonA = document.getElementById('loadArrayA');

showButtonA.addEventListener('click', showArrayA, true);

function showArrayA(){
	var text = "";

	var show =document.getElementById('showArrayA');
	for (i=0; i<assA.length; i++){
		 text += "The month is " + assA[i][2]+ "<br>";
	}
	show.innerHTML = text;
 
	

}



///Write Some Objects -- objects 

var objA  = {
	name: "Steve",
	lname: 'Martin',
	personality: 'Awesome'
}

var objB = {
	job: 'Real Estate',
	title:'Sales',
	success: 'Much'
}

var objC = {
	state: 'Utah',
	city: 'Bountiful',
	zip: '84010'
}

var objD = {

	church:'lds',
	attendence:'Every Week',
	dayofWeek: 'Sunday'
}

var objE = {
	daysWork: 7,
	hoursWork: 40,
	weeksWork: 52

}

console.log(objA);

//AssociativeArray 

var showButtonO = document.getElementById('loadObject');

showButtonO.addEventListener('click', showObject, true);

function showObject(){
	var text = "";

	var show =document.getElementById('showObject');
	
	show.innerHTML = objA.name + ' ' + '<br>';
	show.innerHTML += objA.lname + ' ' + '<br>';
	show.innerHTML += objA.personality + ' ' + '<br>';
 
 
	

}



var family = {
    sister: {
        firstName: "Sarah",
        lastName: "Novey",
        gender: "Female"
    },

    mother: {
        firstName: "Mary",
        lastName: "Novey",
        gender: "Female"
    },

    father: {
        firstName: "Bruce",
        lastName: "Novey",
        gender: "Male"
    },

    pet: {
        firstName: "Dusty",
        lastName: "Novey",
        gender: "Male"
    }
}


for(var person in family) {
    console.log(person);
}



//// write 5 arrays and access with console.log()



var array1 = [1,2,3,4,7];

var array2 = ["bob", 'ned', 'larry'];

var array3 = ['red', 'blue' , 'green'];

var array4 = ['winner', 'loser', 'game over'];

var array5 = ['frank', 'dean', 'ned'];
alert(array5[2])


//  write  objects and console.log them 

var objectA  = {

	name: 'bob',
	age: 26,
	occupation: 'plumber'
}

var objectB  = {

	team: 'RSL',
	city:'Salt Lake',
	sport: 'soccer'	
}

var objectC  = {

	company:' Goldman',
	position: "Janitor",
	salary:40000	
}

var objectD  = {

	hobby: 'Photography',
	camera: 'Nikon',
	software: 'Google Photo'
	
}

var objectE  = {

	town:'Latuda',
	county: 'carbon',
	why: 'Mine ran out'
}

console.log(objectE.why);

for (i=0; i<array5.length; i++){
	console.log(array5[i]);
}

for (variable  in objectE){
	console.log(objectE[variable])
}

var bobb = 6;
var darren= 8;
var jamie = 12;
var ted = true; 
var todd = darren * jamie;

if(bobb>5){
	console.log('Green');
	
}
console.log(todd);


if (bobb == darren){
	alert('it is equal')
}
else{
	alert('it is not equal')
}

if( bobb< darren && bobb<jamie ){

	alert('You are a champion')
}
else{
	alert('better luck next time')
}

if(bobb<darren && darren<jamie && ted== true){

	alert('I was up at ')
}
else{
	alert('it was too early')
}

if (bobb<darren){
	alert(jamie);
}

if ( todd<100 || bobb< darren){

	alert('You sir are a winner')
}
else{
	alert('sorry better luck next time')
}


////////////////////  Write  5 functions 

function bob (){
	return 3*3
}
function red(){
	return 4*4
}
function catFood(){
	return red()*bob()
}
function dogFood(){
	return catFood() /12
}
function birdFood(){
	return dogFood() * bob()
}
function china(){
	return birdFood() / dogFood()
}

function brazil(){
	return china() * china()
}

function trump(){
	return china() / birdFood()
}

function sanders(){

	return trump() *0
}

function clinton(){
	return "Goes to Jail"
}

function romney(){
	return true
	return 3

}

///////////////////////////   write 10 functions with parameters


function area (height, width){
	return height * width
}

function noi (gross, vacancies, expenses){
	return gross - vacancies - expenses
}

function capRate (noi, value){
	return noi / value
}

function value (capRate, noi){
	return capRate / noi
}

function deal (gross, income){
	return gross * income
}

function business(metric, cost){
	return cost * metric
}

function profit(revenue, cost){
	return revenue -cost
}

function loss(revenue, cost){
	return cost - revenue
}

function calculator(loss, profit){
	return false
}

function capitan (red, blue){
	return true
}