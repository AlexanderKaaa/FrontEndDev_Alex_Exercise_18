$(document).ready(function() {


    $("#btnAddNumbers").on('click', function(){
		//debugger;
        /*
            Retrieve the numbers from the input fields
        */
        var firstNumber = +($('#txtFirstNumber').val());
        var secondNumber = +($('#txtSecondNumber').val());
        
        /*
            Add the two numbers together
        */
        var sum = firstNumber + secondNumber;

        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        if(sum > 10){
            $('#txtThirdNumber').addClass('blue');
            $('#txtThirdNumber').removeClass('red');
			//alert("Hello");
        }
		else{
            $('#txtThirdNumber').addClass('red');
            $('#txtThirdNumber').removeClass('blue');
			//alert("Hi");
        }

        /*
            Update the third input field with our value.
        */
		$('#txtThirdNumber').val(sum);
    });



});