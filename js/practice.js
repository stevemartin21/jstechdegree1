var checkbox = document.getElementsByTagName('input');
console.log(checkbox.length);

var check = document.getElementById('check');

console.log(check);
console.log(check.length);

for (i=0; i<check.length; i++){

	console.log(check[i]);
}

for (i=0; i<check.length; i++){
	check[i].style.display = 'none'
	console.log('Make Blue')
}
 
var myButton11= document.getElementById('myButton11');

myButton11.addEventListener('click', function(){

	for (i=0; i<check.length; i++){
	check[i].style.display = 'block'
	console.log('Make Blue')
}

})


var first = document.querySelector(`[value="first"]`);
console.log(first);

var myButton = document.getElementById('myButton');
var select  = document.getElementById('selection');

myButton.addEventListener('click', function(){

	if(first.checked== true){
		select.style.display= 'none';
	}
	else{
		select.style.color ='blue';
	}
});

var second = document.querySelector(`[value="second"]`);

var myButton2 = document.querySelector('#myButton2');


myButton2.addEventListener('click', function(){

	if(second.checked== true ){
		select.style.background='black';
	}


});

var third = document.querySelector(`[value="third"]`);


var myButton3 = document.querySelector('#myButton3');

myButton3.addEventListener('click', function(){

	if(third.checked == true){
		first.style.display = 'none'
		console.log('Bobber')
		second.style.dispaly = 'none'
		console.log('dobber')
	}
	else{
		console.log('You lose again')
	}

});

var fourth = document.querySelector(`[value="fourth"]`);

var myButton4 = document.querySelector('#myButton4');

myButton4.addEventListener('click', function(){
		if(fourth.checked ==true){

			myButton.style.display='none'
		}


});

var fifth = document.querySelector(`[value="fifth"]`);

var myButton5 = document.querySelector('#myButton5');
myButton5.addEventListener('click', function(){
	if(fifth.checked = true){
		third.style.display = 'none';
	}


})


var frameworks = document.querySelector(`[name="js-frameworks"]`);

var bob = document.querySelectorAll('select option')[1];
var ned = document.querySelectorAll('select option')[2];
var ted = document.querySelectorAll('select option')[3];

var option = document.querySelectorAll('select')[0];


/*option.addEventListener('change', function(){

	if(ted.selected== true ){
		myButton5.style.background ='green';
		console.log('ted')
	}
	else if (ned.selected== true ){
		myButton4.style.background ='green';
		myButton5.style.background ='';
		myButton.style.background ='';
	}
	else {
		myButton.style.background ='red';
	}

});

*/

var sixth = document.querySelector(`[value="sixth"]`);
console.log(sixth);

var myButton6 = document.getElementById('myButton6');

myButton6.addEventListener('click', function(){

	if(sixth.checked == true ){
		myButton2.style.background='purple'
	}


});

var seventh = document.querySelector(`[value="seventh"]`);

 var myButton7 = document.getElementById('myButton7');

myButton7.addEventListener('click', function(){
	if(seventh.checked == true){
		myButton6.style.background='lightblue'
	}
})

var eighth = document.querySelector(`[value="eighth"]`);

var myButton8 = document.getElementById('myButton8');

myButton8.addEventListener('click', function(){

	if(eighth.checked == true){
		check.style.background ='lightblue';
	}

});


var ninth = document.querySelector(`[value="ninth"]`);

var myButton9 = document.getElementById('myButton9');

myButton9.addEventListener('click', function(){


	if(ninth.checked == true ){

		check.style.background ='brown';
	}
	else{
		alert('wrong')
}

});

var tenth = document.querySelector(`[value="tenth"]`);

var myButton10 =  document.getElementById('myButton10');

myButton10.addEventListener('click', function(){

	if(tenth.checked== true ){
		check.style.background ='lavender';
	}

})



////// 2nd form 



var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var ten = document.getElementById('ten');

var buttonA = document.getElementById('myButtona');

buttonA.addEventListener('click', function(){

	if(one.checked == true  ){
		buttonB.style.display='none'
	}
})





var buttonB = document.getElementById('myButtonb');

buttonB.addEventListener('click', function(){

	if(two.checked == true  ){
		buttonA.style.background ='purple'
	}
})




var buttonC = document.getElementById('myButtonc');

buttonC.addEventListener('click', function(){

	if(three.checked == true ){
		buttonD.style.background ='red'
	}
})

var buttonD = document.getElementById('myButtond');

buttonD.addEventListener('click', function(){
	if(four.checked == true ){
		buttonE.style.background ='green'
	}

})

var buttonE = document.getElementById('myButtone');

buttonE.addEventListener('click', function(){

	if(five.checked == true ){
		buttonF.style.background ='purple'
	}

})



var buttonF = document.getElementById('myButtonf');

buttonF.addEventListener('click', function(){
	if(six.checked == true){
		buttonG.style.background = 'orange'
	}

})



var buttonG = document.getElementById('myButtong');

buttonG.addEventListener('click', function(){

	if(seven.checked == true ){
		buttonH.style.background ='blue'
	}

})



var buttonH = document.getElementById('myButtonh');

buttonH.addEventListener('click', function(){
	if(eight.checked == true){
		buttonI.style.background ='purple'
	}

})



var buttonI = document.getElementById('myButtoni');

buttonI.addEventListener('click', function(){

	if(nine.checked == true ){

		buttonJ.style.background ='red'
	}
})





var buttonj = document.getElementById('myButtonj');




buttonj.addEventListener('click', function(){

	if(ten.checked == true){
		buttona.style.background ='red'
	}
})


var animal = document.getElementById('animal');
var horse = document.getElementById('horse');
var cow = document.getElementById('cow');
var donkey = document.getElementById('donkey');
var cat = document.getElementById('cat');
var dog = document.getElementById('dog');
var eagle = document.getElementById('eagle');
var hawk = document.getElementById('hawk');
var fish = document.getElementById('fish');
var bear = document.getElementById('bear');
var moose = document.getElementById('moose');



var buttonl = document.getElementById('myButtonl');

buttonl.addEventListener('click', function(){
	if(horse.checked ===true){
	cow.style.display='none'
	}
});




var buttonm = document.getElementById('myButtonm');

buttonl.addEventListener('click', function(){
	if(cow.checked ===true){
	horse.style.display='none'
	}
});



var buttonn = document.getElementById('myButtonn');

buttonl.addEventListener('click', function(){
	if(donkey.checked ===true){
	moose.style.display='none'
	}
});


var buttono = document.getElementById('myButtono');

buttonl.addEventListener('click', function(){
	if(cat.checked ===true){
	cow.style.display='none'
	}
});

var buttonp = document.getElementById('myButtonp');

buttonl.addEventListener('click', function(){
	if(dog.checked ===true){
	cow.style.display='none'
	}
});

var buttonr = document.getElementById('myButtonr');

buttonl.addEventListener('click', function(){
	if(eagle.checked ===true){
	cow.style.display='none'
	}
});

var buttons = document.getElementById('myButtons');

buttonl.addEventListener('click', function(){
	if(hawk.checked ===true){
	cow.style.display='none'
	}
});

var buttont = document.getElementById('myButtont');

buttonl.addEventListener('click', function(){
	if(fish.checked ===true){
	cow.style.display='none'
	}
});

var buttonu = document.getElementById('myButtonu');

buttonl.addEventListener('click', function(){
	if(bear.checked ===true){
	cow.style.display='none'
	}
});

var buttonv = document.getElementById('myButtonv');

buttonl.addEventListener('click', function(){
	if(moose.checked ===true){
	cow.style.display='none'
	}
});

var buttonw = document.getElementById('myButtonw');

buttonl.addEventListener('click', function(){
	
animal.style.display='none'
	
});


var california = document.getElementById('california');
var oregon = document.getElementById('oregon');
var washington = document.getElementById('washington');
var idaho = document.getElementById('idaho');
var utah = document.getElementById('utah');
var arizona = document.getElementById('arizona');
var colorado = document.getElementById('colorado');
var wyoming = document.getElementById('wyoming');
var montana = document.getElementById('montana');
var us = document.getElementById('us');



var myButton1 = document.getElementById('myButton1');

myButton1.addEventListener('change', function(){
	california.style.color = 'blue';


})



var myButton2 = document.getElementById('myButton2');


myButton2.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});


var myButton3 = document.getElementById('myButton3');

myButton3.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});

var myButton4 = document.getElementById('myButton4');

myButton4.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});

var myButton5 = document.getElementById('myButton5');


myButton5.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});

var myButton6 = document.getElementById('myButton6');

myButton6.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});


var myButton7 = document.getElementById('myButton7');

myButton7.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});

var myButton8 = document.getElementById('myButton8');


myButton8.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});


var myButton9 = document.getElementById('myButton9');

myButton9.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});


var myButton10 = document.getElementById('myButton10');

myButton10.addEventListener('onKyeup', function(){
 if(oregon.checked === true ){
 	oregon.style.background = 'purple'
 }

});

var utes = document.getElementById('utes');
var byu = document.getElementById('byu');
var utahState = document.getElementById('utahState');
var weber = document.getElementById('weber');
var suu = document.getElementById('suu');
var dixie = document.getElementById('dixie');
var slcc = document.getElementById('slcc');
var uvu = document.getElementById('uvu');
var ceu = document.getElementById('ceu');
var snow = document.getElementById('snow');


var myButton1a = document.getElementById('myButton1a');

myButton1a.addEventListener('change', function(){
	byu.style.color = 'blue';


})



var myButton2a = document.getElementById('myButton2a');


myButton2a.addEventListener('onKyeup', function(){
 if(byu.checked === true ){
 	utes.style.background = 'purple'
 }

});


var myButton3a = document.getElementById('myButton3a');

myButton3a.addEventListener('onKyeup', function(){
 if(utes.checked === true ){
 	byu.style.background = 'purple'
 }

});

var myButton4a = document.getElementById('myButton4a');

myButton4a.addEventListener('onKyeup', function(){
 if(utes.checked === true ){
 	byu.style.background = 'purple'
 }

});

var myButton5a = document.getElementById('myButton5a');


myButton5a.addEventListener('onKyeup', function(){
 if(byu.checked === true ){
 	utes.style.background = 'purple'
 }

});

