console.log("hello from main.js");
const weekDays = [
    [new Date(2022, 9, 17, 9, 0), new Date(2022, 9, 17, 9, 30) ],
    [new Date(2022, 9, 17, 9, 0), new Date(2022, 9, 17, 9, 30) ],
    [new Date(2022, 9, 17, 9, 0), new Date(2022, 9, 17, 9, 30) ],
    [new Date(2022, 9, 17, 9, 0), new Date(2022, 9, 17, 9, 30) ],
];

// dynamically create html

var contents = ``;
weekDays.forEach( (item) => {
contents += `<div class="intervalDIV">${item[0].toLocaleTimeString()} - ${item[1].toLocaleTimeString()}</div>` 
})

console.log("contents is = ",contents);
// set innerHtml
document.getElementById('weekdayHours').innerHTML = contents;