// Retrieves current day/time and applies as text in header
var currentDayDisplay = moment().format("LLLL");
$("#current-day").text(currentDayDisplay);

// Creation of click function on save button and appending of text input to local storage

//   $( ".saveBtn" ).click(function() {
//     console.log("clicked!")
//     var text = document.getElementsByTagName("textarea").name
//      console.log(text.value);   
// })
$(document).ready(function(){
    
    $(".saveBtn").on("click", function () {
    console.log("clicked!");
   
    var plannerEntry = $(this).siblings(".planner-entry").val();
    plannerEntry = $.trim(plannerEntry);
    console.log(plannerEntry);

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
}
currentTimeTracker()

// var plannerEntry = document.getElementsByClassName("planner-entry").value;
// console.log(plannerEntry)

// var saveBtn = document.getElementsByClassName("saveBtn")
// function saveBtnClicked(){
//     console.log("clicked!")
//      var text = document.getElementsByTagName("textArea").value
//      console.log(text);   
//      saveBtn.addEventListener("click", saveBtnClicked())
// }

// Function local storage save