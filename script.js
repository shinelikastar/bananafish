var title = "The Great Gatsby";
var allText = "";
var splitString = "";
var cumulativeArray = [];

var dom = document.body;
var bg = "linear-gradient( to right, ";
var one = document.getElementsByClassName("one").addEventListener("click", readTextFile(file));

function getTitle() {
  var h = document.createElement("h2");
  var t = document.createTextNode(title);
  h.appendChild(t);
  document.getElementById("titleContainer").appendChild(h);
}

function readTextFile(file)
{	
	console.log("you have done this!");
	console.log(file);
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                splitString = allText.split(" ");
                // alert(allText);
                
            }
        }
    }
    rawFile.send(null);
    setBg();
	makeDots();
}



function setBg()  {
	bg = "linear-gradient( to right, ";
	var cumulative = 0;
    for (var i=0; i<splitString.length; i+=2) {
    	if (parseInt(splitString[i+1])) {
    		if (splitString[i] === "red") {
    			bg += "var(--pastel-red) ";
	    	}
	    	else if (splitString[i] === "orange") {
	    		bg += "var(--pastel-orange) ";
	    	}
	    	else if (splitString[i] === "yellow") {
	    		bg += "var(--pastel-yellow) ";
	    	}
	    	else if (splitString[i] === "green") {
	    		bg += "var(--pastel-green) ";
	    	}
	    	else if (splitString[i] === "blue") {
	    		bg += "var(--pastel-blue) ";
	    	}
	    	else if (splitString[i] === "purple") {
	    		bg += "var(--pastel-purple) ";
	    	}
	    	else if (splitString[i] === "black") {
	    		bg += "black ";
	    	}
	    	else if (splitString[i] === "white") {
	    		bg += "white ";
	    	}
	    	else if (splitString[i] === "grey") {
	    		bg += "gray ";
	    	}
	    	if (i+1 === splitString.length-1) {
	    		bg += "100% )"
	    	}
	    	else {
	    		bg += cumulative + "%, ";
	    	}
	    	cumulative = parseInt(splitString[i+1]) + cumulative;
	    	cumulativeArray.push(cumulative);
    	}
    }
	document.body.style.backgroundImage = bg;
}

function makeDots() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var w = window.innerWidth;
	var h = window.innerHeight;
	const percentages = cumulativeArray.map(x => x/100.0);
	const positions = percentages.map(x => x*w);
	const fixedPositions = positions.map(x => (x-50)/1.3);

	c.width = w;
	c.height = h;

	for (var j=0; j<percentages.length; j+=1) {
		var yvalue = w*Math.random();
		ctx.beginPath();
		ctx.arc(fixedPositions[j], yvalue, 8, 0, 2 * Math.PI);
		ctx.strokeStyle = "#ffffff";
		ctx.stroke();
	}
}