var myButton6a = document.getElementById('myButton6a');

myButton6a.addEventListener('onKyeup', function(){
 if(suu.checked === true ){
 	byu.style.background = 'purple'
 }

});


var myButton7a = document.getElementById('myButton7a');

myButton7a.addEventListener('onKyeup', function(){
 if(dixie.checked === true ){
 	suu.style.background = 'purple'
 }

});

var myButton8a = document.getElementById('myButton8a');


myButton8a.addEventListener('onKyeup', function(){
 if(utes.checked === true ){
 	ceu.style.background = 'purple'
 }

});


var myButton9a = document.getElementById('myButton9a');

myButton9a.addEventListener('onKyeup', function(){
 if(byu.checked === true ){
 	utes.style.background = 'purple'
 }

});


var myButton10a = document.getElementById('myButton10a');

myButton10.addEventListener('onKyeup', function(){
 if(utes.checked === true ){
 	myButton8a.style.background = 'purple'
 }

});

////  Write 25 Arrays Regular

var array1 = [1,2,3,4,5];

var array2 = ['blue', 'green', 'red', 'white'];

var array3 = ['one', 'two', 'three', 'four'];

var array4 = ['utah' ,'Idaho', 'Colorado', 'Nevada'];

var array5 = [true, false];

var array6 = ['Republican', 'Democrat', 'Independent'];

var array7 = ['radio', 'tv', 'internet'];

var array8 = [11,12,13,14];

var array9 = [15,16,17,18];

var array10 = ['Monday', 'Tuesday', "wednesday", 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var array11 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var array12 = [21,22,23,24];

var array13 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

var array14 = ['Basketball', 'Football', 'Soccer'];

var array15 = ['Brazil', 'Argentina', 'Peru'];

var array16 = ['Air Force', 'Navy', 'Army'];

var array17 = ['hiking', 'biking', 'backpacking'];

var array18 = ['Salt Lake City', 'Provo', 'Orem'];

var array19 = ['Utah', 'Salt Lake', 'Davis', 'Weber'];

var array20 = ['Utah Jazz', 'Real Salt lake', 'Utah Blaze'];

var array21 = [31,32,34,35,36];

var array22 = ['north','south', 'east','west'];

var array23 = ['historic churches', 'ghost towns', 'old west'];

var array24 = ['Wasatch', 'Uinta', 'Tushar','Wellsville'];

var array25 = ['Bear','Provo','Duchesne','Weber'];

///Loop Through 25 Arrays , push , pop etc... array functions , join, merge etc...

for (i=0; i<array1.length; i++){
	console.log(array1[i])
}

for (i=0; i<array12.length; i++){
	console.log(array2[i])
}

for (i=0; i<array3.length; i++){
	console.log(array3[i])
}

for (i=0; i<array4.length; i++){
	console.log(array4[i])
}

for (i=0; i<array5.length; i++){
	console.log(array5[i])
}

for (i=0; i<array6.length; i++){
	console.log(array6[i])
}

for (i=0; i<array7.length; i++){
	console.log(array7[i])
}

for (i=0; i<array8.length; i++){
	console.log(array8[i])
}

for (i=0; i<array9.length; i++){
	console.log(array9[i])
}

for (i=0; i<array10.length; i++){
	console.log(array10[i])
}

for (i=0; i<array11.length; i++){
	console.log(array1[i])
}

for (i=0; i<array12.length; i++){
	console.log(array1[i])
}

for (i=0; i<array13.length; i++){
	console.log(array1[i])
}

for (i=0; i<array14.length; i++){
	console.log(array14[i])
}

for (i=0; i<array15.length; i++){
	console.log(array15[i])
}

for (i=0; i<array16.length; i++){
	console.log(array16[i])
}

for (i=0; i<array17.length; i++){
	console.log(array17[i])
}

for (i=0; i<array18.length; i++){
	console.log(array18[i])
}

for (i=0; i<array19.length; i++){
	console.log(array19[i])
}

for (i=0; i<array20.length; i++){
	console.log(array20[i])
}

for (i=0; i<array21.length; i++){
	console.log(array21[i])
}

for (i=0; i<array22.length; i++){
	console.log(array22[i])
}

for (i=0; i<array23.length; i++){
	console.log(array23[i])
}

for (i=0; i<array24.length; i++){
	console.log(array24[i])
}

for (i=0; i<array25.length; i++){
	console.log(array25[i])
}

/// Array Methods 5 of each  toString(), join(), push(), pop(), shift(), unshift() ,splice(), concat()

// to String 

console.log(array2.toString(' '));

console.log(array3.toString());

console.log(array4.toString());

console.log(array6.toString());

console.log(array7.toString());

//Join 

console.log(array2.join('  '));

console.log(array3.join(' - '));

console.log(array4.join(' + '));

console.log(array6.join(' / '));

console.log(array7.join(' * '));

//Push --adds to arry and last item of array 

console.log(array2.push('black'));
console.log(array2);

console.log(array3.push('six'));
console.log(array3);

console.log(array4.push('oregon'));
console.log(array4);

console.log(array6.push('green'));
console.log(array6);

console.log(array7.push('Social Media'));
console.log(array7);

// Pop()  --removes last item 

console.log(array2.pop());
console.log(array2);

console.log(array3.pop());
console.log(array3);

console.log(array4.pop());
console.log(array4);

console.log(array6.pop());
console.log(array6);

console.log(array7.pop());
console.log(array7);

//unshift adds an item to the first part of the array 

console.log(array2.unshift('black'));
console.log(array2);

console.log(array3.unshift('six'));
console.log(array3);

console.log(array4.unshift('oregon'));
console.log(array4);

console.log(array6.unshift('green'));
console.log(array6);

console.log(array7.unshift('Social Media'));
console.log(array7);

//Shift removes the last item fro the arry 

console.log(array2.shift());
console.log(array2);

console.log(array3.shift());
console.log(array3);

console.log(array4.shift());
console.log(array4);

console.log(array6.shift());
console.log(array6);

console.log(array7.shift());
console.log(array7);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Splice, conCat, Slice, slice to add people and slice to remove people

// Splice and ConCat fruits.splice(2, 0, "Lemon", "Kiwi");  
//var myGirls = ["Cecilie", "Lone"];
//var myBoys = ["Emil", "Tobias", "Linus"];
//var myChildren = myGirls.concat(myBoys); 
/*

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);




*/

array2.splice(2,0,"purple", 'black')
console.log(array2);

array3.splice(1,0,"seven", 'eight')
console.log(array3);

array4.splice(2,0,"Florida", 'Michigan')
console.log(array4);

array6.splice(2,0,"Communist", 'Socialist')
console.log(array6);

array7.splice(2,0,"Print", 'Magazine')
console.log(array7);


//  Concat   

// Splice and ConCat fruits.splice(2, 0, "Lemon", "Kiwi");  
//var myGirls = ["Cecilie", "Lone"];
//var myBoys = ["Emil", "Tobias", "Linus"];
//var myChildren = myGirls.concat(myBoys);


var newArray1  = array1.concat(array2);
console.log(newArray1)

var newArray2  = array2.concat(array3);
console.log(newArray2)

var newArray3  = array3.concat(array4);
console.log(newArray3)

var newArray4  = array4.concat(array5);
console.log(newArray4)

var newArray5  = array5.concat(array6);
console.log(newArray5)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// After this I need to practice sorting arrays 


//  array.sort(compareFunction)  

/*
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});


*/




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Loop Through Object    ------------------Practice   Pracetice 

///////////////  Write 25 objects 


var object1 = {

	username: 'bigBob',
	password: '123bingo',
	status: 'active',
	customerType: 'paid'
}

var object2 = {

	username: 'bigTed',
	password: '123red',
	status: 'inactive',
	customerType: 'free'
}

var object3 = {

	username: 'bigTed',
	password: '123Macron',
	status: 'active',
	customerType: 'trial'
}

var object4 = {

	username: 'nedder',
	password: 'worldwide',
	status: 'suspended',
	customerType: 'paid'
}

var object5 = {

	username: 'password',
	password: '123dingo',
	status: 'active',
	customerType: 'inpaid'
}

var object6 = {

	username: 'australia',
	password: 'dingomate',
	status: 'active',
	customerType: 'paid'
}

var object7 = {

	username: 'dingodingo',
	password: '123blackjack',
	status: 'active',
	customerType: 'paid'
}

var object8 = {

	username: 'Ted',
	password: 'bigTeddy',
	status: 'active',
	customerType: 'paid'
}

var object9 = {

	username: 'utah',
	password: '123bingoutah',
	status: 'active',
	customerType: 'paid'
}

var object10 = {

	username: 'texas',
	password: '123texas',
	status: 'active',
	customerType: 'paid'
}

//Player Objects 


var object11 = {

	name: 'Donavan Mitchell',
	jersey: 45,
	position: 'Shooting Guard',
	team: 'Utah jazz'
}

var object12 = {

	name: 'Rudy Gobert',
	jersey: 27,
	position: 'Center',
	team: 'Utah jazz'
}

var object13 = {

	name: 'Derrick Favors',
	jersey: 15,
	position: 'Shooting Guard',
	team: 'Utah jazz'
}

var object14 = {

	name: 'Dante Exum',
	jersey: 11,
	position: 'Point Guard',
	team: 'Utah jazz'
}

var object15 = {

	name: 'Jae Crowder',
	jersey: 99,
	position: 'Forward',
	team: 'Utah jazz'
}

var object16 = {

	name: 'Joe Ingles',
	jersey: 2,
	position: 'Shooting Guard',
	team: 'Utah jazz'
}

var object17 = {

	name: 'Royce Oniel',
	jersey: 23,
	position: 'Shooting Guard',
	team: 'Utah jazz'
}

var object18 = {

	name: 'Donavan Mitchell',
	jersey: 45,
	position: 'Shooting Guard',
	team: 'Utah jazz'
}

var object19 = {

	name: 'Ricky Rubio',
	jersey: 3,
	position: 'Point Guard',
	team: 'Utah jazz'
}

var object20 = {

	name: 'Raul Neto',
	jersey: 25,
	position: 'Point Guard',
	team: 'Utah jazz'
}

var object21 = {

	name: 'Tony Bradley',
	jersey: 13,
	position: 'Forward',
	team: 'Utah jazz'
}

var object22 = {

	name: 'Jonas Jarebko',
	jersey: 8,
	position: 'Forward',
	team: 'Utah jazz'
}

var object23 = {

	name: 'Eric McCree',
	jersey: 21,
	position: 'Forward',
	team: 'Utah jazz'
}

var object24 = {

	name: 'Thabo Sepholoshia',
	jersey: 22,
	position: 'Forward',
	team: 'Utah jazz'
}

var object25 = {

	name: 'Alec Burks',
	jersey: 10,
	position: 'Guard',
	team: 'Utah jazz'
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Access items in object 25 times

console.log(object1.username);

console.log(object2.password);

console.log(object3.status);

console.log(object4.customerType);

console.log(object7.username);

console.log(object8.status);

console.log(object9.password);

console.log(object10.status);

console.log(object11.name);

console.log(object12.team);

console.log(object13.jersey);

console.log(object14.name);

console.log(object15.team);

console.log(object16.position);

console.log(object17.team);

console.log(object18.position);

console.log(object19.name);

console.log(object20.position);

console.log(object21.jersey);

console.log(object22.position);

console.log(object23.name);

console.log(object24.team);

console.log(object25.position);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x] + " ";
}


