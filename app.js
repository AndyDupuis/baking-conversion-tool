
	var measurementErrors = 0;
	var ingredient = "";
	var convertFrom = "";
	var convertTo = "";
	var enteredValue = "";
	var result = "";

	//check if email is valid
	function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(email);
	}

	//filter dropdown lists by data-attribute based on the value of the option selected in previous dropdown (1 = dry ingredient, 2 = liquid ingredient)
	function filterSelectOptions(selectElement, attributeName, attributeValue) {
		if (selectElement.data("currentFilter") != attributeValue) {
			selectElement.data("currentFilter", attributeValue);
			var originalHTML = selectElement.data("originalHTML");
			if (originalHTML)
				selectElement.html(originalHTML)
			else {
				var clone = selectElement.clone();
				clone.children("option[selected]").removeAttr("selected");
				selectElement.data("originalHTML", clone.html());
			}
			if (attributeValue) {
				selectElement.children("option:not([" + attributeName + "='" + attributeValue + "'],:not([" + attributeName + "]))").remove();
			}
		}
	}


	//calculation functions
	function cupsToTeaspoons(){
		var cups = $("#enteredValue").val();
		result = cups * 48;
		$("#result").val(result);		
	}
	function cupsToTablespoons(){
		var cups = $("#enteredValue").val();
		result = cups * 16;
		$("#result").val(result);
	}
	function teaspoonsToCups(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 48;
		$("#result").val(result);
	}
	function teaspoonsToTablespoons(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 3;
		$("#result").val(result);
	}
	function tablespoonsToCups(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 16;
		$("#result").val(result);
	}
	function tablespoonsToTeaspoons(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons * 3;
		$("#result").val(result);
	}
	function gramsToOunces(){
		var grams = $("#enteredValue").val();
		result = grams / 28.35;
		$("#result").val(result);
	}
	function gramsToPounds(){
		var grams = $("#enteredValue").val();
		result = grams / 454;
		$("#result").val(result);
	}
	function ouncesToGrams(){
		var ounces = $("#enteredValue").val();
		result = ounces * 28.35;
		$("#result").val(result);
	}
	function ouncesToPounds(){
		var ounces = $("#enteredValue").val();
		result = ounces / 16;
		$("#result").val(result);
	}
	function poundsToGrams(){
		var pounds = $("#enteredValue").val();
		result = pounds * 454;
		$("#result").val(result);
	}
	function poundsToOunces(){
		var pounds = $("#enteredValue").val();
		result = pounds * 16;
		$("#result").val(result);
	}
	function gramsToCups(){
		var gramsPerCup = $("#ingredient").val();
		var grams = $("#enteredValue").val();
		result = grams / gramsPerCup;
		$("#result").val(result);
	}
	function gramsToTeaspoons(){
		var gramsPerCup = $("#ingredient").val();
		var grams = $("#enteredValue").val();
		result = grams / (gramsPerCup/48);
		$("#result").val(result);
	}
	function gramsToTablespoons(){
		var gramsPerCup = $("#ingredient").val();
		var grams = $("#enteredValue").val();
		result = grams / (gramsPerCup/16);
		$("#result").val(result);
	}
	function ouncesToCups(){
		var gramsPerCup = $("#ingredient").val();
		var ounces = $("#enteredValue").val();
		result = ounces / (gramsPerCup/28.35);
		$("#result").val(result);
	}
	function ouncesToTeaspoons(){
		var gramsPerCup = $("#ingredient").val();
		var ounces = $("#enteredValue").val();
		result = ounces / (gramsPerCup/1361);
		$("#result").val(result);
	}
	function ouncesToTablespoons(){
		var gramsPerCup = $("#ingredient").val();
		var ounces = $("#enteredValue").val();
		result = ounces / (gramsPerCup/454);
		$("#result").val(result);
	}
	function poundsToCups(){
		var gramsPerCup = $("#ingredient").val();
		var pounds = $("#enteredValue").val();
		result = pounds / (gramsPerCup/454);
		$("#result").val(result);
	}
	function poundsToTeaspoons(){
		var gramsPerCup = $("#ingredient").val();
		var pounds = $("#enteredValue").val();
		result = (pounds / (gramsPerCup/454)) * 48;
		$("#result").val(result);
	}
	function poundsToTablespoons(){
		var gramsPerCup = $("#ingredient").val();
		var pounds = $("#enteredValue").val();
		result = (pounds / (gramsPerCup/454)) * 16; 
		$("#result").val(result);
	}
	function cupsToGrams(){
		var gramsPerCup = $("#ingredient").val();
		var cups = $("#enteredValue").val();
		result = gramsPerCup * cups;
		$("#result").val(result);
	}
	function cupsToOunces(){
		var gramsPerCup = $("#ingredient").val();
		var cups = $("#enteredValue").val();
		result = (gramsPerCup / 28.35) * cups;
		$("#result").val(result);
	}
	function cupsToPounds(){
		var gramsPerCup = $("#ingredient").val();
		var cups = $("#enteredValue").val();
		result = (pounds / (gramsPerCup/454)) * cups;
		$("#result").val(result);
	}
	function teaspoonsToGrams(){
		var gramsPerCup = $("#ingredient").val();
		var teaspoons = $("#enteredValue").val();
		result = (gramsPerCup / 48) * teaspoons;
		$("#result").val(result);
	}
	function teaspoonsToOunces(){
		var gramsPerCup = $("#ingredient").val();
		var teaspoons = $("#enteredValue").val();
		result = (gramsPerCup/1362) * teaspoons;
		$("#result").val(result);
	}
	function teaspoonsToPounds(){
		var gramsPerCup = $("#ingredient").val();;
		var teaspoons = $("#enteredValue").val();
		result = (gramsPerCup/21772) * teaspoons;
		$("#result").val(result);
	}
	function tablespoonsToGrams(){
		var gramsPerCup = $("#ingredient").val();
		var tablespoons = $("#enteredValue").val();
		result = (gramsPerCup/16) * tablespoons;
		$("#result").val(result);
	}
	function tablespoonsToOunces(){
		var gramsPerCup = $("#ingredient").val();
		var tablespoons = $("#enteredValue").val();
		result = (gramsPerCup/454) * tablespoons;
		$("#result").val(result);
	}
	function tablespoonsToPounds(){
		var gramsPerCup = $("#ingredient").val();
		var tablespoons = $("#enteredValue").val();
		result = (gramsPerCup/7257) * tablespoons;
		$("#result").val(result);
	}
	function pintsToQuarts(){
		var pints = $("#enteredValue").val();
		result = pints / 2;
		$("#result").val(result);
	}
	function pintsToCups(){
		var pints = $("#enteredValue").val();
		result = pints * 2;
		$("#result").val(result);
	}
	function pintsToTeaspoons(){
		var pints = $("#enteredValue").val();
		result = pint * 96;
		$("#result").val(result);
	}
	function pintsToTablespoons(){
		var pints = $("#enteredValue").val();
		result = pints * 32;
		$("#result").val(result);
	}
	function pintsToLiters(){
		var pints = $("#enteredValue").val();
		result = pints / 2.113;
		$("#result").val(result);
	}
	function pintsToMilliliters(){
		var pints = $("#enteredValue").val();
		result = pints * 473;
		$("#result").val(result);
	}
	function quartsToPints(){
		var quarts = $("#enteredValue").val();
		result = quarts * 2;
		$("#result").val(result);
	}
	function quartsToCups(){
		var quarts = $("#enteredValue").val();
		result = quarts * 4;
		$("#result").val(result);
	}
	function quartsToTeaspoons(){
		var quarts = $("#enteredValue").val();
		result = quarts * 192;
		$("#result").val(result);
	}
	function quartsToTablespoons(){
		var quarts = $("#enteredValue").val();
		result = quarts * 64;
		$("#result").val(result);
	}
	function quartsToLiters(){
		var quarts = $("#enteredValue").val();
		result = quarts / 1.057;
		$("#result").val(result);
	}
	function quartsToMilliliters(){
		var quarts = $("#enteredValue").val();
		result = quarts * 946
		$("#result").val(result);
	}
	function cupsToPints(){
		var cups = $("#enteredValue").val();
		result = cups / 2;
		$("#result").val(result);
	}
	function cupsToQuarts(){
		var cups = $("#enteredValue").val();
		result = cups / 4;
		$("#result").val(result);
	}
	function cupsToTeaspoons(){
		var cups = $("#enteredValue").val();
		result = cups * 48;
		$("#result").val(result);
	}
	function cupsToTablespoons(){
		var cups = $("#enteredValue").val();
		result = cups * 16;
		$("#result").val(result);
	}
	function cupsToLiters(){
		var cups = $("#enteredValue").val();
		result = cups / 4.227;
		$("#result").val(result);
	}
	function cupsToMilliliters(){
		var cups = $("#enteredValue").val();
		result = cups * 237;
		$("#result").val(result);
	}
	function teaspoonsToPints(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 96;
		$("#result").val(result);
	}
	function teaspoonsToQuarts(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 192;
		$("#result").val(result);
	}
	function teaspoonsToCups(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 48;
		$("#result").val(result);
	}
	function teaspoonsToTablespoons(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 3;
		$("#result").val(result);
	}
	function teaspoonsToLiters(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 203;
		$("#result").val(result);
	}
	function teaspoonsToMilliliters(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons * 4.929;
		$("#result").val(result);
	}
	function tablespoonsToPints(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 32;
		$("#result").val(result);
	}
	function tablespoonsToQuarts(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 64;
		$("#result").val(result);
	}
	function tablespoonsToCups(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 16;
		$("#result").val(result);
	}
	function tablespoonsToTeaspoons(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons * 3;
		$("#result").val(result);
	}
	function tablespoonsToLiters(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 67.628;
		$("#result").val(result);
	}
	function litersToPints(){
		var liters = $("#enteredValue").val();
		result = liters * 2.113;
		$("#result").val(result);
	}
	function litersToQuarts(){
		var liters = $("#enteredValue").val();
		result = liters * 1.057;
		$("#result").val(result);
	}
	function litersToCups(){
		var liters = $("#enteredValue").val();
		result = liters * 4.227;
		$("#result").val(result);
	}
	function litersToTeaspoons(){
		var liters = $("#enteredValue").val();
		result = liters * 203;
		$("#result").val(result);
	}
	function litersToTablespoons(){
		var liters = $("#enteredValue").val();
		result = liters * 67.628;
		$("#result").val(result);
	}
	function litersToMilliliters(){
		var liters = $("#enteredValue").val();
		result = liters * 1000; 
		$("#result").val(result);
	}
	function millilitersToPints(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 473;
		$("#result").val(result);
	}
	function millilitersToQuarts(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 946;
		$("#result").val(result);
	}
	function millilitersToCups(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 237; 
		$("#result").val(result);
	}
	function millilitersToTeaspoons(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 4.929;
		$("#result").val(result);
	}
	function millilitersToTablespoons(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 14.787;
		$("#result").val(result);
	}
	function millilitersToLiters(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 1000; 
		$("#result").val(result);
	}
	function fluidOuncesToPints(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces / 16;
		$("#result").val(result);
	}
	function fluidOuncesToQuarts(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces / 32;
		$("#result").val(result);
	}
	function fluidOuncesToCups(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces / 8;
		$("#result").val(result);
	}
	function fluidOuncesToTeaspoons(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces * 6;
		$("#result").val(result);
	}
	function fluidOuncesToTablespoons(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces * 2;
		$("#result").val(result);
	}
	function fluidOuncesToLiters(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces / 33.814;
		$("#result").val(result);
	}
	function fluidOuncesToMilliliters(){
		var fluidOunces = $("#enteredValue").val();
		result = fluidOunces * 29.574;
		$("#result").val(result);
	}
	function pintsToFluidOunces(){
		var pints = $("#enteredValue").val();
		result = pints * 16;
		$("#result").val(result);
	}
	function quartsToFluidOunces(){
		var quarts = $("#enteredValue").val();
		result = quarts * 32;
		$("#result").val(result);
	}
	function cupsToFluidOunces(){
		var cups = $("#enteredValue").val();
		result = cups * 8;
		$("#result").val(result);
	}
	function teaspoonsToFluidOunces(){
		var teaspoons = $("#enteredValue").val();
		result = teaspoons / 6;
		$("#result").val(result);
	}
	function tablespoonsToFluidOunces(){
		var tablespoons = $("#enteredValue").val();
		result = tablespoons / 2;
		$("#result").val(result);
	}
	function litersToFluidOunces(){
		var liters = $("#enteredValue").val();
		result = liters * 33.814;
		$("#result").val(result);
	}
	function millilitersToFluidOunces(){
		var milliliters = $("#enteredValue").val();
		result = milliliters / 29.574;
		$("#result").val(result);
	}
		
		


