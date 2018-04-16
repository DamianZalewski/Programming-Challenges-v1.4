//Define names and surnames examples. 

var maleNames = ['Arek','Jan','Pawel','Jon'];
var femaleNames = ['Anna','Marysia','Elisa','Gloria'];
var surnames = ['Nowak','Kowal','Turo','Smith'];


var generateButton = document.getElementById('generateButton');
generateButton.addEventListener("click",generateName);  
//Generate random combination of name and surname. 
function generateName(){
   var gender = Math.floor(Math.random()*100);
var nickname = '';
var randomName = '';
var randomSurname = '';
if(gender%2==0) randomName = maleNames[Math.floor(Math.random()*(maleNames.length))];
else randomName = femaleNames[Math.floor(Math.random()*(femaleNames.length))];

randomSurname = surnames[Math.floor(Math.random()*(surnames.length))];

nickname = randomName + " " + randomSurname;
document.writeln(nickname);
document.writeln("<br />"); 
}