*/


var text1 = "";
var a;

for (a in object1){
	console.log(text1 += object1[a]  + " ");
}

for (a in object2){
	console.log(text1 += object2[a]  + " ");
}

for (a in object3){
	console.log(text1 += object3[a]  + " ");
}

for (a in object4){
	console.log(text1 += object4[a]  + " ");
}

for (a in object5){
	console.log(text1 += object5[a]  + " ");
}

for (a in object6){
	console.log(text1 += object5[a]  + " ");
}

for (a in object7){
	console.log(text1 += object7[a]  + " ");
}

for (a in object8){
	console.log(text1 += object8[a]  + " ");
}

for (a in object9){
	console.log(text1 += object9[a]  + " ");
}

for (a in object10){
	console.log(text1 += object10[a]  + " ");
}

for (a in object11){
	console.log(text1 += object11[a]  + " ");
}

for (a in object12){
	console.log(text1 += object12[a]  + " ");
}

for (a in object13){
	console.log(text1 += object13[a]  + " ");
}

for (a in object14){
	console.log(text1 += object14[a]  + " ");
}

for (a in object15){
	console.log(text1 += object15[a]  + " ");
}

for (a in object16){
	console.log(text1 += object16[a]  + " ");
}

for (a in object17){
	console.log(text1 += object17[a]  + " ");
}

for (a in object18){
	console.log(text1 += object18[a]  + " ");
}

for (a in object19){
	console.log(text1 += object19[a]  + " ");
}

for (a in object20){
	console.log(text1 += object20[a]  + " ");
}

for (a in object21){
	console.log(text1 += object21[a]  + " ");
}

for (a in object22){
	console.log(text1 += object22[a]  + " ");
}

for (a in object23){
	console.log(text1 += object23[a]  + " ");
}

for (a in object24){
	console.log(text1 += object24[a]  + " ");
}

for (a in object25){
	console.log(text1 += object25[a]  + " ");
}








/////////////////////////////////////////////////////////////////////////////////

// Add a properties to an object 

/*

<p>You can add new properties to existing objects.</p>

<p id="demo"></p>

<script>
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
person.nationality = "English";
document.getElementById("demo").innerHTML =
person.firstname + " is " + person.nationality + ".";
</script>


*/

/// Add 5 items to objects 

object1.points = 25;


console.log(object1);

// I did the rest in the console  

////////////////////////////////////////////////////////////////////////////////////////

//Create 5 h1 elements and append to dom 


// set variable to grab the div with start id 
const start = document.getElementById('start');


//  Dynamically created H1 element and named the variable 
const h11 = document.createElement('h1');

// chagned the h1 element to have the innerHTML of the string 
h11.innerHTML= 'Dynamically Created h1 element';

// Added the newley created h1 element to the dom

start.appendChild(h11);

///

const h12 = document.createElement('h1');

// chagned the h1 element to have the innerHTML of the string 
h12.innerHTML= 'Dynamically Created h1 element ' + 12 + ' This is a great deal';

// Added the newley created h1 element to the dom

start.appendChild(h12);


//

const h13 = document.createElement('h1');

// chagned the h1 element to have the innerHTML of the string 
h13.textContent= 'Dynamically Created h1 element ' + 12 + ' This is a great deal' + ' Well Played Player';

// Added the newley created h1 element to the dom

start.appendChild(h13);


//

const h14 = document.createElement('h1');

// chagned the h1 element to have the innerHTML of the string 
h14.textContent= 'Dynamically Created h1 element ' + 12 + ' This is a great deal' + ' Well Played Player' + ' You are a chamption sir' ;

// Added the newley created h1 element to the dom

start.appendChild(h14);


//

const h15 = document.createElement('h1');

// chagned the h1 element to have the innerHTML of the string 
h15.innerHTML= 'Dynamically Created h1 element ' + 12 + ' This is a great deal' + ' Well Played Player' + ' You are a chamption sir' + '<input type="text">' ;

// Added the newley created h1 element to the dom

start.appendChild(h15);


/////////////////////////////////////////////////////////////////////////////////////////



//Dynanmically Create 5 p elements and attach to DOM


const p1 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p1.innerHTML= 'This is the innerHTML of the p element I created ' + ' <input type="submit" value="Submit" >' + '<h1>This is a headline </h1>'  ;

// Added the newley created h1 element to the dom

start.appendChild(p1);

//

const p2 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p2.innerHTML= '<input type="checkbox">'  + "<h1>This is a headline</h1>"  + '<div>This is a div</div>'  ;

// Added the newley created h1 element to the dom

start.appendChild(p2);


//  

const p3 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p3.innerHTML= '<input type="radio">'  + "<h3>This is a headline</h3>"  + '<div>This is a div da div</div>'  ;

// Added the newley created h1 element to the dom

start.appendChild(p3);


//  

const p4 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p4.innerHTML= '<input type="radio">'  + "<h3>This is a headline</h3>"  + '<div>This is a div da div</div>' + '<select><option></option><option>Bob</option><option>Ted</option><option>Ned</option></select>' ;

// Added the newley created h1 element to the dom

start.appendChild(p4);

//  

const p5 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p5.innerHTML= '<label for="first">First</label>' + '<input type="checkbox" id="first">' + '<input type="radio">'  + "<h3>This is a headline</h3>"  + '<div>This is a div da div</div>' + '<select><option></option><option>Bob</option><option>Ted</option><option>Ned</option></select>' ;

// Added the newley created h1 element to the dom

start.appendChild(p5);

//  

const p6 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p6.innerHTML= '<label for="first">First</label>' + '<input type="checkbox" id="first">' +   '<label for="second">Second</label>' + '<input type="checkbox" id="second">'    + '<label for="third">Third</label>' + '<input type="checkbox" id="third">' +   '<input type="radio">'  + "<h3>This is a headline</h3>"  + '<div>This is a div da div</div>' + '<select><option></option><option>Bob</option><option>Ted</option><option>Ned</option></select>' ;

// Added the newley created h1 element to the dom

start.appendChild(p6);

//  

const p7 = document.createElement('p');

// chagned the h1 element to have the innerHTML of the string 
p7.innerHTML= '<input type="radio">'  + "<h3>This is a headline</h3>"  + '<div>This is a div da div</div>' + array1[0] + ' ' + object1.username ;

// Added the newley created h1 element to the dom

start.appendChild(p7);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Add 5 array & object property values  to the created elements 

const div1 = document.createElement('div');
start.appendChild(div1);

// For Loop 


			for (i=0; i<array1.length; i++ ){
				div1.innerHTML += array1[i] + ' This is the results of an array' + '<br>' ;
			}
			

		
const div2 = document.createElement('div');
start.appendChild(div2);

// For Loop 


			for (i=0; i<array2.length; i++ ){
				div2.innerHTML += ' ' + array2[i] + ' This is the results of an array' + '<br>';
			}
			

const div3 = document.createElement('div');
start.appendChild(div3);

// For Loop 


			for (i=0; i<array3.length; i++ ){
				div3.innerHTML += ' ' + array3[i] + ' This is the results of an array' + '<br>' ;
			}
			

const div4 = document.createElement('div');
start.appendChild(div4);

// For Loop 


			for (i=0; i<array4.length; i++ ){
				div4.innerHTML += ' ' + array4[i] + ' This is the results of an array' + '<input type="submit" value="Cool">' + '<br>' ;
			}
			

const div5 = document.createElement('div');
start.appendChild(div5);

// For Loop 


			for (i=0; i<array5.length; i++ ){
				div5.innerHTML += ' ' + array5[i] + ' This is the results of an array' + '<input type="submit" value="Awesome">' + '<br>' ;
			}
			
//   Grab one value from the array 

const div6 = document.createElement('div');
start.appendChild(div6);

// For Loop 


			
				div6.innerHTML = array1[2] + ' This is the results of an array' + '<label for="bob">Bob</label>'+ '<input type="checkbox" id="bob">';
			
		
const div7 = document.createElement('div');
start.appendChild(div7);

// For Loop 


			
				div7.innerHTML = array2[0] + ' This is the results of an array' + '<label for="larry">Larry</label>'+ '<input type="checkbox" id="larry">';
			
		

		
const div8 = document.createElement('div');
start.appendChild(div8);

// For Loop 


			
				div8.innerHTML += array3[1] + ' This is the results of an array' + '<label for="ned">Ned</label>'+ '<input type="radio" id="ned">';
			
		

const div9 = document.createElement('div');
start.appendChild(div9);

// For Loop 


			
				div9.innerHTML += array5[1] + ' This is the results of an array' + '<label for="ned">Ned</label>'+ '<input type="radio" id="ned">' +
				 '<select><option>Ned</option><option>bob</option><option>Larry</option></select>';
			
const div10 = document.createElement('div');
start.appendChild(div10);

