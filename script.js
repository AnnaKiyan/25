//min
alert('Hello!');

let userName 

do {
    userName = prompt("Add your name", "");

} while (!userName);

alert(`Nice to meet you, ${userName}!`);

if (userName !=null && userName !="") {
} else {
    alert('Please enter your name');
}

alert(`Let learn JS more, ${userName}!`);

let learning = confirm(`We mast learning JS together, ${userName}!`);


//middle
alert('So next');

let yourAge

/*do {
    yourAge = prompt("How old are you?", "");

} while (!yourAge);

alert(`Great You are ${yourAge} y.o., ${userName}`, yourAge);
*/

function submitBirthday() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    var birthday = Date.parse(document.getElementById("myBirthday").value);
    var dateNow = new Date();
    var YearsOld = Math.round((dateNow-birthday)/ years);

    document.getElementById("displayBirthday").innerHTML = ("You are " + YearsOld + " years old.");
}

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


function doArea(num) {
switch(num) {
case 0 : return (""); break;
case 1 : var length = prompt("Введите ширину квадрата:", "");
length = length * length;
return (length); break;
}
}