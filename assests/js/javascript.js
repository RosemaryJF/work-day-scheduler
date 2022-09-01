// Retrieves current day/time and applies as text in header
var currentDayDisplay = moment().format("LLLL");
$("#current-day").text(currentDayDisplay);

// Creation of click function on save button and appending of textarea input to local storage
$(document).ready(function(){
    
    $(".saveBtn").on("click", function () { 
        var plannerEntry = $(this).siblings(".planner-entry").val();
        var entryTime = $(this).parent().attr("id");
            
        plannerEntry = $.trim(plannerEntry);
        console.log(entryTime);
        console.log(plannerEntry);

        localStorage.setItem(entryTime, plannerEntry);
    })
});

// Function to add/remove classes for color coded time blocks
function currentTimeTracker() {
    //Retrieval of the current time from Moment.js
    var currentTime = moment().hour();

    // Function that loops over the HTML timeblocks to determine what class to apply
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // If statement to set classes if time blocks are less than the current hour
            if (timeBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }

            // Else if statement to set classes if time blocks match the current hour
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }

            //Else statement to set classes if time blocks are more than current hour
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    });

    // Returns planner entries from local storage if page is reloaded.
    // I chose this way so that if the entry was changed the local storage would be updated upon save and reload.
    $("#hour9 .planner-entry").val(localStorage.getItem("hour9"));
    $("#hour10 .planner-entry").val(localStorage.getItem("hour10"));
    $("#hour11 .planner-entry").val(localStorage.getItem("hour11"));
    $("#hour12 .planner-entry").val(localStorage.getItem("hour12"));
    $("#hour13 .planner-entry").val(localStorage.getItem("hour13"));
    $("#hour14 .planner-entry").val(localStorage.getItem("hour14"));
    $("#hour15 .planner-entry").val(localStorage.getItem("hour15"));
    $("#hour16 .planner-entry").val(localStorage.getItem("hour16"));
    $("#hour17 .planner-entry").val(localStorage.getItem("hour17"));
}
currentTimeTracker()