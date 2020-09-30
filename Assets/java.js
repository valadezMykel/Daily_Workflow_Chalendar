console.log($("#currentDay"))

let today = $("#currentDay");
let currentHour = moment().format("H");

today.text(moment());

// when the page loads it updates the css classes on the inputs based on the current hour
$("input").each(function(){
    // spanish for time
    let elTime = $(this).data("time");
    let savedText = localStorage.getItem(elTime);
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
        localStorage.setItem(timeKey, submitTextDiv.value)
    }
})
