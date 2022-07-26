// Task1
// var date = new Date();
// document.write(date);

// Task2
// var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
// var date = new Date();
// var getMonth = date.getMonth();
// var monthName = month[getMonth];
// document.write("Current month: " + monthName);

// Task3
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var date = new Date();
// var getday = date.getDay();
// var dayName = days[getday];
// document.write("Today is " + dayName)

// Task4
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var date = new Date();
// var getday = date.getDay();
// var dayName = days[getday];

// if(dayName === "Sunday" || dayName === "Saturday"){
//     document.write("It's Fun Day")
// }else{
//     document.write("It's " + dayName)
// }

// Task5
// var date = new Date();
// var getDate = date.getDate();

// if(getDate < 16){
//     document.write("First fifteen days of the month")
// }else{
//     document.write("last days of the month")
// }

// Task6
// var date1 = new Date();
// var date = new Date("January 01, 1970");
// document.write("Current date: " + date1 + "<br>")
// var diff = date1 - date;
// var min = diff/(1000*60);
// document.write("Elapsed milisecond since January 1, 1970: " + diff + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + min)

// task7
// var date = new Date();
// var getHours = date.getHours();
// if(getHours < 12){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// Task8
// var date = new Date("December 31, 2020");
// var laterDate = date;
// document.write("Later date: " + laterDate)

// Task9
// var date = new Date("April 03, 2022")
// var date1 = new Date("June 18, 2015")
// var diff = date - date1;
// var days = diff/(1000*60*60*24);
// document.write(days + " days have passed since 1st Ramazan, 2015")

// Task10
// var date = new Date("dec 05 2015 22:50:16")
// var date1 = new Date("jan 01 2015")
// var diff = date - date1;
// console.log(diff)
// var sec = Math.ceil((diff/(1000))/60);
// document.write("On reference date " + date + "<br>")
// document.write(sec + "seconds had passed since beginning of 2015")

// Task11
// var date = new Date();
// document.write(date + "<br>")
// date.setHours(10)
// document.write("1 hour ago, it was " + date)

// Task12
// var date = new Date();
// document.write(date + "<br>")
// date.setFullYear(1922)
// document.write("100 years back, it was " + date)

// Task13
// var age = prompt("Enter your Age")
// var date = new Date();
// var year = date.getFullYear();
// document.write("Your age is: " + age + "<br>")

// var birthyear = year - age;
// document.write("Your birth year is: " + birthyear)

// Task14
var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
var name = prompt("Enter your name")
var date =  new Date();
var noUnits = parseFloat(prompt("Enter no of Units")).toFixed(2);
var chargeUnit = 16;
var withinDue = noUnits * chargeUnit;
var lateCharges = 350;
var afterDue = withinDue + lateCharges; 

document.write("<h1>K-Electric Bill</h1>")
document.write("Customer Name: <b>" + name + "</b><br>")
document.write("Month: <b>" + month[date.getMonth()] + "</b><br>")
document.write("Number of units: <b>" + noUnits + "</b><br>")
document.write("Charges per units: <b>" + chargeUnit + "</b><br><br><br>")
document.write("Net Amount Payable (within Due date): <b>" + withinDue + "</b><br>")
document.write("Late Payment surcharge: <b>" + lateCharges + "</b><br>")
document.write("Gross Amount Payable (after Due date): <b>" + afterDue + "</b><br>")