//EX1.
function getCurrentDateTime() {
    // Lấy ngày và giờ hiện tại
    const now = new Date();
    // Lấy tên của ngày trong tuần
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    // Lấy giờ hiện tại
    let hour = now.getHours();
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Đổi định dạng giờ sang 12 giờ

    // Lấy phút và giây hiện tại
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Định dạng giờ theo yêu cầu
    const timeString = `${hour} ${meridiem} : ${minute} : ${second}`;

    // Trả về chuỗi kết quả
    return `Today is : ${dayOfWeek}. Current time is : ${timeString}`;
}
// Gọi hàm để lấy chuỗi kết quả và hiển thị
const result = getCurrentDateTime();
console.log(result);
//EX2

// Hàm để lấy ngày hiện tại theo các định dạng được chỉ định
function getCurrentDate() {
    // Lấy ngày hiện tại
    var currentDate = new Date();

    // Trích xuất ngày, tháng, và năm
    var day = currentDate.getDate(); // Lấy ngày
    var month = currentDate.getMonth() + 1; // Tháng được đánh số từ 0
    var year = currentDate.getFullYear(); // Lấy năm

    // Định dạng ngày, tháng, và năm với số 0 đứng trước nếu cần
    var formattedDay = (day < 10 ? '0' : '') + day; // Định dạng ngày
    var formattedMonth = (month < 10 ? '0' : '') + month; // Định dạng tháng

    // Tạo chuỗi ngày theo các định dạng khác nhau
    var mmddyyyy = formattedMonth + '-' + formattedDay + '-' + year; // mm-dd-yyyy
    var mmddyyyy_slash = formattedMonth + '/' + formattedDay + '/' + year; // mm/dd/yyyy
    var ddmmyyyy = formattedDay + '-' + formattedMonth + '-' + year; // dd-mm-yyyy
    var ddmmyyyy_slash = formattedDay + '/' + formattedMonth + '/' + year; // dd/mm/yyyy

    // Trả về một đối tượng chứa tất cả các định dạng
    return {
        "mm-dd-yyyy": mmddyyyy,
        "mm/dd/yyyy": mmddyyyy_slash,
        "dd-mm-yyyy": ddmmyyyy,
        "dd/mm/yyyy": ddmmyyyy_slash
    };
}

// Lấy ngày hiện tại theo các định dạng đã chỉ định
var currentDateFormats = getCurrentDate();

// In ngày hiện tại theo các định dạng khác nhau
console.log("mm-dd-yyyy: " + currentDateFormats["mm-dd-yyyy"]);
console.log("mm/dd/yyyy: " + currentDateFormats["mm/dd/yyyy"]);
console.log("dd-mm-yyyy: " + currentDateFormats["dd-mm-yyyy"]);
console.log("dd/mm/yyyy: " + currentDateFormats["dd/mm/yyyy"]);
//EX3
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
    var celsius = ((fahrenheit - 32) / 9) * 5;
    return celsius;
}
var celsiusTemp = 60;
var fahrenheit =45;
console.log(celsiusTemp +'°C is ' + celsiusToFahrenheit(celsiusTemp)+'°F');
console.log(fahrenheit +'°F is '+ fahrenheitToCelsius(fahrenheit)+'°C');
//EX4
function reverseString(str) {
    // Split the string into an array of characters
    var strArray = str.split('');

    // Reverse the array
    var reversedArray = strArray.reverse();

    // Join the array back into a string
    var reversedString = reversedArray.join('');

    // Return the reversed string
    return reversedString;
}

// Test the function with a sample string
var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);

//ex5
function replaceOperator(x, y, z) {
    // Try each operator (+, -, *, /)
    const operators = ['+', '-', '*', '/'];
    for (let operator of operators) {
        let expression = x + operator + y;
        let result = eval(expression);
        if (result === z) {
            return `Replace $ with ${operator} to obtain ${expression} = ${z}`;
        }
    }
    return "It is not possible to obtain the result by replacing $ with any of the four operators.";
}

// Example usage
console.log(replaceOperator(10, 30, 300)); // Output: Replace $ with * to obtain 10*30 = 300

//ex6

