
var numbers = [];           //storing numbers
var operator = '';			//to dicide to add or minus.... 
var currentNumber = 0;		//digit + digit = currentNumber
var equalNum = 0;			
var afterEquals = false;

$('#Button1').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 1;       //10 for making it in the next digit
	$('#display').val(currentNumber);
})

$('#Button2').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 2;       
	$('#display').val(currentNumber);
})

$('#Button3').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 3;       
	$('#display').val(currentNumber);
})

$('#Button4').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 4;       
	$('#display').val(currentNumber);
})

$('#Button5').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 5;       
	$('#display').val(currentNumber);
})

$('#Button6').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 6;       
	$('#display').val(currentNumber);
})

$('#Button7').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 7;       
	$('#display').val(currentNumber);
})

$('#Button8').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 8;       
	$('#display').val(currentNumber);
})

$('#Button9').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 9;       
	$('#display').val(currentNumber);
})

$('#Button0').click(function(){
	if (currentNumber == null ){
		currentNumber = 0;
	}
	currentNumber = currentNumber * 10 + 0;       
	$('#display').val(currentNumber);
})


$('#addButton').click(function(){
	currentNumber = (afterEquals) ? 0 : currentNumber;
	numbers.push(currentNumber);
	currentNumber = null;
	afterEquals = false;
	Calculate();
	operator = '+';
	$('#display').val(numbers[0]);

})

$('#subtractButton').click(function(){
	currentNumber = (afterEquals) ? 0 : currentNumber;
	numbers.push(currentNumber);
	currentNumber = null;
	Calculate();
	operator = '-';	
	$('#display').val(numbers[0]);

})

$('#divideButton').click(function(){
	currentNumber = (afterEquals) ? 0 : currentNumber;
	numbers.push(currentNumber);
	currentNumber = null;
	Calculate();
	operator = '/';
	$('#display').val(numbers[0]);

})

$('#multiplyButton').click(function(){
	currentNumber = (afterEquals) ? 0 : currentNumber;
	numbers.push(currentNumber);
	currentNumber = null;
	Calculate();
	operator = '*';
	$('#display').val(numbers[0]);

})

$('#clearButton').click(function(){
	$('#display').val("");

})

function Calculate(){
	var val = numbers[0];
	switch(operator){
		case '+':
			for (i = 1; i < numbers.length; i++){
				val = val + numbers[i];
			}
			break;
		case '-':
			for (i = 1; i < numbers.length; i++){
				val = val - numbers[i];
			}
			break;
		case '*':
			for (i = 1; i < numbers.length; i++){
				val = val * numbers[i];
			}
			break;
		case '/':
			for (i = 1; i < numbers.length; i++){
				val = val / numbers[i];
			}
			break;	
		default:
			console.log("INVAILD OPERATOR ERROR")
			break;
	}
	numbers = [val];
}	

$('#equalsButton').click(function(){
    if (numbers.length == 0){
        return;
    }
    if (operator == ''){
    	return;
    }
    if(currentNumber == null){
    	return;
    }
    
    afterEquals = true;

	var val = numbers[0];

	numbers.push(currentNumber);

	console.log(numbers);

	switch(operator){
		case '+':
			for (i = 1; i < numbers.length; i++){
				val = val + numbers[i]; 
			}
			break;
		case '-':
			for (i = 1; i < numbers.length; i++){
				val = val - numbers[i];
			}
			break;
		case '*':
			for (i = 1; i < numbers.length; i++){
				val = val * numbers[i];
			}
			break;
		case '/':
			for (i = 1; i < numbers.length; i++){
				val = val / numbers[i];
			}
			break;	
		default:
			console.log("INVAILD OPERATOR ERROR")
			break;
	}

	numbers = [val];

	equalNum = val;
	$('#display').val(equalNum);
})
