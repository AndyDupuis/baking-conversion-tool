
//currently it thinks that all the fields are not empty strings based on their id, need to set variables first?


	$("#convertButton").click(function(){
	
		if ($("#ingredient").val() == ""){
				$("#ingredientError").addClass("alert alert-danger");
				$("#ingredientError").html("Please enter an ingredient.");
		} else {
			$("#ingredientError").hide();
		}

		if ($("#convertFrom").val() == ""){
				$("#convertFromError").addClass("alert alert-danger");
				$("#convertFromError").html("This field is required.");
		} else {
			$("#convertFromError").hide();
		}

		if ($("#convertTo").val() == ""){
				$("#convertToError").addClass("alert alert-danger");
				$("#convertToError").html("This field is required.");
		} else {
			$("#convertToError").hide();
		}

		if ($("#enteredValue").val() == ""){
				$("#enteredValueError").addClass("alert alert-danger");
				$("#enteredValueError").html("Please enter a value.");
		} else {
			$("#enteredValueError").hide();
		}
		
	});




/*
var ingredient = "";
		var convertFrom = "";
		var convertTo = "";
		var enteredValue = "";
		var g = "";
		var o = "";
		var c = "";
		var result = "";

		//error message functions
		function clearErrorMessages() {
			document.getElementById("ingredientError").innerHTML = "";
			document.getElementById("convertFromError").innerHTML = "";
			document.getElementById("convertToError").innerHTML = "";
			document.getElementById("enteredValueError").innerHTML = "";
		}
	
		//general calculations
		function gramsToOunces() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g * 0.035;
			document.getElementById("result").innerHTML = g + " g = " + result.toFixed(3) + " oz";
		}
		function ouncesToGrams() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o * 28.35;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " g";
		}

		
		//calculations for flour
		function flourGramsToCups() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g / 120;
			document.getElementById("result").innerHTML = g + " g = " + result.toFixed(3) + " cups";
		}
		function flourOuncesToCups() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o / 4.25;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " cups";
		}
		function flourCupsToGrams() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 120;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " g";
		}
		function flourCupsToOunces() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 4.25;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " oz";
		}
		
		//calculations for granulated and brown sugar
		function sugarGramsToCups() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g / 200;
			document.getElementById("result").innerHTML = g + " g = " + result.toFixed(3) + " cups";
		}
		function sugarOuncesToCups() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o / 7.1;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " cups";
		}
		function sugarCupsToGrams() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 200;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " g";
		}
		function sugarCupsToOunces() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 7.1;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " oz";
		}
		
		
		//calculations for confectioner's sugar
		function confecSugarGramsToCups() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g / 125;
			document.getElementById("result").innerHTML = g + " grams = " + result.toFixed(3) + " cups";
		}
		function confecSugarOuncesToCups() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o / 4;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " cups";
		}
		function confecSugarCupsToGrams() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 125;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " g";
		}
		function confecSugarCupsToOunces() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 4;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " oz";
		}
		
		//calculations for cocoa
		function cocoaGramsToCups() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g / 118;
			document.getElementById("result").innerHTML = g + " grams = " + result.toFixed(3) + " cups";
		}
		function cocoaOuncesToCups() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o / 4.16;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " cups";
		}
		function cocoaCupsToGrams() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 118;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " g";
		}
		function cocoaCupsToOunces() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 4.16;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " oz";
		}
		
		//calculations for butter
		function butterGramsToCups() {
			clearErrorMessages();
			g = document.getElementById("enteredValue").value;
			result = g / 227;
			document.getElementById("result").innerHTML = g + " grams = " + result.toFixed(3) + " cups";
		}
		function butterOuncesToCups() {
			clearErrorMessages();
			o = document.getElementById("enteredValue").value;
			result = o / 8;
			document.getElementById("result").innerHTML = o + " oz = " + result.toFixed(3) + " cups";
		}
		function butterCupsToGrams() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 227;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " g";
		}
		function butterCupsToOunces() {
			clearErrorMessages();
			c = document.getElementById("enteredValue").value;
			result = c * 8;
			document.getElementById("result").innerHTML = c + " cups = " + result.toFixed(3) + " oz";
		}


		
		document.getElementById("convert").onclick = function() {
			ingredient = document.getElementById("ingredient").value;
			convertFrom = document.getElementById("convertFrom").value;
			convertTo = document.getElementById("convertTo").value;
			enteredValue = document.getElementById("enteredValue").value
			
			if (ingredient == "") {
				document.getElementById("result").innerHTML = "";
				document.getElementById("ingredientError").innerHTML = "Please choose an ingredient.";
			}
			else if (convertFrom == "") {
				document.getElementById("result").innerHTML = "";
				document.getElementById("convertFromError").innerHTML = "Please choose your units.";
			}
			else if (convertTo == "") {
				document.getElementById("result").innerHTML = "";
				document.getElementById("convertToError").innerHTML = "Please choose your units.";
			}
			else if (convertTo == convertFrom) {
				document.getElementById("result").innerHTML = "";
				alert("Oops! You chose the same units twice. Please try again.");
			}
			else if (enteredValue == "") {
				document.getElementById("result").innerHTML = "";
				document.getElementById("enteredValueError").innerHTML = "Please enter a value.";
			}
			else if (isNaN(enteredValue)) {
				document.getElementById("result").innerHTML = "";
				document.getElementById("enteredValueError").innerHTML = "Please enter a value.";
			}
		
			else if (ingredient == "flour" || ingredient == "cakeFlour" || ingredient == "wwFlour" ) {
					if (convertFrom == "ounces" && convertTo == "grams") {
						ouncesToGrams();
					}
					else if (convertFrom == "grams" && convertTo == "ounces") {
						gramsToOunces();
					}
					else if (convertFrom == "ounces" && convertTo == "cups") {
						flourOuncesToCups();
					}
					else if (convertFrom == "grams" && convertTo == "cups") {
						flourGramsToCups();
					}
					else if (convertFrom == "cups" && convertTo == "grams") {
						flourCupsToGrams();
					}
					else if (convertFrom == "cups" && convertTo == "ounces") {
						flourCupsToOunces();
					}
					else {
						alert("Something went wrong! Please reload the page and try again.");
					}
			}
			else if (ingredient == "granSugar" || ingredient == "brownSugar") {
					if (convertFrom == "ounces" && convertTo == "grams") {
						ouncesToGrams();
					}
					else if (convertFrom == "grams" && convertTo == "ounces") {
						gramsToOunces();
					}
					else if (convertFrom == "ounces" && convertTo == "cups") {
						sugarOuncesToCups();
					}
					else if (convertFrom == "grams" && convertTo == "cups") {
						sugarGramsToCups();
					}
					else if (convertFrom == "cups" && convertTo == "grams") {
						sugarCupsToGrams();
					}
					else if (convertFrom == "cups" && convertTo == "ounces") {
						sugarCupsToOunces();
					}
					else {
						alert("Something went wrong! Please reload the page and try again.");
					}
			}
			else if (ingredient == "confecSugar") {
					if (convertFrom == "ounces" && convertTo == "grams") {
						ouncesToGrams();
					}
					else if (convertFrom == "grams" && convertTo == "ounces") {
						gramsToOunces();
					}
					else if (convertFrom == "ounces" && convertTo == "cups") {
						confecSugarOuncesToCups();
					}
					else if (convertFrom == "grams" && convertTo == "cups") {
						confecSugarGramsToCups();
					}
					else if (convertFrom == "cups" && convertTo == "grams") {
						confecSugarCupsToGrams();
					}
					else if (convertFrom == "cups" && convertTo == "ounces") {
						confecSugarCupsToOunces();
					}
					else {
						alert("Something went wrong! Please reload the page and try again.");
					}
			}
			else if (ingredient == "cocoa") {
					if (convertFrom == "ounces" && convertTo == "grams") {
						ouncesToGrams();
					}
					else if (convertFrom == "grams" && convertTo == "ounces") {
						gramsToOunces();
					}
					else if (convertFrom == "ounces" && convertTo == "cups") {
						cocoaOuncesToCups();
					}
					else if (convertFrom == "grams" && convertTo == "cups") {
						cocoaGramsToCups();
					}
					else if (convertFrom == "cups" && convertTo == "grams") {
						cocoaCupsToGrams();
					}
					else if (convertFrom == "cups" && convertTo == "ounces") {
						cocoaCupsToOunces();
					}
					else {
						alert("Something went wrong! Please reload the page and try again.");
					}
			}
			else if (ingredient == "butter") {
					if (convertFrom == "ounces" && convertTo == "grams") {
						ouncesToGrams();
					}
					else if (convertFrom == "grams" && convertTo == "ounces") {
						gramsToOunces();
					}
					else if (convertFrom == "ounces" && convertTo == "cups") {
						butterOuncesToCups();
					}
					else if (convertFrom == "grams" && convertTo == "cups") {
						butterGramsToCups();
					}
					else if (convertFrom == "cups" && convertTo == "grams") {
						butterCupsToGrams();
					}
					else if (convertFrom == "cups" && convertTo == "ounces") {
						butterCupsToOunces();
					}
					else {
						alert("Something went wrong! Please reload the page and try again.");
					}
			}
			else {
				alert("Something went wrong! Please reload the page and try again.");
			}	
		}
	*/	

	function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(email);
	}

	$("#submitButton").click(function() {
	
		var fieldsMissing = "";
		var errorMessage = "";
	
		if($("#email").val() == ""){
			fieldsMissing += "<br>Email";
		}
		if($("#firstName").val() == ""){
			fieldsMissing += "<br>First Name";
		}
		if($("#lastName").val() == ""){
			fieldsMissing += "<br>Last Name";
		}
		if($("#subject").val() == ""){
			fieldsMissing += "<br>Subject";
		} 
		if($("#message").val() == ""){
			fieldsMissing += "<br>Message";
		}

		if (fieldsMissing != ""){
			errorMessage += "<p>The following field(s) are missing:" + fieldsMissing;
		}

		if(isEmail($("#email").val()) == false){
			errorMessage += "<p>Your email address is not valid</p>";
		}

		if (errorMessage != ""){
			$("#errorMessage").addClass("alert alert-danger");
			$("#errorMessage").html(errorMessage);
		} else {
			$("#errorMessage").hide();
			$("#successMessage").addClass("alert alert-success");
			$("#successMessage").show();
		}

	});



		