//when an ingredient is chosen from the list, show unit options in convertFrom and convertTo lists based on whether it is a dry or liquid ingredient
	$("#ingredient").change( function() {
			filterSelectOptions($("#convertFrom"), "data-attribute", $(this).attr());
			filterSelectOptions($("#convertTo"), "data-attribute", $(this).attr());
		});


//when an ingredient is selected and the "Ok" button is clicked, allow the rest of the form to become clickable (un-disable the fields), and the ingredient dropdown becomes disabled
	$("#choseIngredient").click(function(){

		if ($("#ingredient").val() != ""){
				$("#ingredientError").hide();
				$("#convertFrom").removeAttr("disabled");
				$("#convertTo").removeAttr("disabled");
				$("#enteredValue").removeAttr("disabled");	
				$("#convertButton").removeAttr("disabled");
				$("#resetIngredient").removeAttr("disabled");
				$("#ingredient").attr("disabled", true);
				$("#choseIngredient").attr("disabled", true);
			} else {
				$("#ingredientError").addClass("alert alert-danger");
				$("#ingredientError").html("Please enter an ingredient.");
				$("#ingredientError").show();
				measurementErrors ++;
		} 
	});

//when the "Reset" button is clicked, set the convertFrom and convertTo dropdowns back to default and re-disable the fields, all except for the ingredient section which becomes clickable again
	$("#resetIngredient").click(function(){
			
			$("#convertFrom").attr("disabled", true);
			$("#convertFrom").val("");

			$("#convertTo").attr("disabled", true);
			$("#convertTo").val("");

			$("#enteredValue").attr("disabled", true);

			$("#convertButton").attr("disabled", true);

			$("#ingredient").removeAttr("disabled");
			$("#choseIngredient").removeAttr("disabled");
	});




