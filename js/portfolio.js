'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
}

/*
$(".img-thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#CCCC78")
	console.log("Correct!");
}*/
/*
$("p").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).css("color", "#78CCA2")
	console.log("Changed!");
}*/

$("h2").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).parent().toggle();
}
$("p").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).parent().toggle();
}