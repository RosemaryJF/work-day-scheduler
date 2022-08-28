// Retrieves current day/time and applies as text in header
var currentDayDisplay = moment().format("LLLL");
$("#current-day").text(currentDayDisplay);

// Creation of click function on save button and appending of textarea input to local storage

$(document).ready(function(){
    
    $(".saveBtn").on("click", function () {
    
        // showStorageSave(function() {
        //     $(".local-storage-save").show("fast")
        //     }, 5000);

    var plannerEntry = $(this).siblings(".planner-entry").val();
    plannerEntry = $.trim(plannerEntry);
    console.log(plannerEntry);

    localStorage.setItem("planner-entry", JSON.stringify(plannerEntry));

 })

})






// Function to add/remove classes for color coded time blocks
function currentTimeTracker() {
    //Retrieval of the current time from Moment.js
    var currentTime = moment().hour();

    // Function that loops over the HTML timeblocks to determine what class to apply
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        //If statement to set classes if time blocks are less than the current hour
        if (timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        // Else is statement to set classes if time blocks match the current hour
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        //Else statement to set classes if time blocks are more than current hour
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })

    // Returns planner entries from local storage if page is reloaded.
    $("#hour9 .planner-entry").val(localStorage.getItem('planner-entry'));

}
currentTimeTracker()

