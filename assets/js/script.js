// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay= $('#currentDay')
var date = dayjs().format('dddd, MMMM D')
var time = dayjs().format('HH')
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

var addedText9 = $("#9AM")
var addedText10 = $("#10AM")
var addedText11 = $("#11AM")
var addedText12 = $("#12PM")
var addedText13 = $("#1PM")
var addedText14 = $("#2PM")
var addedText15 = $("#3PM")
var addedText16 = $("#4PM")
var addedText17 = $("#5PM")
var addedText = [addedText9, addedText10, addedText11, addedText12, addedText13, addedText14, addedText15, addedText16, addedText17]





$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    
        var todo9 = localStorage.getItem('9AM')
        var todo10 = localStorage.getItem('10AM')
        var todo11 = localStorage.getItem('11AM')
        var todo12 = localStorage.getItem('12PM')
        var todo1 = localStorage.getItem('1PM')
        var todo2 = localStorage.getItem('2PM')
        var todo3 = localStorage.getItem('3PM')
        var todo4 = localStorage.getItem('4PM')
        var todo5 = localStorage.getItem('5PM')

    currentHours[0].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo = $('textarea[name="9AM"').val()
        localStorage.setItem('9AM', todo)
    })
    currentHours[1].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo10AM = $('textarea[name="10AM"]').val()
        localStorage.setItem('10AM', todo10AM)
    })
    currentHours[2].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo11AM = $('textarea[name="11AM"]').val()
        localStorage.setItem('11AM', todo11AM)
    })
    currentHours[3].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo12PM = $('textarea[name="12PM"]').val()
        localStorage.setItem('12PM', todo12PM)
    })
    currentHours[4].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo1PM = $('textarea[name="1PM"]').val()
        localStorage.setItem('1PM', todo1PM)
    })
    currentHours[5].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo2PM = $('textarea[name="2PM"]').val()
        localStorage.setItem('2PM', todo2PM)
    })
    currentHours[6].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo3PM = $('textarea[name="3PM"]').val()
        localStorage.setItem('3PM', todo3PM)
    })
    currentHours[7].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo4PM = $('textarea[name="4PM"').val()
        localStorage.setItem('4PM', todo4PM)
    })
    currentHours[8].children('button').on('click', function(event){
        event.preventDefault()
        console.log('working')
        var todo5PM = $('textarea[name="5PM"]').val()
        localStorage.setItem('5PM', todo5PM)
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
    hour9.children('textarea').val(todo9)
    hour10.children('textarea').val(todo10)
    hour11.children('textarea').val(todo11)
    hour12.children('textarea').val(todo12)
    hour13.children('textarea').val(todo1)
    hour14.children('textarea').val(todo2)
    hour15.children('textarea').val(todo3)
    hour16.children('textarea').val(todo4)
    hour17.children('textarea').val(todo5)

    //
    // TODO: Add code to display the current date in the header of the page.
    currentDay.text(date)
});
