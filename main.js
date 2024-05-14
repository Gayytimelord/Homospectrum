var hundo = 0

// multicoloured text 
setInterval(function colourswitch(){ const randomColour =
Math.floor(Math.random()*16777215).toString
(16); document.getElementById("titlerainbow").style.color = "#" + randomColour; },300)

//update slider labels 
var Rslider = document.getElementById("red");
var Routput = document.getElementById("rednum");
var Gslider = document.getElementById("green");
var Goutput = document.getElementById("greennum");
var Bslider = document.getElementById("blue");
var Boutput = document.getElementById("bluenum");

Routput.innerHTML = Rslider.value;
Rslider.oninput = function() {
	Routput.innerHTML = this.value;
}
Goutput.innerHTML = Gslider.value;
Gslider.oninput = function() {
	Goutput.innerHTML = this.value;
}
Boutput.innerHTML = Bslider.value;
Bslider.oninput = function() {
	Boutput.innerHTML = this.value;
}

//update slider maximums
function changeslidermax() {
    console.log("Function changeslidermax() called."); // Check if function is called
    var selectedOption = document.querySelector('input[name="100255"]:checked').value;
    console.log("Selected option: ", selectedOption);

    if (selectedOption === "100") {
    	hundo = 1
        console.log("Updating sliders to 0-100 range.");
        document.getElementById("red").max = 100;
        document.getElementById("green").max = 100;
        document.getElementById("blue").max = 100;
    } else if (selectedOption === "255") {
    	hundo = 0
        console.log("Updating sliders to 0-255 range.");
        document.getElementById("red").max = 255;
        document.getElementById("green").max = 255;
        document.getElementById("blue").max = 255;
    }
}

var radioButtons = document.querySelectorAll('input[name="100255"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        changeslidermax();
    });
});


//generate the colour!1

//update slider maximums
function genColour(){

    if (hundo === 0)
	    {
	    //I HATE JAVASCRIPT WHY IS THE ANSWER MULTIPLYING BY ONE WTF
	    var rHex = document.getElementById("red").value * 1
     	var rHex = rHex.toString(16).padStart(2, "0"); 
     	var gHex = document.getElementById("green").value * 1
     	var gHex = gHex.toString(16).padStart(2, "0"); 
     	var bHex = document.getElementById("blue").value * 1
     	var bHex = bHex.toString(16).padStart(2, "0");

    }
    else{
	    var rHex = Math.round(document.getElementById("red").value * 2.25)
	    var rHex = rHex.toString(16).padStart(2, "0");
	    var gHex = Math.round(document.getElementById("green").value * 2.25)
	    var gHex = gHex.toString(16).padStart(2, "0");
	    var bHex = Math.round(document.getElementById("blue").value * 2.25)
	    var bHex = bHex.toString(16).padStart(2, "0");
	    console.log(rHex, gHex, bHex);

    }

    document.body.style.background = "#" + rHex + gHex + bHex;
    console.log("#" + rHex + gHex + bHex	)
}
