
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
		var grams = $("#enteredValue").val();
		result = grams / 340;
		$("#result").val(result);
	}
	function gramsToTeaspoons(){
		var grams = $("#enteredValue").val();
		result = grams / 4.26;
		$("#result").val(result);
	}
	function gramsToTablespoons(){
		var grams = $("#enteredValue").val();
		result = grams /15;
		$("#result").val(result);
	}
	function ouncesToCups(){
		var ounces = $("#enteredValue").val();
		result = ounces / 8;
		$("#result").val(result);
	}
	function ouncesToTeaspoons(){
		var ounces = $("#enteredValue").val();
		result = ounces * 6;
		$("#result").val(result);
	}
	function ouncesToTablespoons(){
		var ounces = $("#enteredValue").val();
		result = ounces * 2;
		$("#result").val(result);
	}
	function poundsToCups(){
		var pounds = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function poundsToTeaspoons(){
		var pounds = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function poundsToTablespoons(){
		var pounds = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToGrams(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToOunces(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToPounds(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToGrams(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToOunces(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToPounds(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToGrams(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToOunces(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToPounds(){
		var tablespoons = $("#enteredValue").val();
		result =
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
		result =
		$("#result").val(result);
	}
	function quartsToLiters(){
		var quarts = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function quartsToMilliliters(){
		var quarts = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToPints(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToQuarts(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToTeaspoons(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToTablespoons(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToLiters(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToMilliliters(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToPints(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToQuarts(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToCups(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToTablespoons(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToLiters(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToMilliliters(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToPints(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToQuarts(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToCups(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToTeaspoons(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToLiters(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToPints(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToQuarts(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToCups(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToTeaspoons(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToTablespoons(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToMilliliters(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToPints(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToQuarts(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToCups(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToTeaspoons(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToTablespoons(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToLiters(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToPints(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToQuarts(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToCups(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToTeaspoons(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToTablespoons(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToLiters(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function fluidOuncesToMilliliters(){
		var fluidOunces = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function pintsToFluidOunces(){
		var pints = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function quartsToFluidOunces(){
		var quarts = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function cupsToFluidOunces(){
		var cups = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function teaspoonsToFluidOunces(){
		var teaspoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function tablespoonsToFluidOunces(){
		var tablespoons = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function litersToFluidOunces(){
		var liters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
	function millilitersToFluidOunces(){
		var milliliters = $("#enteredValue").val();
		result =
		$("#result").val(result);
	}
		
		


//when an ingredient is chosen from the list, show unit options in convertFrom and convertTo lists based on whether it is a dry or liquid ingredient
	$("#ingredient").change( function() {
			filterSelectOptions($("#convertFrom"), "data-attribute", $(this).val());
			filterSelectOptions($("#convertTo"), "data-attribute", $(this).val());
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

		if ($("#ingredient").val() == "1"){
			
			//non-weight
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "teaspoons"){
					cupsToTeaspoons();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "tablespoons"){
					cupsToTablespoons();
			}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "cups"){
					teaspoonsToCups();
			}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "tablespoons"){
					teaspoonsToTablespoons();
			}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "cups"){
					tablespoonsToCups();
			}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "teaspoons"){
					tablespoonsToTeaspoons();
			}

			//weight only
			if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "ounces"){
					gramsToOunces();
				}
			if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "pounds"){
					gramsToPounds();
				}
			if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "grams"){
					ouncesToGrams();
				}
			if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "pounds"){
					ouncesToPounds();
				}
			if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "grams"){
					poundsToGrams();
				}
			if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "ounces"){
					poundsToOunces();
				}

			//non-weight to weight, and vice versa
			if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "cups"){
					gramsToCups();
				}
			if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "teaspoons"){
					gramsToTeaspoons();
				}
			if ($("#convertFrom").val() == "grams" && $("#convertTo").val() == "tablespoons"){
					gramsToTablespoons();
				}
			if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "cups"){
					ouncesToCups();
				}
			if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "teaspoons"){
					ouncesToTeaspoons();
				}
			if ($("#convertFrom").val() == "ounces" && $("#convertTo").val() == "tablespoons"){
					ouncesToTablespoons();
				}
			if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "cups"){
					poundsToCups();
				}
			if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "teaspoons"){
					poundsToTeaspoons();
				}
			if ($("#convertFrom").val() == "pounds" && $("#convertTo").val() == "tablespoons"){
					poundsToTablespoons();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "grams"){
					cupsToGrams();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "ounces"){
					cupsToOunces();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "pounds"){
					cupsToPounds();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "grams"){
					teaspoonsToGrams();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "ounces"){
					teaspoonsToOunces();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "pounds"){
					teaspoonsToPounds();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "grams"){
					tablespoonsToGrams();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "ounces"){
					tablespoonsToOunces();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "pounds"){
					tablespoonsToPounds();
				}
		}
			





		//calculations - liquid ingredients

		if ($("#ingredient").val() == "2"){

			//non-weight
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "quarts"){
					pintsToQuarts();
				}
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "cups"){
					pintsToCups();
				}
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "teaspoons"){
					pintsToTeaspoons();
				}
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "tablespoons"){
					pintsToTablespoons();
				}
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "liters"){
					pintsToLiters();
				}
			if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "milliliters"){
					pintsToMilliliters();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "pints"){
					quartsToPints();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "cups"){
					quartsToCups();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "teaspoons"){
					quartsToTeaspoons();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "tablespoons"){
					quartsToTablespoons();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "liters"){
					quartsToLiters();
				}
			if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "milliliters"){
					quartsToMilliliters();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "pints"){
					cupsToPints();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "quarts"){
					cupsToQuarts();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "teaspoons"){
					cupsToTeaspoons();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "tablespoons"){
					cupsToTablespoons();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "liters"){
					cupsToLiters();
				}
			if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "milliliters"){
					cupsToMilliliters();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "pints"){
					teaspoonsToPints();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "quarts"){
					teaspoonsToQuarts();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "cups"){
					teaspoonsToCups();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "tablespoons"){
					teaspoonsToTablespoons();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "liters"){
					teaspoonsToLiters();
				}
			if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "milliliters"){
					teaspoonsToMilliliters();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "pints"){
					tablespoonsToPints();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "quarts"){
					tablespoonsToQuarts();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "cups"){
					tablespoonsToCups();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "teaspoons"){
					tablespoonsToTeaspoons();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "liters"){
					tablespoonsToLiters();
				}
			if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "milliliters"){
					tablespoonsToMilliliters();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "pints"){
					litersToPints();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "quarts"){
					litersToQuarts();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "cups"){
					litersToCups();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "teaspoons"){
					litersToTeaspoons();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "tablespoons"){
					litersToTablespoons();
				}
			if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "milliliters"){
					litersToMilliliters();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "pints"){
					millilitersToPints();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "quarts"){
					millilitersToQuarts();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "cups"){
					millilitersToCups();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "teaspoons"){
					millilitersToTeaspoons();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "tablespoons"){
					millilitersToTablespoons();
				}
			if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "liters"){
					millilitersToLiters();
				}
			
			//non-weight to weight, and vice versa
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "pints"){
					fluidOuncesToPints();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "quarts"){
					fluidOuncesToQuarts();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "cups"){
					fluidOuncesToCups();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "teaspoons"){
					fluidOuncesToTeaspoons();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "tablespoons"){
					fluidOuncesToTablespoons();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "liters"){
					fluidOuncesToLiters();
				}
				if ($("#convertFrom").val() == "fluidOunces" && $("#convertTo").val() == "milliliters"){
					fluidOuncesToMilliliters();
				}

				if ($("#convertFrom").val() == "pints" && $("#convertTo").val() == "fluidOunces"){
					pintsToFluidOunces();
				}
				if ($("#convertFrom").val() == "quarts" && $("#convertTo").val() == "fluidOunces"){
					quartsToFluidOunces();
				}
				if ($("#convertFrom").val() == "cups" && $("#convertTo").val() == "fluidOunces"){
					cupsToFluidOunces();
				}
				if ($("#convertFrom").val() == "teaspoons" && $("#convertTo").val() == "fluidOunces"){
					teaspoonsToFluidOunces();
				}
				if ($("#convertFrom").val() == "tablespoons" && $("#convertTo").val() == "fluidOunces"){
					tablespoonsToFluidOunces();
				}
				if ($("#convertFrom").val() == "liters" && $("#convertTo").val() == "fluidOunces"){
					litersToFluidOunces();
				}
				if ($("#convertFrom").val() == "milliliters" && $("#convertTo").val() == "fluidOunces"){
					millilitersToFluidOunces();
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



		