//when the "Go!" button is clicked in the Measurement Converter, check for empty or invalid inputs and display relevant errors, then if all inputs are valid perform the calculation and display the result
	$("#convertButton").click(function(){
	
		//input error messages (empty fields, conflicting unit selection, or non-numeric value input)
			if ($("#convertFrom").val() == ""){
					$("#convertFromError").addClass("alert alert-danger");
					$("#convertFromError").html("This field is required.");
					$("#convertFromError").show();
					measurementErrors ++;
			} else {
				$("#convertFromError").hide();
			}
			if ($("#convertTo").val() == ""){
					$("#convertToError").addClass("alert alert-danger");
					$("#convertToError").html("This field is required.");
					$("#convertToError").show();
					measurementErrors ++;
			} else if ($("#convertTo").val() == $("#convertFrom").val()){
					$("#convertToError").addClass("alert alert-danger");
					$("#convertToError").html("Are you sure? Please select two different units.");
					$("#convertToError").show();
					measurementErrors ++;
			} else {
				$("#convertToError").hide();
			}
			if ($("#enteredValue").val() == "" || isNaN($("#enteredValue").val())){
					$("#enteredValueError").addClass("alert alert-danger");
					$("#enteredValueError").html("Please enter a number.");
					$("#enteredValueError").show();
					measurementErrors ++;
			} else {
				$("#enteredValueError").hide();
			}

				//if 2 or more input errors are displayed, move the form up on the image so that it doesn't flow out of the section
					if (measurementErrors >= 2) {
							$("#measuringCups").css("padding-top", "10%");
					} else {
						$("#measuringCups").css("padding-top", "");
					}



		
		//calculations - dry ingredients

		if ($("#ingredient").attr() == "1"){
			
			
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "teaspoons"){
					cupsToTeaspoons();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "tablespoons"){
					cupsToTablespoons();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "cups"){
					teaspoonsToCups();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "tablespoons"){
					teaspoonsToTablespoons();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "cups"){
					tablespoonsToCups();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "teaspoons"){
					tablespoonsToTeaspoons();
			} else if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "ounces"){
					gramsToOunces();
			} else if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "pounds"){
					gramsToPounds();
			} else if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "grams"){
					ouncesToGrams();
			} else if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "pounds"){
					ouncesToPounds();
			} else if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "grams"){
					poundsToGrams();
			} else if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "ounces"){
					poundsToOunces();
			} else if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "cups"){
					gramsToCups();
			} else if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "teaspoons"){
					gramsToTeaspoons();
			} else if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "tablespoons"){
					gramsToTablespoons();
			} else if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "cups"){
					ouncesToCups();
			} else if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "teaspoons"){
					ouncesToTeaspoons();
			} else if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "tablespoons"){
					ouncesToTablespoons();
			} else if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "cups"){
					poundsToCups();
			} else if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "teaspoons"){
					poundsToTeaspoons();
			} else if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "tablespoons"){
					poundsToTablespoons();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "grams"){
					cupsToGrams();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "ounces"){
					cupsToOunces();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "pounds"){
					cupsToPounds();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "grams"){
					teaspoonsToGrams();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "ounces"){
					teaspoonsToOunces();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "pounds"){
					teaspoonsToPounds();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "grams"){
					tablespoonsToGrams();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "ounces"){
					tablespoonsToOunces();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "pounds"){
					tablespoonsToPounds();
			} else {
				// error message here? alert indicating to refresh page?  
			}
		}
		

		//calculations - liquid ingredients

		if ($("#ingredient").attr() == "2"){

			
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "quarts"){
					pintsToQuarts();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "cups"){
					pintsToCups();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "teaspoons"){
					pintsToTeaspoons();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "tablespoons"){
					pintsToTablespoons();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "liters"){
					pintsToLiters();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "milliliters"){
					pintsToMilliliters();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "pints"){
					quartsToPints();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "cups"){
					quartsToCups();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "teaspoons"){
					quartsToTeaspoons();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "tablespoons"){
					quartsToTablespoons();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "liters"){
					quartsToLiters();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "milliliters"){
					quartsToMilliliters();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "pints"){
					cupsToPints();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "quarts"){
					cupsToQuarts();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "teaspoons"){
					cupsToTeaspoons();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "tablespoons"){
					cupsToTablespoons();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "liters"){
					cupsToLiters();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "milliliters"){
					cupsToMilliliters();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "pints"){
					teaspoonsToPints();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "quarts"){
					teaspoonsToQuarts();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "cups"){
					teaspoonsToCups();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "tablespoons"){
					teaspoonsToTablespoons();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "liters"){
					teaspoonsToLiters();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "milliliters"){
					teaspoonsToMilliliters();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "pints"){
					tablespoonsToPints();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "quarts"){
					tablespoonsToQuarts();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "cups"){
					tablespoonsToCups();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "teaspoons"){
					tablespoonsToTeaspoons();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "liters"){
					tablespoonsToLiters();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "milliliters"){
					tablespoonsToMilliliters();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "pints"){
					litersToPints();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "quarts"){
					litersToQuarts();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "cups"){
					litersToCups();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "teaspoons"){
					litersToTeaspoons();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "tablespoons"){
					litersToTablespoons();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "milliliters"){
					litersToMilliliters();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "pints"){
					millilitersToPints();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "quarts"){
					millilitersToQuarts();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "cups"){
					millilitersToCups();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "teaspoons"){
					millilitersToTeaspoons();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "tablespoons"){
					millilitersToTablespoons();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "liters"){
					millilitersToLiters();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "pints"){
					fluidOuncesToPints();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "quarts"){
					fluidOuncesToQuarts();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "cups"){
					fluidOuncesToCups();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "teaspoons"){
					fluidOuncesToTeaspoons();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "tablespoons"){
					fluidOuncesToTablespoons();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "liters"){
					fluidOuncesToLiters();
			} else if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "milliliters"){
					fluidOuncesToMilliliters();
			} else if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "fluidOunces"){
					pintsToFluidOunces();
			} else if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "fluidOunces"){
					quartsToFluidOunces();
			} else if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "fluidOunces"){
					cupsToFluidOunces();
			} else if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "fluidOunces"){
					teaspoonsToFluidOunces();
			} else if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "fluidOunces"){
					tablespoonsToFluidOunces();
			} else if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "fluidOunces"){
					litersToFluidOunces();
			} else if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "fluidOunces"){
					millilitersToFluidOunces();
			} else {
				// error message here? alert indicating to refresh page?  
			}
		}


	});




		


//when the "Send" button is clicked in the Contact Us form, check for empty or invalid inputs and display relevant errors, then if all inputs are valid show the success message
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



		
