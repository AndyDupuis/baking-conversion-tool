
	
	var measurementErrors = 0;
	var ingredient = "";
	var convertFrom = "";
	var convertTo = "";
	var enteredValue = "";
	var result = "";

	var ingredientType // 1 = dry, 2 = liquid

	
	function convertDryIngredientVolume(units_from, units_to, ingredient, value) {

	} 

	function convertLiquidIngredientVolume(units_from, units_to, ingredient, value) {

	}

	function convertByWeight(units_from, units_to, ingredient, value) {

	}

	function filterDropdownById(dropdownListId, ingredientType) {

		$("#" + ingredientType).removeAttr("disabled");

	}

	function filterUnitOptions() {

		ingredientType = $("#ingredient").children(":selected").val();
		
		console.log(ingredientType)


	}



//when an ingredient is selected and the "Ok" button is clicked, allow the rest of the form to become clickable (un-disable the fields), and the ingredient dropdown becomes disabled
	$("#confirmIngredient").click(function(){

		filterUnitOptions();

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
	});
		




// 	//calculation functions
// 	function cupsToTeaspoons(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 48;
// 		$("#result").val(result);		
// 	}
// 	function cupsToTablespoons(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 16;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToCups(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 48;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToTablespoons(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 3;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToCups(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 16;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToTeaspoons(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons * 3;
// 		$("#result").val(result);
// 	}
// 	function gramsToOunces(){
// 		var grams = $("#enteredValue").val();
// 		result = grams / 28.35;
// 		$("#result").val(result);
// 	}
// 	function gramsToPounds(){
// 		var grams = $("#enteredValue").val();
// 		result = grams / 454;
// 		$("#result").val(result);
// 	}
// 	function ouncesToGrams(){
// 		var ounces = $("#enteredValue").val();
// 		result = ounces * 28.35;
// 		$("#result").val(result);
// 	}
// 	function ouncesToPounds(){
// 		var ounces = $("#enteredValue").val();
// 		result = ounces / 16;
// 		$("#result").val(result);
// 	}
// 	function poundsToGrams(){
// 		var pounds = $("#enteredValue").val();
// 		result = pounds * 454;
// 		$("#result").val(result);
// 	}
// 	function poundsToOunces(){
// 		var pounds = $("#enteredValue").val();
// 		result = pounds * 16;
// 		$("#result").val(result);
// 	}
// 	function gramsToCups(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var grams = $("#enteredValue").val();
// 		result = grams / gramsPerCup;
// 		$("#result").val(result);
// 	}
// 	function gramsToTeaspoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var grams = $("#enteredValue").val();
// 		result = grams / (gramsPerCup/48);
// 		$("#result").val(result);
// 	}
// 	function gramsToTablespoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var grams = $("#enteredValue").val();
// 		result = grams / (gramsPerCup/16);
// 		$("#result").val(result);
// 	}
// 	function ouncesToCups(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var ounces = $("#enteredValue").val();
// 		result = ounces / (gramsPerCup/28.35);
// 		$("#result").val(result);
// 	}
// 	function ouncesToTeaspoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var ounces = $("#enteredValue").val();
// 		result = ounces / (gramsPerCup/1361);
// 		$("#result").val(result);
// 	}
// 	function ouncesToTablespoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var ounces = $("#enteredValue").val();
// 		result = ounces / (gramsPerCup/454);
// 		$("#result").val(result);
// 	}
// 	function poundsToCups(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var pounds = $("#enteredValue").val();
// 		result = pounds / (gramsPerCup/454);
// 		$("#result").val(result);
// 	}
// 	function poundsToTeaspoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var pounds = $("#enteredValue").val();
// 		result = (pounds / (gramsPerCup/454)) * 48;
// 		$("#result").val(result);
// 	}
// 	function poundsToTablespoons(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var pounds = $("#enteredValue").val();
// 		result = (pounds / (gramsPerCup/454)) * 16; 
// 		$("#result").val(result);
// 	}
// 	function cupsToGrams(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var cups = $("#enteredValue").val();
// 		result = gramsPerCup * cups;
// 		$("#result").val(result);
// 	}
// 	function cupsToOunces(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var cups = $("#enteredValue").val();
// 		result = (gramsPerCup / 28.35) * cups;
// 		$("#result").val(result);
// 	}
// 	function cupsToPounds(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var cups = $("#enteredValue").val();
// 		result = (pounds / (gramsPerCup/454)) * cups;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToGrams(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var teaspoons = $("#enteredValue").val();
// 		result = (gramsPerCup / 48) * teaspoons;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToOunces(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var teaspoons = $("#enteredValue").val();
// 		result = (gramsPerCup/1362) * teaspoons;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToPounds(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var teaspoons = $("#enteredValue").val();
// 		result = (gramsPerCup/21772) * teaspoons;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToGrams(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var tablespoons = $("#enteredValue").val();
// 		result = (gramsPerCup/16) * tablespoons;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToOunces(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var tablespoons = $("#enteredValue").val();
// 		result = (gramsPerCup/454) * tablespoons;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToPounds(){
// 		var gramsPerCup = $("#ingredient").children(":selected").attr("id");
// 		var tablespoons = $("#enteredValue").val();
// 		result = (gramsPerCup/7257) * tablespoons;
// 		$("#result").val(result);
// 	}
// 	function pintsToQuarts(){
// 		var pints = $("#enteredValue").val();
// 		result = pints / 2;
// 		$("#result").val(result);
// 	}
// 	function pintsToCups(){
// 		var pints = $("#enteredValue").val();
// 		result = pints * 2;
// 		$("#result").val(result);
// 	}
// 	function pintsToTeaspoons(){
// 		var pints = $("#enteredValue").val();
// 		result = pint * 96;
// 		$("#result").val(result);
// 	}
// 	function pintsToTablespoons(){
// 		var pints = $("#enteredValue").val();
// 		result = pints * 32;
// 		$("#result").val(result);
// 	}
// 	function pintsToLiters(){
// 		var pints = $("#enteredValue").val();
// 		result = pints / 2.113;
// 		$("#result").val(result);
// 	}
// 	function pintsToMilliliters(){
// 		var pints = $("#enteredValue").val();
// 		result = pints * 473;
// 		$("#result").val(result);
// 	}
// 	function quartsToPints(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 2;
// 		$("#result").val(result);
// 	}
// 	function quartsToCups(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 4;
// 		$("#result").val(result);
// 	}
// 	function quartsToTeaspoons(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 192;
// 		$("#result").val(result);
// 	}
// 	function quartsToTablespoons(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 64;
// 		$("#result").val(result);
// 	}
// 	function quartsToLiters(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts / 1.057;
// 		$("#result").val(result);
// 	}
// 	function quartsToMilliliters(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 946
// 		$("#result").val(result);
// 	}
// 	function cupsToPints(){
// 		var cups = $("#enteredValue").val();
// 		result = cups / 2;
// 		$("#result").val(result);
// 	}
// 	function cupsToQuarts(){
// 		var cups = $("#enteredValue").val();
// 		result = cups / 4;
// 		$("#result").val(result);
// 	}
// 	function cupsToTeaspoons(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 48;
// 		$("#result").val(result);
// 	}
// 	function cupsToTablespoons(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 16;
// 		$("#result").val(result);
// 	}
// 	function cupsToLiters(){
// 		var cups = $("#enteredValue").val();
// 		result = cups / 4.227;
// 		$("#result").val(result);
// 	}
// 	function cupsToMilliliters(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 237;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToPints(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 96;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToQuarts(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 192;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToCups(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 48;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToTablespoons(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 3;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToLiters(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 203;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToMilliliters(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons * 4.929;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToPints(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 32;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToQuarts(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 64;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToCups(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 16;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToTeaspoons(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons * 3;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToLiters(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 67.628;
// 		$("#result").val(result);
// 	}
// 	function litersToPints(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 2.113;
// 		$("#result").val(result);
// 	}
// 	function litersToQuarts(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 1.057;
// 		$("#result").val(result);
// 	}
// 	function litersToCups(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 4.227;
// 		$("#result").val(result);
// 	}
// 	function litersToTeaspoons(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 203;
// 		$("#result").val(result);
// 	}
// 	function litersToTablespoons(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 67.628;
// 		$("#result").val(result);
// 	}
// 	function litersToMilliliters(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 1000; 
// 		$("#result").val(result);
// 	}
// 	function millilitersToPints(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 473;
// 		$("#result").val(result);
// 	}
// 	function millilitersToQuarts(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 946;
// 		$("#result").val(result);
// 	}
// 	function millilitersToCups(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 237; 
// 		$("#result").val(result);
// 	}
// 	function millilitersToTeaspoons(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 4.929;
// 		$("#result").val(result);
// 	}
// 	function millilitersToTablespoons(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 14.787;
// 		$("#result").val(result);
// 	}
// 	function millilitersToLiters(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 1000; 
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToPints(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces / 16;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToQuarts(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces / 32;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToCups(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces / 8;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToTeaspoons(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces * 6;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToTablespoons(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces * 2;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToLiters(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces / 33.814;
// 		$("#result").val(result);
// 	}
// 	function fluidOuncesToMilliliters(){
// 		var fluidOunces = $("#enteredValue").val();
// 		result = fluidOunces * 29.574;
// 		$("#result").val(result);
// 	}
// 	function pintsToFluidOunces(){
// 		var pints = $("#enteredValue").val();
// 		result = pints * 16;
// 		$("#result").val(result);
// 	}
// 	function quartsToFluidOunces(){
// 		var quarts = $("#enteredValue").val();
// 		result = quarts * 32;
// 		$("#result").val(result);
// 	}
// 	function cupsToFluidOunces(){
// 		var cups = $("#enteredValue").val();
// 		result = cups * 8;
// 		$("#result").val(result);
// 	}
// 	function teaspoonsToFluidOunces(){
// 		var teaspoons = $("#enteredValue").val();
// 		result = teaspoons / 6;
// 		$("#result").val(result);
// 	}
// 	function tablespoonsToFluidOunces(){
// 		var tablespoons = $("#enteredValue").val();
// 		result = tablespoons / 2;
// 		$("#result").val(result);
// 	}
// 	function litersToFluidOunces(){
// 		var liters = $("#enteredValue").val();
// 		result = liters * 33.814;
// 		$("#result").val(result);
// 	}
// 	function millilitersToFluidOunces(){
// 		var milliliters = $("#enteredValue").val();
// 		result = milliliters / 29.574;
// 		$("#result").val(result);
// 	}
		
		




// 		//calculations - dry ingredients

// 		if ($("#ingredient").val() == "1"){

// 			var convertFrom = $("#convertFrom").val()
// 			var convertTo = $("#convertTo").val();
			
			
// 			if (convertFrom == "cups" && convertTo == "teaspoons"){
// 					cupsToTeaspoons();
// 			} else if (convertFrom == "cups" && convertTo == "tablespoons"){
// 					cupsToTablespoons();
// 			} else if (convertFrom == "teaspoons" && convertTo == "cups"){
// 					teaspoonsToCups();
// 			} else if (convertFrom == "teaspoons" && convertTo == "tablespoons"){
// 					teaspoonsToTablespoons();
// 			} else if (convertFrom == "tablespoons" && convertTo == "cups"){
// 					tablespoonsToCups();
// 			} else if (convertFrom == "tablespoons" && convertTo == "teaspoons"){
// 					tablespoonsToTeaspoons();
// 			} else if (convertFrom == "grams" && convertTo == "ounces"){
// 					gramsToOunces();
// 			} else if (convertFrom == "grams" && convertTo == "pounds"){
// 					gramsToPounds();
// 			} else if (convertFrom == "ounces" && convertTo == "grams"){
// 					ouncesToGrams();
// 			} else if (convertFrom == "ounces" && convertTo == "pounds"){
// 					ouncesToPounds();
// 			} else if (convertFrom == "pounds" && convertTo == "grams"){
// 					poundsToGrams();
// 			} else if (convertFrom == "pounds" && convertTo == "ounces"){
// 					poundsToOunces();
// 			} else if (convertFrom == "grams" && convertTo == "cups"){
// 					gramsToCups();
// 			} else if (convertFrom == "grams" && convertTo == "teaspoons"){
// 					gramsToTeaspoons();
// 			} else if (convertFrom == "grams" && convertTo == "tablespoons"){
// 					gramsToTablespoons();
// 			} else if (convertFrom == "ounces" && convertTo == "cups"){
// 					ouncesToCups();
// 			} else if (convertFrom == "ounces" && convertTo == "teaspoons"){
// 					ouncesToTeaspoons();
// 			} else if (convertFrom == "ounces" && convertTo == "tablespoons"){
// 					ouncesToTablespoons();
// 			} else if (convertFrom == "pounds" && convertTo == "cups"){
// 					poundsToCups();
// 			} else if (convertFrom == "pounds" && convertTo == "teaspoons"){
// 					poundsToTeaspoons();
// 			} else if (convertFrom == "pounds" && convertTo == "tablespoons"){
// 					poundsToTablespoons();
// 			} else if (convertFrom == "cups" && convertTo == "grams"){
// 					cupsToGrams();
// 			} else if (convertFrom == "cups" && convertTo == "ounces"){
// 					cupsToOunces();
// 			} else if (convertFrom == "cups" && convertTo == "pounds"){
// 					cupsToPounds();
// 			} else if (convertFrom == "teaspoons" && convertTo == "grams"){
// 					teaspoonsToGrams();
// 			} else if (convertFrom == "teaspoons" && convertTo == "ounces"){
// 					teaspoonsToOunces();
// 			} else if (convertFrom == "teaspoons" && convertTo == "pounds"){
// 					teaspoonsToPounds();
// 			} else if (convertFrom == "tablespoons" && convertTo == "grams"){
// 					tablespoonsToGrams();
// 			} else if (convertFrom == "tablespoons" && convertTo == "ounces"){
// 					tablespoonsToOunces();
// 			} else if (convertFrom == "tablespoons" && convertTo == "pounds"){
// 					tablespoonsToPounds();
// 			} else {
// 				alert ("An error has occurred. Please refresh the page and try again.") 
// 			}
// 		}
		

// 		//calculations - liquid ingredients

// 		if ($("#ingredient").val() == "2"){

// 			var convertFrom = $("#convertFrom").val()
// 			var convertTo = $("#convertTo").val();
			
// 			if (convertFrom == "pints" && $("#convertTo").val() == "quarts"){
// 					pintsToQuarts();
// 			} else if (convertFrom == "pints" && $convertTo == "cups"){
// 					pintsToCups();
// 			} else if (convertFrom == "pints" && convertTo == "teaspoons"){
// 					pintsToTeaspoons();
// 			} else if (convertFrom == "pints" && convertTo == "tablespoons"){
// 					pintsToTablespoons();
// 			} else if (convertFrom == "pints" && convertTo == "liters"){
// 					pintsToLiters();
// 			} else if (convertFrom == "pints" && convertTo == "milliliters"){
// 					pintsToMilliliters();
// 			} else if (convertFrom == "quarts" && convertTo == "pints"){
// 					quartsToPints();
// 			} else if (convertFrom == "quarts" && convertTo == "cups"){
// 					quartsToCups();
// 			} else if (convertFrom == "quarts" && convertTo == "teaspoons"){
// 					quartsToTeaspoons();
// 			} else if (convertFrom == "quarts" && convertTo == "tablespoons"){
// 					quartsToTablespoons();
// 			} else if (convertFrom == "quarts" && convertTo == "liters"){
// 					quartsToLiters();
// 			} else if (convertFrom == "quarts" && convertTo == "milliliters"){
// 					quartsToMilliliters();
// 			} else if (convertFrom == "cups" && convertTo == "pints"){
// 					cupsToPints();
// 			} else if (convertFrom == "cups" && convertTo == "quarts"){
// 					cupsToQuarts();
// 			} else if (convertFrom == "cups" && convertTo == "teaspoons"){
// 					cupsToTeaspoons();
// 			} else if (convertFrom == "cups" && convertTo == "tablespoons"){
// 					cupsToTablespoons();
// 			} else if (convertFrom == "cups" && convertTo == "liters"){
// 					cupsToLiters();
// 			} else if (convertFrom == "cups" && convertTo == "milliliters"){
// 					cupsToMilliliters();
// 			} else if (convertFrom == "teaspoons" && convertTo == "pints"){
// 					teaspoonsToPints();
// 			} else if (convertFrom == "teaspoons" && convertTo == "quarts"){
// 					teaspoonsToQuarts();
// 			} else if (convertFrom == "teaspoons" && convertTo == "cups"){
// 					teaspoonsToCups();
// 			} else if (convertFrom == "teaspoons" && convertTo == "tablespoons"){
// 					teaspoonsToTablespoons();
// 			} else if (convertFrom == "teaspoons" && convertTo == "liters"){
// 					teaspoonsToLiters();
// 			} else if (convertFrom == "teaspoons" && convertTo == "milliliters"){
// 					teaspoonsToMilliliters();
// 			} else if (convertFrom == "tablespoons" && convertTo == "pints"){
// 					tablespoonsToPints();
// 			} else if (convertFrom == "tablespoons" && convertTo == "quarts"){
// 					tablespoonsToQuarts();
// 			} else if (convertFrom == "tablespoons" && convertTo == "cups"){
// 					tablespoonsToCups();
// 			} else if (convertFrom == "tablespoons" && convertTo == "teaspoons"){
// 					tablespoonsToTeaspoons();
// 			} else if (convertFrom == "tablespoons" && convertTo == "liters"){
// 					tablespoonsToLiters();
// 			} else if (convertFrom == "tablespoons" && convertTo == "milliliters"){
// 					tablespoonsToMilliliters();
// 			} else if (convertFrom == "liters" && convertTo == "pints"){
// 					litersToPints();
// 			} else if (convertFrom == "liters" && convertTo == "quarts"){
// 					litersToQuarts();
// 			} else if (convertFrom == "liters" && convertTo == "cups"){
// 					litersToCups();
// 			} else if (convertFrom == "liters" && convertTo == "teaspoons"){
// 					litersToTeaspoons();
// 			} else if (convertFrom == "liters" && convertTo == "tablespoons"){
// 					litersToTablespoons();
// 			} else if (convertFrom == "liters" && convertTo == "milliliters"){
// 					litersToMilliliters();
// 			} else if (convertFrom == "milliliters" && convertTo == "pints"){
// 					millilitersToPints();
// 			} else if (convertFrom == "milliliters" && convertTo == "quarts"){
// 					millilitersToQuarts();
// 			} else if (convertFrom == "milliliters" && convertTo == "cups"){
// 					millilitersToCups();
// 			} else if (convertFrom == "milliliters" && convertTo == "teaspoons"){
// 					millilitersToTeaspoons();
// 			} else if (convertFrom == "milliliters" && convertTo == "tablespoons"){
// 					millilitersToTablespoons();
// 			} else if (convertFrom == "milliliters" && convertTo == "liters"){
// 					millilitersToLiters();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "pints"){
// 					fluidOuncesToPints();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "quarts"){
// 					fluidOuncesToQuarts();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "cups"){
// 					fluidOuncesToCups();
// 			} else if (convertFrom == "fluidOunces" && $convertTo == "teaspoons"){
// 					fluidOuncesToTeaspoons();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "tablespoons"){
// 					fluidOuncesToTablespoons();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "liters"){
// 					fluidOuncesToLiters();
// 			} else if (convertFrom == "fluidOunces" && convertTo == "milliliters"){
// 					fluidOuncesToMilliliters();
// 			} else if (convertFrom == "pints" && convertTo == "fluidOunces"){
// 					pintsToFluidOunces();
// 			} else if (convertFrom == "quarts" && convertTo == "fluidOunces"){
// 					quartsToFluidOunces();
// 			} else if (convertFrom == "cups" && convertTo == "fluidOunces"){
// 					cupsToFluidOunces();
// 			} else if (convertFrom == "teaspoons" && convertTo == "fluidOunces"){
// 					teaspoonsToFluidOunces();
// 			} else if (convertFrom == "tablespoons" && convertTo == "fluidOunces"){
// 					tablespoonsToFluidOunces();
// 			} else if (convertFrom == "liters" && convertTo == "fluidOunces"){
// 					litersToFluidOunces();
// 			} else if (convertFrom == "milliliters" && convertTo == "fluidOunces"){
// 					millilitersToFluidOunces();
// 			} else {
// 				alert ("An error has occurred. Please refresh the page and try again.")  
// 			}
// 		}


  