// For Loop 


			
				div10.innerHTML += array4[2] + ' This is the results of an array' + '<label for="ned">Ned</label>'+ '<input type="radio" id="ned">' +
				 '<select><option>Ned</option><option>bob</option><option>Larry</option></select>';
					
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Access individual properties from object and add to dom 

const div11 = document.createElement('div');
start.appendChild(div11);

// For Loop 


			
				div11.innerHTML += object1.username + ' is the username' + '<br>';
				div11.innerHTML += object1.password + ' is the password' + '<br>';
				div11.innerHTML += object1.status + ' is the status' + '<br>';
				div11.innerHTML += object1.customerType + ' is the customerType' + '<br>';
				'<br>'


const div12 = document.createElement('div');
start.appendChild(div12);

// For Loop 


			
				div12.innerHTML += object2.username + ' is the username' + '<br>';
				div12.innerHTML += object2.password + ' is the password' + '<br>';
				div12.innerHTML += object2.status + ' is the status' + '<br>';
				div12.innerHTML += object2.customerType + ' is the customerType' + '<br>';


const div13 = document.createElement('div');
start.appendChild(div13);

// For Loop 


			
				div13.innerHTML += object3.username + ' is the username' + '<br>';
				div13.innerHTML += object3.password + ' is the password' + '<br>';
				div13.innerHTML += object3.status + ' is the status' + '<br>';
				div13.innerHTML += object3.customerType + ' is the customerType' + '<br>';




const div14 = document.createElement('div');
start.appendChild(div14);

// For Loop 


			
				div14.innerHTML += object4.username + ' is the username' + '<br>';
				div14.innerHTML += object4.password + ' is the password' + '<br>';
				div14.innerHTML += object4.status + ' is the status' + '<br>';
				div14.innerHTML += object4.customerType + ' is the customerType' + '<br>';


const div15 = document.createElement('div');
start.appendChild(div15);

// For Loop 


			
				div15.innerHTML += object5.username + ' is the username' + '<br>';
				div15.innerHTML += object5.password + ' is the password' + '<br>';
				div15.innerHTML += object5.status + ' is the status' + '<br>';
				div15.innerHTML += object5.customerType + ' is the customerType' + '<br>';


//Add 5 loped through objects to the string

/*

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x] + " ";
}




*/
const div16 = document.createElement('div');
start.appendChild(div16);


var text1 = "";
var a;

for (a in object1){
	div16.innerHTML = text1 += object1[a]  + " " + 'This is a loop' + '<br>';
}
	

const div17 = document.createElement('div');
start.appendChild(div17);


var text2 = "";
var a;

for (a in object2){
	div17.innerHTML = text2 += object2[a]  + " " + 'This is a loop2' + '<br>';
}

const div18 = document.createElement('div');
start.appendChild(div18);


var text3 = "";
var a;

for (a in object3){
	div18.innerHTML = text3 += object3[a]  + " " + 'This is a loop3' + '<br>';
}



const div19 = document.createElement('div');
start.appendChild(div19);


var text4 = "";
var a;

for (a in object4){
	div19.innerHTML = text4 += object4[a]  + " " + 'This is a loop4' + '<br>';
}


const div20 = document.createElement('div');
start.appendChild(div20);


var text5 = "";
var a;

for (a in object5){
	div19.innerHTML = text4 += object5[a]  + " " + 'This is a loop5' + '<br>';
}
	


// Create more elements ul, li, div, input form, checkbox, radio, select / options, 10 checkbox, table etc... 5 of each and attach to DOM

//Dynamically create a form elemnent with a full form 


var ul1 = document.createElement('ul');
start.appendChild(ul1);
var li1 = document.createElement('li');
li1.innerHTML='First List Item '
ul1.appendChild(li1);

var ul2 = document.createElement('ul');
start.appendChild(ul2);
var li2 = document.createElement('li');
li2.innerHTML='Second List Item '
var li3 = document.createElement('li');
li3.innerHTML='third List Item '

ul2.appendChild(li2);
ul2.appendChild(li3);

var ul3 = document.createElement('ul');
start.appendChild(ul3);
var li4 = document.createElement('li');
li4.innerHTML='New List Item '
var li5 = document.createElement('li');
li5.innerHTML='fifth list item '
var li6 = document.createElement('li');
li6.innerHTML='six list item '

ul3.appendChild(li4);
ul3.appendChild(li5);
ul3.appendChild(li6);

var ul4 = document.createElement('ul');
start.appendChild(ul4);
var li7 = document.createElement('li');
li7.innerHTML='This is amazing '
var li8 = document.createElement('li');
li8.innerHTML='Well done son '
var li9 = document.createElement('li');
li9.innerHTML='Fun func this is so fun '

ul4.appendChild(li7);
ul4.appendChild(li8);
ul4.appendChild(li9);


var ul5 = document.createElement('ul');
start.appendChild(ul5);
var li10 = document.createElement('li');
li10.innerHTML='This the last li element to add '
var li11 = document.createElement('li');
li11.innerHTML=' This is the last one one '
var li12 = document.createElement('li');
li12.innerHTML='The one more and one more'

ul5.appendChild(li10);
ul5.appendChild(li11);
ul5.appendChild(li12);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Create a dynamic form with input text fields, submit, checkboes, radio, select, option, table etc.

const form = document.createElement('form');

start.appendChild(form);

const formH1 = document.createElement('h1');
formH1.innerHTML = 'This is the Form Title';
form.appendChild(formH1);


const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'fill me out';
form.appendChild(input);

const input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'fill me out yo fool';
form.appendChild(input2);

const input3 = document.createElement('input');
input3.type = 'text';
input3.placeholder = 'fill me out yo fool 4';
form.appendChild(input3);

const input4 = document.createElement('input');
input4.type = 'text';
input4.placeholder = 'fill me out yo fool 4--yo fool';
form.appendChild(input4);

const input5 = document.createElement('input');
input5.type = 'text';
input5.placeholder = 'fill me out yo fool 4-- yo yo yo ';
form.appendChild(input5);

const labelX = document.createElement('label');
labelX.innerHTML = 'dynamic';
labelX.setAttribute("for",'dynamic');
start.appendChild(labelX)

const checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
checkbox2.id = 'dynamic';
form.appendChild(checkbox2);

const labelY = document.createElement('label');
labelY.innerHTML = 'dynamicY';
labelY.setAttribute("for",'dynamicY');
start.appendChild(labelY)

const checkbox3 = document.createElement('input');
checkbox3.type = 'radio';
checkbox3.id = 'dynamicY';
form.appendChild(checkbox3);

const select2 = document.createElement('select');
select2.value = 'Select'
form.appendChild(select2);

var arrayCar = ["Volvo","Saab","Mercades","Audi"];

//Create and append the options
for (var i = 0; i < arrayCar.length; i++) {
    var optionCar = document.createElement("option");
    optionCar.value = arrayCar[i];
    optionCar.text = arrayCar[i];
    select2.appendChild(optionCar)
}

const table = document.createElement('table');
form.appendChild(table);
const tr = document.createElement('tr');
tr.innerHTML = 'This is a row'
table.appendChild(tr);
const td = document.createElement('td');
td.innerHTML = 'This is table data'
tr.appendChild(td);






const submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Press Me for Fun';
form.appendChild(submit);






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create an input that will take input from user and add to a list---to do list


const toDo = document.createElement('h1');
toDo.innerHTML = 'This is the To Do App'
start.appendChild(toDo);

const inputTo = document.createElement('input')
inputTo.placeholder = 'To do App'
start.appendChild(inputTo);

const submitTo = document.createElement('button');
submitTo.type  = "submit";
submitTo.innerHTML = 'submit';
start.appendChild(submitTo);

// Add event listner 

submitTo.addEventListener('click', function(){

		let text=  inputTo.value;
		const newDiv = document.createElement('div');
		newDiv.textContent = text;
		start.appendChild(newDiv);
		let newB = document.createElement('button');
		newB.textContent= 'Edit';
		newDiv.appendChild(newB);
		let newB2 = document.createElement('button');
		newB2.textContent= 'Delete';
		newDiv.appendChild(newB2);
		text = '';
		newB2.addEventListener('click', function(e){
			start.removeChild(newDiv);
			console.log('Success');
		})
		newB.addEventListener('click', function(e){
			let newDiv2 = document.createElement('div');
			newDiv2.textContent = newDiv.textContent;
			newDiv.appendChild(newDiv2);


		})

});

// I still need to figure out the edt button etc... I will probably watch the video again


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Write Object // Loop Over object and display on docuemnt

const object26 = {
	name: 'Donavan Mitchell',
	position: 'Shooting Guard',
	status: 'Amazing',
	year:'Rookie'
};
var player = '';
var x;

for (x in object26){
	player += object26[x] + '<br>';
}

let newDiv3 = document.createElement('div');
newDiv3.innerHTML = player;
start.appendChild(newDiv3);

const array26 = [12,13,14,15, 17, 'bob', 'darren', true, 

{
	name: 'David',
	position: 'fullback',
	team: 'Utah Jazz'
}];

var scores = '' 

for (i=0; i<array26.length; i++){
	scores += array26[i] + '<br>';
}

let newDiv4 = document.createElement('div');
newDiv4.innerHTML = scores;
start.appendChild(newDiv4);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// Object Constructor 



function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);


var myBrother = new Person('David', 'Martin', 30, 'Green');
console.log(myBrother);

	

var player1 = '';
var x;

for (x in myBrother){
	player1 += myBrother[x] + '<br>';
}

let newDiv5 = document.createElement('div');
newDiv5.innerHTML = player1;
start.appendChild(newDiv5);


var myBrother2 =  new Person('Jon', 'Martin', 40, 'Good Guy');

var player2 = '';
var x;

for (x in myBrother2){
	player2 += myBrother2[x] + '<br>';
}

let newDiv6 = document.createElement('div');
newDiv6.innerHTML = player2;
start.appendChild(newDiv6);

var myBrother3 = new Person('Steve', 'Martin', 43, 'Player')

var player3 = '';
var x;

for (x in myBrother3){
	player3 += myBrother3[x] + '<br>';
}

let newDiv7 = document.createElement('div');
newDiv7.innerHTML = player3;
start.appendChild(newDiv7);

var myBrother4 = new Person('Joe', 'Martin', 32, 'Good Guy');

