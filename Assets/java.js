
let currentHour = moment().format("H");
let dayKey = moment().format("L");

console.log(dayKey);
$("#currentDay").text(moment());

// when the page loads it updates the css classes on the inputs based on the current hour
$("input").each(function(){
    // text retrieval is also based on the day it was made so each day has new blank text
    let elTime = $(this).data("time");
    let theKey = dayKey+" "+elTime;
    let savedText = localStorage.getItem(theKey);
    if(elTime == currentHour){
        $(this).addClass("present");
        $(this).val(savedText);
    }
    else if(elTime > currentHour){
        $(this).addClass("future");
        $(this).val(savedText);
    }
    else{
        $(this).addClass("past");
        $(this).val(savedText);
    };
});

// listens for button clicks and saves text values to local storage
$(".row").on("click", function(event){
    if(event.target.matches("button")){
        let submitTextDiv = event.target.parentElement.children[1];
        let timeKey = submitTextDiv.getAttribute("data-time");
        let theKey = dayKey+" "+timeKey;
        localStorage.setItem(theKey, submitTextDiv.value)
    }
})
