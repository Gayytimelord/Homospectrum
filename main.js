var tff = 0
var hex = 0
var invertedHex = 0

document.getElementById("yourColour").style.opacity = 0


// multicoloured text 
setInterval(function colourswitch(){ const randomColour =
Math.floor(Math.random()*16777215).toString(16);
document.getElementById("titlerainbow").style.color = "#" + randomColour; },300)

//update slider labels 
var Rslider = document.getElementById("red");
var Gslider = document.getElementById("green");
var Bslider = document.getElementById("blue");

var Routput = document.getElementById("rednum");
var Goutput = document.getElementById("greennum");
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
    var selectedOption = document.querySelector('input[name="100255"]:checked').value;
    console.log("Selected option: ", selectedOption);

    if (selectedOption === "100") {
    	tff = 0
        console.log("Updating sliders to 0-100 range.");
        document.getElementById("red").max = 100;
        document.getElementById("green").max = 100;
        document.getElementById("blue").max = 100;
    } else if (selectedOption === "255") {
    	tff = 1
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


//generate the colour!1!!111!
function genColour(){

    if (tff)
	    {
	    var r = Math.round(document.getElementById("red").value)
        var g = Math.round(document.getElementById("green").value)
        var b = Math.round(document.getElementById("blue").value)
    }
    else{
	    var r = Math.round(document.getElementById("red").value * 2.55)
        var b = Math.round(document.getElementById("blue").value * 2.55)
        var g = Math.round(document.getElementById("green").value * 2.55)
    }

    var mr = 255 - r;
    var mg = 255 - g;
    var mb = 255 - b;

    var hex = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
    var invertedHex = "#" + mr.toString(16).padStart(2, "0") + mg.toString(16).padStart(2, "0") + mb.toString(16).padStart(2, "0");

    document.getElementById("yourColour").style.opacity = 100;
    document.getElementById("yourColour").style.color = invertedHex;
    document.getElementById("colour").innerText = hex;
    document.getElementById("half").style.background = hex;

    if (window.screen.width <= 1570) {
        document.getElementById("half").style.position = "relative";
        window.scrollBy(0, 30 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    }

}

//copy to clipboard

function copy(){
     navigator.clipboard.writeText(hex);
}
