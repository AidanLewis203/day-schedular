// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay= $('#currentDay')
var date = dayjs().format('dddd, MMMM D')
var time = dayjs().subtract(15, 'hour').format('HH')
var currentHourIndex = 0
var hours = ['09', '10', '11', '12', '13', '14', '15', '16', '17']
var hour9 = $('#hour-9')
var hour10 = $('#hour-10')
var hour11 = $('#hour-11')
var hour12 = $('#hour-12')
var hour13 = $('#hour-13')
var hour14 = $('#hour-14')
var hour15 = $('#hour-15')
var hour16 = $('#hour-16')
var hour17 = $('#hour-17')
var currentHours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]
var saveButton = $('.savebtn')


currentDay.text(date)
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    saveButton.on('click', function(){
        console.log('working')
    })

    





    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    for (var i = 0; i<hours.length; i++){
        if (hours[currentHourIndex]<time) {
            currentHours[currentHourIndex].addClass('past')
            currentHours[currentHourIndex].removeClass('present')
            currentHours[currentHourIndex].removeClass('future')
        } else if (hours[currentHourIndex]>time) {
            currentHours[currentHourIndex].addClass('future')
            currentHours[currentHourIndex].removeClass('past')
            currentHours[currentHourIndex].removeClass('present')
        } else {
            currentHours[currentHourIndex].addClass('present')
            currentHours[currentHourIndex].removeClass('past')
            currentHours[currentHourIndex].removeClass('future')
        }
        currentHourIndex++

    }

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  