console.log(myBrother4);

var myBrother5 = new Person('Doug', 'McDoug', 15, true);

console.log(myBrother5)


////////////////////////////////////////////////////////////////////////////////////////////////////////

//Create a new Class 


function PlayerBB(first, last, position1, team1, points1) {
    this.firstName = first;
    this.lastName = last;
    this.position = position1;
    this.team = team1;
    this.points = points1;
}


var player7 = new PlayerBB('Donavan', 'Mitchell', "shooting guard", 'Utah Jazz', 500);

console.log(player7);


var player8 = new PlayerBB ('Derrick', 'Favors', 'Power Forward', 'Utah jazz', 1000);

console.log(player8);


var player9 = new PlayerBB ('Rudy', "Gobert", 'Center', 'Utah Jazz', 1500);

console.log(player9);

var player10 = new PlayerBB ('Ricky', 'Rubio', 'Point Guard', 'Utah Jazz', 400);

console.log(player10);

var player11 = new PlayerBB ('Jerry ', 'Sloan', 'Coach', 'Utah Jazz', 500);
///////////////////////////////////////////////////////////////////////////////////////////

//Object Prototype constructor 

PlayerBB.prototype.nationality= 'English';
console.log(PlayerBB);
console.log(player11);

// Write  methods fullName	function() {return this.firstName + " " + this.lastName;} for the newPlayerBB


var object27 = {
	name: 'bob',
	title:'player',
	team: 'Utah Jazz',
	points: 45,
	winning: true,
	fullName: function() {return this.name + " " + this.title;},
	titleName: function() {return this.title + " " + this.name;},
	fullPerson: function() {return this.title + " " + this.name + " " + this.team;},
	fullStats: function() {return this.title + " " + this.name + " " + this.team + ' ' + this.points;},
	fullStatus: function() {return this.title + " " + this.name + " " + this.team + ' ' + this.points+ ' ' + this.winning;},

}

console.log(object27.fullName());
console.log(object27.titleName());
console.log(object27.fullPerson());
console.log(object27.fullStats());
console.log(object27.fullStatus());
/*

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";



*/


/////////////////////////////////////////////////////////////   ////////////////////////////


// Create functions with parameters Multiple parameters ---I need to test this over and over again--these would be template functions 

