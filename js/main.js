jQuery(document).ready(function($) {

 // Cylinder Calculations by Mufaro Kaseke

	 $("#submit").on("click" , function () {

	 	// Initiate Variables 
	 	var radius ;
	 	var height ;
	 	var surfaceArea ;
	 	var volume ;

	 	// Capture Values
	 	radius = $("#radius").val();
	 	height = $("#height").val();

	 	// Calculate
	 	surfaceArea = ((Math.PI * Math.pow(radius , 2) ) * 2) + ((Math.PI * (radius * 2)) * height) ;
	    volume = ((Math.PI * Math.pow(radius , 2)) * height) ;

	    // Display Answer
	 	$("#answer-panel .srfarea").html("Surface Area = " + surfaceArea + " units<sup>2</sup>");
	 	$("#answer-panel .volume").html("Volume = " + volume + " units<sup>3</sup>") ;

	 });


});