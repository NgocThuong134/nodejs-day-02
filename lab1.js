// EX1
/* function getCurrentDayAndTime() {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDate = new Date();

  var day = daysOfWeek[currentDate.getDay()];
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var timePeriod = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  var formattedTime =
    day +
    ".\nCurrent time is: " +
    hours +
    " " +
    timePeriod +
    " : " +
    minutes +
    " : " +
    seconds;
  return formattedTime;
}

console.log("Today is: " + getCurrentDayAndTime());
 */

//EX2

/* function getCurrentDate() {
  var currentDate = new Date();

  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();

  var format1 = month + "-" + day + "-" + year;
  var format2 = month + "/" + day + "/" + year;
  var format3 = day + "-" + month + "-" + year;
  var format4 = day + "/" + month + "/" + year;

  var formattedDate =
    "mm-dd-yyyy: " +
    format1 +
    "\nmm/dd/yyyy: " +
    format2 +
    "\ndd-mm-yyyy: " +
    format3 +
    "\ndd/mm/yyyy: " +
    format4;
  return formattedDate;
}

console.log("Current date:\n" + getCurrentDate());
 */

//EX3

/* function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

var celsiusTemperature = 70;
var fahrenheitTemperature = 50;

var convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperature);
var convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);

console.log(celsiusTemperature + "°C is " + convertedToFahrenheit + "°F");
console.log(fahrenheitTemperature + "°F is " + convertedToCelsius + "°C"); */

//EX4

/* function reverseString(str) {
  var splitString = str.split("");
  var reversedArray = splitString.reverse();
  var joinedArray = reversedArray.join("");
  return joinedArray;
}

var inputString = "Ngoc Thuong";
var reversedString = reverseString(inputString);

console.log("Input string: " + inputString);
console.log("Reversed string: " + reversedString);
 */

//EX5

/* function isPossibleExpression(x, y, z) {
  if (x + y === z) {
    return "+";
  } else if (x - y === z) {
    return "-";
  } else if (x * y === z) {
    return "*";
  } else if (x / y === z) {
    return "/";
  } else {
    return false;
  }
}

var x = 10;
var y = 30;
var z = 90;

var operator = isPossibleExpression(x, y, z);

if (operator) {
  console.log(`The expression ${x} ${operator} ${y} = ${z} is possible.`);
} else {
  console.log(
    `It is not possible to obtain ${z} from ${x} $ ${y} using +, -, *, or /.`
  );
}
 */

//EX6

/* function findKthGreatestElement(arr, k) {
  // Sort the array in descending order
  arr.sort(function (a, b) {
    return b - a;
  });

  // Return the kth element
  return arr[k - 1];
}

var array = [10, 5, 8, 3, 2, 13, 45, 67];
var k = 6;

var kthGreatestElement = findKthGreatestElement(array, k);

console.log("Array:", array);
console.log("K^th greatest element:", kthGreatestElement);
 */