function my(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
var xyz = my(2,3);
console.log(xyz);

function bobber(p3,p4){
	return p3 + p4
}
var zzz = bobber(2,3);
console.log(zzz);

function area(length, width){

	return length * width
}

console.log(area(4,5));

function noi (gross, lostRents, expenses){

	return gross - lostRents - expenses
}

console.log(noi(4000,2000,400));

/////////////////////////////////////////////////////////////////////////////////////////

function capRate(noi, value){

	return noi / value
}

console.log(capRate(100000,1000000));

console.log(capRate(400000,10000000));

function value (capRate, noi){
	return noi / capRate
}

console.log(value(.1, 10000))

console.log(value(.2, 100000))



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write 10 functions with parameters

function volume(length, width, height){

	return length * width * height
}

console.log(volume(4,3,8));

function pointAveraga(totalPoints, totalGames){

	return totalPoints / totalGames
}

console.log(pointAveraga(100,10));

console.log(pointAveraga(200,7));

function debtIncomeRatio(totalDebt, noi){
	return totalDebt / noi
}

console.log(debtIncomeRatio(1000000, 10000));

function grossRentMultiplier(grossRents, value){

	return value / grossRents
}
console.log(grossRentMultiplier(10000,400000000));

function totalPages (studentList, perPage){

	return studentList / perPage
}

console.log(totalPages(100,4));

function goodScorer(points, games){

	var scorer = pointAveraga(0, 6);

	if(scorer >= 15){
		console.log('You are a good scorer')
	}else if(scorer <= 1){
		return points * games

	}else{
		console.log('You are not a good scorer')
	}

}

console.log(goodScorer(100,10));

function playoffTeam(wins, losses){

	if(wins - losses >= 10){
		console.log('This is a playoff team')
	}else{
		console.log('This is not a playoff team')
	}

}

console.log(playoffTeam(40,35));

function allStar(points, rebounds, wins, losses){

	if(points> 10 && rebounds > 5 && (wins - losses)>5 ){
		return console.log('You are an all star')
	}else{
		return console.log('You are not an all star')
	}

}

console.log(allStar(11,6,10,2));

console.log(allStar(10,5,10,7));



function coachOfyear(wins, losses, winsLast20,lossesLast20){

	if(wins>losses && (winsLast20 - lossesLast20)>10){
		console.log('You sir are coach of the year')
	}else{
		console.log('Better luck next time')
	}


}

console.log(coachOfyear(40,20,30,10));



function obtainKingdom(convenants, be, doIt, totalActs){

	if(convenants== true && be=='Christ' && doIt ==true && totalActs >=100 ){
		console.log('Welcome to the Kingdom')
	}else{
		console.log('Sorry keep trying')
	}

}

console.log(obtainKingdom(true,'Christ',true, 110));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Write an object and print to console and loop through it

var object28={
	mountains: 'Uinta',
	peak: 'Hayden',
	rivers: "bear",
	state: 'Utah'
}

console.log(object28)

var ty;
var uintas= '';

for (ty in object28){
	uintas += object28[ty] + ' '
}
console.log(uintas);

var object29 = {
	mountains: 'Wasatch',
	peak: 'Loan',
	rivers: "Jordan",
	state: 'Utah'
}

var xy;
var wasatch= '';

for (xy in object29){
	wasatch += object29[xy] + ' '
}
console.log(object29)
console.log(wasatch);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a conditional with 10 else if statements


var byu;


function coach(wins){


		if (wins>9){
			console.log('Coach deserves a raise')
		}else if(wins<9 && wins>7){
			console.log('Coach did ok')
		}else if(wins<7 && wins>=5){
			console.log('Not happy, but on the right track')
		}else if(wins<5 && wins>3){
			console.log('Fire Coach ')
		}else if(wins<3 && wins>1){
			console.log('Bad season, run coach out of town')
		}else if(wins == 0 ){
			console.log('Lets never speak of coach again')
		}else{
			console.log('quit football')
		}

}

console.log(coach(5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Loop through array 

var arrayBlue = ['blue', 'red', 'green', 'purple'];

for ( i=0; i<4; i++){
	console.log(arrayBlue[i] + ' This is cool ');
}

/// Uno maz

var arrayRed = ['purple', 'green', 'navy', 'black'];

for (i=0; i<arrayRed.length; i++){
	console.log(arrayRed[i]);
}

//Write another object and loop through it


var bigBird ={

	color:'yellow',
	animal:'bird',
	size:'big',
	demeanor:'nice',
	fly: function(){
		console.log('Look at big bird fly')},
	notGiveA: function(){
		console.log('Big Bird doesn"t care');
	},
	bestFriend: function(){
		console.log('Big Birds best friends is Snuffalogous')
	},
	rivalry: function(){
		console.log('Bert and Ernie were always talking junk on Big Bird')
	}
	
}

var bigBirdDesc = '';

for (x in bigBird){
	console.log(bigBird[x]);
}

console.log(bigBird.fly());

console.log(bigBird.notGiveA());


console.log(bigBird.bestFriend());

console.log(bigBird.rivalry());
// Create time out and setInterval functions 



const bigBirddiv = document.createElement('div');
bigBirddiv.className = 'Big';
bigBirddiv.innerHTML = '<h1>This is the Big Bird</h1>'
start.appendChild(bigBirddiv);

const bigButton = document.createElement('button');
bigButton.textContent = 'Big Bird';
bigBirddiv.appendChild(bigButton);

bigButton.addEventListener('click', function(){

	let bigMessage = document.createElement('p');
	bigMessage.innerHTML = 'You are a Champion';
	bigBirddiv.appendChild(bigMessage);

});


// One more object

var byu ={
	what: 'school',
	type: 'university',
	private: true,
	sport: 'football'
}

for (x in byu){
	console.log(byu[x] + ' Is bad at football')
}

///////////////////////////////////////////////////////////////////////////////////////////

//Write 5 arrays and loop through them 

var array30 = ['green', 'white', 'purple', 'navy'];

var array31 = ['BYU', 'Utah', 'Utah State', 'Weber State'];

var array32 = ['Utah ', 'Idaho', 'Wyoming', 'Colorado'];

var array33 = ['USA', 'Canada', 'Mexico', 'Guatamala'];

var array34 = ['Basketball', 'Soccer', 'Football', 'Tennis'];

var array35 = ['Flamengo', 'Botofogo', 'Vasco', 'Flumenense'];

//5 loops 

for (i=0; i<array30.length; i++){
	console.log(array30[i]+ ' These are colors');
}

for (i=0; i<array31.length; i++){
	console.log(array31[i]+ ' is a university in Utah');
}

for (i=0; i<array32.length; i++){
	console.log(array32[i]+ ' is a state in the United States');
}

for (i=0; i<array33.length; i++){
	console.log(array33[i]+ ' is a country in the world');
}

for (i=0; i<array34.length; i++){
	console.log(array34[i]+ ' is a sport');
}

for (i=0; i<array35.length; i++){
	console.log(array3[i]+ ' is a soccer team in Rio');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// write  objects and loop through them 

var object30 = {
	name: 'Nick Romando',
	position: 'Goalkeeper',
	team:'Real Salt Lake',
	status: 'active'
}

var object31 = {
	name: 'Kyle Beckerman',
	position: 'Defensive Midfield',
	team:'Real Salt Lake',
	status: 'active'
}

var object32 = {
	name: 'Justin Glad',
	position: 'Defender',
	team:'Real Salt Lake',
	status: 'active'
}

var object33 = {
	name: 'Albert Rusnack',
	position: 'Midfield',
	team:'Real Salt Lake',
	status: 'active'
}

var object34 = {
	name: 'Tony Beltran',
	position: 'Fullback',
	team:'Real Salt Lake',
	status: 'active'
}

var object35 = {
	name: 'Jordan Allen',
	position: 'Midfield',
	team:'Real Salt Lake',
	status: 'active'
}

// loops 

var rsl = '';
var y;

for (y in object30){
	console.log( object30[y]);
}

for (y in object31){
	console.log( object31[y]);
}

for (y in object32){
	console.log( object32[y]);
}

for (y in object33){
	console.log( object33[y]);
}

for (y in object34){
	console.log( object34[y]);
}

for (y in object35){
	console.log( object35[y]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write 5 functions && conditionals

var week = ['Monday', 'Tuesday', "wednesday", 'Thursday', "Friday", 'Saturday', 'Sunday']

function wakeup(day){

	if(day==week[0] || day== week[1] || day== week[2] || day== week[3] || day== week[4]){
		console.log('You need to wake up at 5 Am');
	}else{
		console.log('Sleep in!  Its the weekend!');
	}
}

console.log(wakeup('Saturday'));

console.log(wakeup('wednesday'));


function work (savings){

	if(savings >10000){
		console.log('Sweet Keep coding')
	}else if (savings>5000 && savings<10000){
		console.log('You better start making some money')
	}else if(savings<5000){
		console.log('Uber here i come')
	}
}

console.log(work(2000));

console.log(work(15000));

console.log(work(7000));

function dating(goodTime, investment, availability){

	if(goodTime == true && investment == true && availability== true){
		console.log('You should go out again')
	}else{
		console.log('Find another date')
	}
}

dating(true,true,true);

dating(true,true,false);

dating(false,false,false);

function improvement(start, current){

	if(current>start){
		console.log('You are making improvement')
	}else if(current == start ){
		console.log('You are the same')
	}else{
		console.log('You are not making improvement')
	}

}

improvement(5,4);

improvement(2,1);

improvement(3,3);

improvement(7,10);

var income = 30000;
var wealth =60000;
var marriageStatus = false;


function goals2018(){

	if(income> 30000 && wealth> 50000 && marriageStatus == true){
		console.log('Nice work my friend!');
	}else{
		console.log('Keep Grinding my friend');
	}
}

console.log(goals2018());

var income = 70000;
var wealth =60000;
var marriageStatus = true;

console.log(goals2018());

var income = 70000;
var wealth =60000;
var marriageStatus = false;

console.log(goals2018());

var income = 90000;
var wealth =20000;
var marriageStatus = true;

console.log(goals2018());


function worthy(doIt, be, notDo){

	if(doIt == true && be == true && notDo == true ){
		console.log('Nicely done!  Keep it up')
	}else{
		console.log('Looks like there are some things to work on')
	}
}

console.log(worthy(true,true,false));

console.log(worthy(true,true,true));

//Write tons of conditionals and functions with conditionals and inputs that trigger a conditional 

var newInput = document.createElement('input');

newInput.type = 'text';

newInput.placeholder = 'Put info in here';

start.appendChild(newInput);

var submitter = document.createElement('button');

submitter.innerHTML = 'Submit';

start.appendChild(submitter);

submitter.addEventListener('click', function(){

	var grabbIt = document.createElement('p');

	grabbIt.textContent = newInput.value;

	start.appendChild(grabbIt);
	console.log(grabbIt.textContent);
	newInput.value = '';


})


let divMaker = '<div>'
divMaker += '<p>This is a paragraph</p>';
divMaker += '<input type="text">';

for (i=0; i<week.length; i++){
	divMaker += week[i] + ' ';
}

divMaker += '<button>This is a button</button>';
divMaker += '<h1>This is a headline</h1>'
divMaker += '</div>'

console.log(divMaker);




let divMaker3 = '<div>'
divMaker3 += '<p>This is a paragraph</p>';
divMaker3 += '<input type="text">';

for (i=0; i<array31.length; i++){
	divMaker3 += array31[i] + ' ';
}

divMaker3 += '<button>This is a button</button>';
divMaker3 += '<h1>This is a headline</h1>'
divMaker3 += '</div>'

console.log(divMaker3);
//start.appendChild(divMaker3.innerHTML);

let divMaker4 = '<div>'
divMaker4 += '<p>This is a paragraph</p>';
divMaker4 += '<input type="text">';

for (i=0; i<array33.length; i++){
	divMaker4 += array33[i] + ' ' + ' This is a college ';
}

divMaker4 += '<button>This is a button</button>';
divMaker4 += '<h1>This is a headline</h1>'
divMaker4 += '</div>'

console.log(divMaker4);
//start.appendChild(divMaker3.


let divMaker5 = '<div>'
divMaker5 += '<p>This is a paragraph</p>';
divMaker5 += '<input type="text">';

for (i=0; i<array34.length; i++){
	divMaker5 += array34[i] + ' ' + ' This is a country ';
}

divMaker5 += '<button>This is a button</button>';
divMaker5 += '<h1>This is a headline</h1>'
divMaker5 += '</div>'

console.log(divMaker5);
//start.appendChild(divMaker3.

let divMaker6 = '<div>'
divMaker6 += '<p>This is a paragraph</p>';
divMaker6 += '<input type="text" placeholder="who is your favorite football team">';

for (i=0; i<array35.length; i++){
	divMaker6 += array35[i] + ' ' + ' This is a country ';
}

divMaker6 += '<button>This is a button</button>';
divMaker6 += '<h1>This is a headline</h1>'
divMaker6 += '</div>'

console.log(divMaker6);

let divMaker2 = document.createElement('div');

divMaker2.innerHTML = divMaker6;

start.appendChild(divMaker2);



let divMaker7 = document.createElement('div');

divMaker7.innerHTML = divMaker5;

start.appendChild(divMaker7);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write 5 objects and loop through and place in html code 

var rio  = {
	country: 'Brazil',
	state: 'Rio de Janeiro',
	size: 'Megaopolis',
	danger: 'High'
}

var victoria  = {
	country: 'Brazil',
	state: 'Espirito Santo',
	size: 'Megaopolis',
	danger: 'High'
}

var niteroi  = {
	country: 'Brazil',
	state: 'Rio de Janeiro',
	size: 'Megaopolis',
	danger: 'High'
}

var cachoeiro  = {
	country: 'Brazil',
	state: 'Espirito Santo',
	size: 'Megaopolis',
	danger: 'High'
}

var macae  = {
	country: 'Brazil',
	state: 'Rio de Janeiro',
	size: 'Megaopolis',
	danger: 'High'
}

var practice = '<div>'
practice += '<h1>This is more details on a city</h1>'

for (x in rio){
	practice += rio[x] + ' Rio is a great city' + '<br>';
}

practice += '<h3>This is another headline</h3>'
practice += '</div>'

console.log(practice);

var practiceDiv = document.createElement('div');
practiceDiv.innerHTML = practice;

start.appendChild(practiceDiv);

var practice2 = '<div>'
practice2 += '<h1>This is more details on a city</h1>'

for (x in victoria){
	practice2 += victoria[x] + ' Rio is a great city' + '<br>';
}

practice2 += '<h3>This is another headline</h3>'
practice2 += '</div>'

console.log(practice2);


var practice3 = '<div>'
practice3 += '<h1>This is more details on a city</h1>'

for (x in niteroi){
	practice3 += niteroi[x] + ' Rio is a great city' + '<br>';
}

practice3 += '<h3>This is another headline</h3>'
practice3 += '</div>'

console.log(practice3);


var practice4 = '<div>'
practice4 += '<h1>This is more details on a city</h1>'

for (x in cachoeiro){
	practice4 += cachoeiro[x] + ' Rio is a great city' + '<br>';
}

practice4 += '<h3>This is another headline</h3>'
practice4 += '</div>'

console.log(practice4);

var practice5 = '<div>'
practice5 += '<h1>This is more details on a city</h1>'

for (x in macae){
	practice5 += macae[x] + ' Rio is a great city' + '<br>';
}

practice5 += '<h3>This is another headline</h3>'
practice5 += '</div>'

console.log(practice5);




//start.appendChild(divMaker3.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Form validation, email, number, to upper case



var valName = document.querySelector('#name');
console.log(valName);
var valEmail = document.querySelector('#email');
console.log(valEmail);
var valPhone = document.querySelector('#phone');
console.log(valPhone);
var submit2 = document.querySelector('#submit2');
console.log(submit2);
var textArea = document.querySelector('#textArea');
console.log(textArea);

//Grab Checkboxes 

var valCheckboxes = document.querySelectorAll("#validator input[type=checkbox]");
console.log(valCheckboxes);

for (i=0; i<valCheckboxes.length; i++){
	console.log(valCheckboxes[i]);
}

console.log(valCheckboxes[0])


// Add Event Listener 

submit2.addEventListener('click', function(e){

	if(valName.value =='' ){
		alert('You must fill out something for name');
		e.preventDefault();
	}else if(valName.value.length < 5){
		alert('Come on your name is longer than 1 character');
		e.preventDefault();
	}else{
		alert('good job you filled in the correct name');
	}

	if(valEmail.value =='' ){
		alert('You must fill out something for email');
		e.preventDefault();
	}else if(valEmail.value.length < 10 ){
		alert('That is not a valid email fool');
	}else{
		alert('Now we are talking, great email');
	}

	if(valPhone.value =='' ){
		alert('You must fill out something for phone');
		e.preventDefault();
	} else if(valPhone.value.length < 10){
		alert('why are you wasting my time putting in the wrong info');
		e.preventDefault();
	}else{
		alert('Cool I will call you like 10"s per day');
	}
	if(textArea.value =='' ){
		alert('You must fill out something for comment');
		e.preventDefault();
	}else if( textArea.value.length < 15 ){
		alert('come on, is that all you have to say');
		e.preventDefault();
	}else {
		alert('Now we are talking fool, well done');
	}

	 if(valCheckboxes[0].checked== false && valCheckboxes[1].checked== false && valCheckboxes[2].checked== false && valCheckboxes[3].checked== false && valCheckboxes[4].checked== false && valCheckboxes[5].checked == false){
	 	e.preventDefault();
	 	console.log("You succeeded");
	 	alert('You must check at least one box');
	 }else{
	 	alert('You failed');
	 }
	



});

// Create multiple input elements 

var inputA = document.createElement('input');
inputA.type = 'text';
inputA.placeholder ='This is it';
inputA.style.background ='lightgray';

start.appendChild(inputA);

var inputB = document.createElement('input');
inputB.type ='checkbox';
inputB.style.background ='blue';
inputB.id = 'bobbinsX';

var inputC = document.createElement('label');
inputC.innerHTML = 'Bobbers'
start.appendChild(inputC)

start.appendChild(inputB);

var inputD= document.createElement('input');
inputD.type ='radio';
inputD.style.background ='green';
inputD.id = 'bobbinsY';

start.appendChild(inputD);


var inputE= document.createElement('input');
inputE.type ='submit';
inputE.style.background ='green';
inputE.id = 'bobbinsYm';
inputE.innerHTML = 'Submit Fool';

start.appendChild(inputE);


var tableA = document.createElement('table');
tableA.innerHTML = 'This is a table';
tableA.id ='elTable';

console.log(tableA);
start.appendChild(tableA);

//var trA = document.createElement('tr');
//trA.innerHTML = 'This is a table row'; 

tableA.innerHTML += '<tr><td>Bob</td>' + ' ' + "<td>Dennis</td>" + ' ' + "<td>David</td></tr>";
tableA.innerHTML += '<tr><td>Ned</td></tr>';
tableA.innerHTML += '<tr><td>Ed</td></tr>';
tableA.innerHTML += '<tr><td>Larry</td></tr>';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//



///////////////////////////////////////////////




//Dynamically load arrays to created elements -- I need to do this over and over again 

//

var arrayOne = ['Big Bird', 'Snoffologus', 'Bert', 'Ernie', 'Cookie Monster']

var pOne = document.createElement('p');



	pone = '<div>';
	pOne += '<h1>This is a headline </h1>';
	pOne += '<p>This is a paragraphh</p>';
	for (i=0; i<arrayOne.length; i++){
		pOne += arrayOne[i] + ' live on Seseme Street' + ' ';
	}
	pone += '</div>';
 
var divOne = document.createElement('div');

divOne.innerHTML = pOne;

start.appendChild(divOne);



//////////////////////////////////////////////////////////////////////////////////////////////////


//Create another form and validate-- Hard code the forma nd then validate here 


var submitter2 = document.querySelector('#submitter2');

var longName = document.querySelector('#char15');

var checker1 = document.querySelector('#checker1');

var checker2 = document.querySelector('#checker2');


console.log(checker1);
console.log(checker2);
console.log(longName);
console.log(submitter2);

var selectBlue = document.querySelector('#chooseBlue');
var selectRed = document.querySelector('#chooseRed');
var selectYellow = document.querySelector('#chooseYellow');

console.log(selectBlue);
console.log(selectRed);
console.log(selectYellow);



function validName(){
	if(longName.value.length<12 || longName.value.length>15 ){
		alert('Why don"t you follow instructions');
		e.preventDefault();
	}else{
		console.log('Nicely Done');
	}	
}



submitter2.addEventListener('click', function(e){

		
		//validName();
	if(longName.value.length<12 || longName.value.length>15 ){
		alert('Why don"t you follow instructions');
		e.preventDefault();
	}else{
		console.log('Nicely Done');
	}	

	// validate checkbox  checker 1

	if (checker1.checked == true ){

		alert('Great job checking the box');
	}else{
		alert('You didn"t check it, you better wreck it')
	}

	if (checker2.checked == false ){

		alert('Great job not checking the box');
	}else{
		alert('You didn"t check it, you better wreck it sucka fool')
	}

	if (checker3.checked == true ){

		alert('Great job checking the Radio Button');
	}else{
		alert('You didn"t check it, you better wreck it Radio Button 1')
	}

	if (checker4.checked == false ){

		alert('Great job not checking the Radio Button');
	}else{
		alert('You didn"t check it, you better wreck it sucka fool Radio Button 2')
	}

// Select option ///

	if(chooseBlue.selected == true){
		console.log('You have chosen wisely')
	}else{
		console.log('Why didn"t you choose blue')
	}

	if(chooseRed.selected == true){
		console.log('You have chosen wisely, well maybe')
	}else{
		console.log('Why didn"t you choose red')
	}

	if(chooseYellow.selected == true){
		console.log('You have chosen wisely, I knew you would')
	}else{
		console.log('Why didn"t you choose Yellow')
	}






});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loop through object 

var winCo = {

	businessType: 'Supermarket',
	strategy: 'Low Cost',
	prices: 'low',
	storeType: 'warehouse'
}
var winColist = '';

for (x in winCo){
	winColist += winCo[x] + ' ';

}

console.log(winColist);


var wallMart = {

	businessType: 'Discount Supermarket',
	strategy: 'Low Cost',
	prices: 'low cost leader',
	storeType: 'retails'
}
var wallMartlist = '';

for (x in wallMart){
	wallMartlist += wallMart[x] + ' ' + 'This is a proud american company' + ' ';

}

console.log(wallMartlist);


var formBlue = document.createElement('form');

var inputBlue = document.createElement('input');
inputBlue.type = 'text';
inputBlue.placeholder = 'Write the color Blue';

formBlue.appendChild(inputBlue);

console.log(formBlue);

start.appendChild(formBlue);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create and add 10 buttons to the dom 

var createButton1 = document.createElement('button');
createButton1.textContent = 'Blue Button';
createButton1.style.background ='blue';
formBlue.appendChild(createButton1);


var createButton2 = document.createElement('button');
createButton2.textContent = 'Red Button';
createButton2.style.background ='red';
formBlue.appendChild(createButton2);

var createButton3 = document.createElement('button');
createButton3.textContent = 'Green Button';
createButton3.style.background ='Green';
formBlue.appendChild(createButton3);

var createButton4 = document.createElement('button');
createButton4.color = 'white';
createButton4.textContent = 'Black Button';
createButton4.style.background ='Black';
formBlue.appendChild(createButton4);


var createButton5 = document.createElement('button');
createButton5.color = 'white';
createButton5.textContent = 'Purple Button';
createButton5.style.background ='Purple';
formBlue.appendChild(createButton5);

var createButton6 = document.createElement('button');
createButton6.color = 'white';
createButton6.textContent = 'Yellow Button';
createButton6.style.background ='Yellow';
formBlue.appendChild(createButton6);

var createButton7 = document.createElement('button');
createButton7.color = 'white';
createButton7.textContent = 'Brown Button';
createButton7.style.background ='Brown';
formBlue.appendChild(createButton7);

var createButton8 = document.createElement('button');
createButton8.color = 'white';
createButton8.textContent = 'Orange Button';
createButton8.style.background ='Orange';
formBlue.appendChild(createButton8);

var createButton9 = document.createElement('button');
createButton9.color = 'white';
createButton9.textContent = 'Light Gray Button';
createButton9.style.background ='lightgray';
formBlue.appendChild(createButton9);

var createButton10 = document.createElement('button');
createButton10.color = 'white';
createButton10.textContent = 'white Button';
createButton10.style.background ='white';
formBlue.appendChild(createButton10);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///  Create input with key up

var inputKeyUp = document.createElement('input');

var inputKeyUp2 = document.createElement('input');



var keyUpDiv = document.createElement('div');

var keyUpDiv2 = document.createElement('div');





start.appendChild(inputKeyUp);
start.appendChild(inputKeyUp2);



start.appendChild(keyUpDiv);

start.appendChild(keyUpDiv2);



inputKeyUp.addEventListener('keyup', function(){
	keyUpDiv.innerHTML = inputKeyUp.value;

});

inputKeyUp2.addEventListener('keydown', function(){
	keyUpDiv2.innerHTML = inputKeyUp2.value;

});

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Add Event Listener Change events


var eventPractice = document.querySelector('#eventPractice');

console.log(eventPractice);

//mouse over

eventPractice.addEventListener('mouseover', function(){

	

	eventPractice.style.backgroundColor ='blue';


});

eventPractice.addEventListener('mouseout', function(){

	eventPractice.style.backgroundColor ='';
});

//  focus 

var inputPractice = document.querySelector('#inputPractice');

var insertText =  document.querySelector('#insertText');

inputPractice.addEventListener('focus', function(){

	inputPractice.style.backgroundColor  = 'red';

});

// blur


inputPractice.addEventListener('blur', function(){

	inputPractice.style.backgroundColor  = '';

});

// Key Down 

inputPractice.addEventListener('keydown', function(){

	insertText.textContent = inputPractice.value;

});

//Key Up

inputPractice.addEventListener('keyup', function(){

	insertText.textContent = '';

});


var inputPractice2 = document.querySelector('#inputPractice2');

inputPractice2.addEventListener('focus', function(){

	inputPractice2.style.backgroundColor  = 'green';

});

// blur


inputPractice2.addEventListener('blur', function(){

	inputPractice2.style.backgroundColor  = '';

});


inputPractice2.addEventListener('keydown', function(){

	insertText2.textContent = inputPractice2.value;

});

//Key Up

inputPractice2.addEventListener('keyup', function(){

	insertText2.textContent = '';

});


var inputPractice3 = document.querySelector('#inputPractice3');

inputPractice3.addEventListener('focus', function(){

	inputPractice3.style.backgroundColor  = 'purple';

});

// blur


inputPractice3.addEventListener('blur', function(){

	inputPractice3.style.backgroundColor  = '';

});




// pratice mouse over, mouseout and double click 

var inputPractice4 = document.querySelector('#inputPractice4');

inputPractice4.addEventListener('mouseover', function(){

	inputPractice4.style.backgroundColor ='yellow';

});

inputPractice4.addEventListener('mouseout', function(){

	inputPractice4.style.backgroundColor ='green';
	
});

/*inputPractice4.addEventListener('dblclick', function(e){
	e.preventDefault();
	alert('Patience, no need to double click');


});

*/

inputPractice4.addEventListener('click', function(e){
	e.preventDefault();
	alert('Patience, please double  click');
	inputPractice.style.display ='none';
	inputPractice2.style.display ='none';
	inputPractice3.style.display ='none';


});


var inputPractice5 = document.querySelector('#inputPractice5');

inputPractice5.addEventListener('change', function(){

	if(inputPractice5.checked == true ){

		inputPractice4.style.backgroundColor = 'pink';
	}else{
		inputPractice4.style.backgroundColor = '';
	}

})

var inputPractice6 = document.querySelector('#inputPractice6');

inputPractice6.addEventListener('change', function(){

	if(inputPractice6.checked == true ){

		inputPractice4.style.backgroundColor = 'red';
	}else if(inputPractice6.checked == false) {
		inputPractice4.style.backgroundColor = '';
	}

});

inputPractice6.addEventListener('change', function(){

	if(inputPractice6.checked == false ){

		inputPractice4.style.backgroundColor = '';
	}else if(inputPractice6.checked == false) {
		inputPractice4.style.backgroundColor = '';
	}

});
//  On change select 

var inputPractice7 = document.querySelector('#inputPractice7');


var select1 = document.querySelector('#select1');
var select2A = document.querySelector('#select2');
var select3 = document.querySelector('#select3');



inputPractice7.addEventListener('change', function(){

	if(select1.selected== true ){
		alert('You have chosen wisely')
	}else if(select2A.selected== true){
		console.log('It worked');
		alert('Red Red Red ')
	}else if(select3.selected== true){
		alert('You have chosen wiselier lier')
	}

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Practice Interpolation javascript 

// Practice on change events on check boxes need to write checkboxes 


//  // Practice on Key up events on check boxes need to write input 


//  // Practice on Submit events on check boxes need to write input 

//  // Practice on Key up events on Selected  need to write input 

var insertInfo = document.querySelector('#insertInfo');


var object40 = {

	mountain: 'Uinta',
	river: 'bear',
	activity: 'hike'

}
var mountainAct = '';
for (x in object40){
	mountainAct += object40[x] + ' '; 

}

inputPractice3.addEventListener('keydown', function(){

	insertInfo.innerHTML = mountainAct;
});

//Key Up

inputPractice3.addEventListener('keyup', function(){

	insertText3.textContent = '';

});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Create a search box and remove items w3 schools 


function myFunction() {
    // Declare variables
    var inputA, filterA, ulA, liA, aA, i;
    inputA = document.getElementById('myInput');
    filterA = inputA.value.toUpperCase();
    ulA = document.getElementById("myUL");
    liA = ulA.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < liA.length; i++) {
        aA = liA[i].getElementsByTagName("a")[0];
        if (aA.innerHTML.toUpperCase().indexOf(filterA) > -1) {
            liA[i].style.display = "";
        } else {
            liA[i].style.display = "none";
        }
    }
}

// Spefic Item object 


var computer = {

	type: 'laptop',
	color: 'black',
	brand: 'Dell',
	accessories: ['bag', 'strap', 'cord'],


}
console.log(computer.accessories[0]);
console.log(computer.accessories[2]);
console.log(computer.accessories[1]);

var computerPrint = '';
var th;

for (th in computer){

	console.log(computerPrint += computer[th] + ' Big Ben ');
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  fpr each loops 


 var arrayForEach = [1,2,3,4,5];

 arrayForEach.forEach( function(number){
 	console.log(number);
 });



 var arrayForEach2 = ['Botofogo', 'flamengo', 'Vasco de Gama', 'Flumenense', 'Sao Paulo'];

 arrayForEach2.forEach( function(team){
 	console.log(team);
 });


 var arrayForEach3 = ['Uinta', 'Wellsville', 'Tushar' ,'Wasatch', 'Henry'];

 // the parameter that is passed in represents a placeholder for each item in the array and the function is what will happen to each item in the array 

 arrayForEach3.forEach( function(mountains){
 	console.log(mountains + ' is a mountain range in Utah ');
 });

var arrayForEach4 = ['bear', 'provo', 'duchesne', 'weber'];

var rivers = document.querySelector('#rivers');



 // the parameter that is passed in represents a placeholder for each item in the array and the function is what will happen to each item in the array 

 arrayForEach4.forEach( function(river){
 	rivers.innerHTML += river + ' starts in the Uinta Mountain Range ' + '<br>' ;
 });


 var arrayForEach5 = ['thistle', 'silver city', 'knightsville', 'dividend', 'fruita' ];

var ghostTowns = document.querySelector('#ghostTowns');


arrayForEach5.forEach(function(ghost){

	ghostTowns.innerHTML += ghost + ' is a ghost town in Utah' + ' They are fun to visit and take pics' + ' ';
});


var arrayForEach6 = ['Smithfield', 'Logan', 'Nibley', 'Brigham City', 'Corrinne'];

var oldChurches = document.querySelector('#oldChurches');

arrayForEach6.forEach(function(church){

	oldChurches.innerHTML += church + ' is an old church ' + ' and would be fun to visit'+ '<br>'
});


var arrayForEach7 = ['Madeline', 'Copperton', 'Holy Cross', 'St Joseph'];

var catholicChurches = document.querySelector('#catholicChurches');

arrayForEach7.forEach(function(churches){

	catholicChurches.innerHTML += churches + ' is an old church ' + ' and would be fun to visit'+ '<br>'
});


var arrayForEach8 = ['Corrinne', 'Salt Lake', 'Green River', 'Ferron', 'Salina'];

var presChurches = document.querySelector('#presChurches');

arrayForEach8.forEach(function(churcheses){

	console.log('Why doesn"t it work');

	presChurches.innerHTML += churcheses + ' is an old Presytarian Church ' + ' set up a time to see a service there' + '<br>'

});


// Pick specific iteam and write what the object would be 

var utahJazz = {


	players: ['Favors', 'Gobert', 'Rubio'],
	owner: 'Miller',
	coach: 'Snyder',
	stadium: 'Vivint Smart Home Arena',
	season: '82 Games',
	location:'Utah'
};

// the slt represents each property in the object and prints out each value of the object in the array 

var utahJazzStats = '';
var slt; 

for (slt in utahJazz){
	console.log(utahJazzStats = utahJazz[slt] + ' is a associated with the Utah jazz' + '<br>');
}




// Display value and key down

var nameVal = document.querySelector('#nameVal');
var emailVal = document.querySelector('#emailVal');
var phoneVal = document.querySelector('#phoneVal');
var personalityVal = document.querySelector('#personalityVal');
var textVal = document.querySelector('#textVal');


// divs to display value

var displayVal = document.querySelector('#displayVal');
var displayVa2 = document.querySelector('#displayVal2');
var displayVal3 = document.querySelector('#displayVal3');
var displayVal4 = document.querySelector('#displayVal4');
var displayVal5 = document.querySelector('#displayVal5');



console.log(emailVal);

nameVal.addEventListener('keydown', function(){

	displayVal.innerHTML = nameVal.value;

});

emailVal.addEventListener('keydown', function(){

	displayVal2.innerHTML = emailVal.value;

});

phoneVal.addEventListener('keydown', function(){

	displayVal3.innerHTML = phoneVal.value;

});

personalityVal.addEventListener('keydown', function(){

	displayVal4.innerHTML = personalityVal.value;

});

textVal.addEventListener('keydown', function(){

	displayVal5.innerHTML = textVal.value;

});

 // the parameter that is passed in represents a placeholder for each item in the array and the function is what will happen to each item in the array 


var generalConference = {
	what: 'Semi - Annual Conference of the Church of Jesus Christ',
	where: 'Salt Lake City Utah',
	why: 'Cover different topics and church business',
	Who: "All are invited and speakers are chosen by general authorities",
	how:'Listener or read live'
}

var z;
var generalZ = '';

for (z in generalConference){

	console.log(generalZ = generalConference[z]);
}

// Prototype

function PersonAZ(first, last, age, eyecolor, nation) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = nation;
}

var myFather = new PersonAZ("John", "Doe", 50, "blue",'American');
var myMother = new PersonAZ("Sally", "Rally", 48, "green", "Brazilian");

Person.prototype.nationality = "English";


//  Write an array and loop thorough it

var arrayBrazil = ['Sao Paulo', 'Rio', 'Bahia', 'Porto Allegre', 'Campinas', 'Acre', 'Minas Gerais'];


for (i=0; i<arrayBrazil.length; i++){

	console.log(arrayBrazil[i] + ' is a state in Brazil')
}


var arrayBrazilCities = ['Vitoria', 'Rio', 'Sao Paulo', 'Belo Horizonte', 'Curitiba', 'Porto Allegre'];

for (i=0; i<arrayBrazilCities.length; i++){

	console.log(arrayBrazilCities[i] + ' is a city in Brazil' + ' and it would be a great idea to pay a visit')


}



function country(continent, population, name){

	this.continent = continent;
	this.population = population;
	this.name = name;

}

var brazil = new country('South America', "200 Million", 'Brazil');

console.log(brazil);

var argentina = new country ('South America', '100 Million', 'Argentina');

console.log(argentina);

var peru = new country('South America ', '100 Million', 'Peru');

console.log(peru);

var chile = new country ('South America ', '50 million', 'Chile');

console.log(chile);

var bolivia = new country ('South America ', '30 million', 'bolivia');

console.log(bolivia);


var bobRx = 'dennos';

var dennos = document.createElement('p');
dennos.innerHTML = bobRx;
dennos.style.background = 'green';
dennos.style.padding = '20px';
dennos.style.color = 'white';
start.appendChild(dennos);

// Write 5 functions with parameters 


function easter(date, purpose, what){

	console.log("Easter is on " + date + 'where we celebrate the ressurection, which is the  ' + purpose + 'the ressurection of Chris' + what);



}

easter('April','Celebrate the Ressurection', 'Again the ressurection');

easter('Mid April', 'Most important event in history', 'Proves Christ is king');

easter('Springtime', 'Overcome sin', 'ultimate sacrifice');

easter('Spring', 'new hope and chance', 'Create a new life');

easter('April','The tomb is empty', 'He is risen');

setInterval(easter('Spring','He is Risen','He is risen'),2000);

console.log(country);
console.log(arrayBrazil);
console.log(arrayBrazilCities);

var newForm = document.createElement('form');
newForm += '<input type="text">';
newForm += '<input type="text">';
newForm += '<input type="text">';
newForm += '<h1>This is a headline</h1>'
console.log(newForm);



//Creeate an accordian 

// Pick specific iteam and write what the object would be 

// Write another form and do more form validation, focusing on checkboxes, search by id

// Write 5 prototypes with 3 properties and 2 methods each   console.log  also add 2 prototype properties and methods for each object

//Add Disable attribute and take it off again and again


// write 10 fucntions with the arrown syntax

// Write 10 more functions with parameters




// write 10 things of interpolation 