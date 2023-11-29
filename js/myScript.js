function loadData(data){
	
	if ( data == button1 ) {
		
		document.getElementById("p1").innerHTML = "from button1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("img1").src = "./images/a.png";
		
	}
	else if ( data == button2 ) {
		
		document.getElementById("p1").innerHTML = "from button2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("img1").src = "./images/a.png";
		
	}
	else if ( data == button3 ) {
		
		document.getElementById("p1").innerHTML = "from button3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("img1").src = "./images/a.png";
		
	}
	else if ( data == button4 ) {
		
		document.getElementById("p1").innerHTML = "from button4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("img1").src = "./images/a.png";
		
	}
	else if ( data == button5 ) {
		
		document.getElementById("p1").innerHTML = "from button5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		document.getElementById("img1").src = "./images/a.png";
		
	}
	
}

function priceForLoop(){
	
	const  iphone = ["Iphone XS - $1349" , "Iphone XS Max - $1349" , "Iphone 8 plus - $1349" , "Iphone SE - $1349" ];
	
	var i;
	var text;
	
	for (i = 0; i < iphone.length; i++){
		
		text = text + iphone[i] + "<br>"
		
	}
	
	document.getElementById("p1").innerHTML = text;
}

function productForInLoop(){
	
	
	const phones = ["Iphone XS - $1349" , "Iphone XS Max - $1349" , "Iphone 8 plus - $1349" , "Iphone SE - $1349"];
	
	var text = "";
	
	for (let x in phones){
		
		text = text + phones[x] + " ";
	}
	
	document.getElementById("p1").innerHTML = text;
}

function priceHigher(){
	
	var highValues = {};
	
	var text = "";
	/*associative array*/
	
	highValues["Iphone XS"] = 1500;
	highValues["Iphone XS Max"] = 2000;
	highValues["Iphone 8 plus"] = 500;
	highValues["Iphone SE"] = 400;

	/*In loop*/
	
	for(var x in highValues ) {
		
		if(highValues[x] > 1000 ){
			
			text = text + x + " : " + highValues[x] + "<br>";
		}
	}
	document.getElementById("p1").innerHTML = text;
}

function naturalNum(){
	
	var sum = 0;
	
	for (var i = 1; i <= 10; i++ ) {
		
		sum += i;
		
	}
	document.getElementById("p1").innerHTML = sum;
}
function pattern(rows){
	
	var text = "";
	var number = 1;
	
	for (var i = 1; i <= rows; i++ ) {
		
		for (var j = 1; j <= i; j++ ) {
			
			
			text = text + number + " ";
			number++;
		}
		text = text + "<br>";
		
	}
	document.getElementById("p1").innerHTML = text;
}

function checkPassword(){
	
	if ( document.getElementById("pwd").value != document.getElementById("pwdrepeat").value ) {
		
		alert("Password mismatched!");
		return false;
		
		
	}
	else{
		
		alert("Success!");
		return true;
	}
	
}

function enableButton(){
	
	var checkbox = document.getElementById("terms");
	var submit = document.getElementById("submit");
	
	if (checkbox.checked){
		
		submit.disabled = false;
	}
	else {
		
		submit.disabled = true;
	}
	
}
