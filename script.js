var title = "The Great Gatsby";
var allText = "";
var splitString = "";
var cumulativeArray = [];


var dom = document.body;
var bg = "linear-gradient( to right, ";

function getTitle() {
  var h = document.createElement("h2");
  var t = document.createTextNode(title);
  h.appendChild(t);
  document.getElementById("titleContainer").appendChild(h);
}

function readTextFile(file, title)
{
	document.getElementById("titleContainer").innerHTML = title;
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
            }
        }
    }
    rawFile.send(null);
	setBg();
	makeDots2();
	// makeDots();
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function setBg()  {
	cumulativeArray = [];
	var cumulative = 0;
	bg = "linear-gradient( to right, ";
	// console.log(splitString);

	// console.log("set bg len:"  + splitString.length);

	let popped = splitString.pop();
    for (var i=0; i<splitString.length; i+=2) {
    	if (parseFloat(splitString[i+1])) {
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
	    		bg += cumulative + "% )";
	    	}
	    	else {
	    		bg += cumulative + "%, ";
			}
			
	    	cumulative = parseFloat(splitString[i+1]) + cumulative;
	    	cumulativeArray.push(cumulative);
		} else if (i+2 === splitString.length) {
			bg = bg.substring(0, bg.length-2);
			bg += " )";
		}
		// console.log(bg);
    }
	document.body.style.backgroundImage = bg;
	// console.log("-----------------------------------------------")
}

var circle_divs = [];

function makeDots2() {
	// clean if needed
	// console.log("before: " + circle_divs)
	// for (var i = 0; i < circle_divs.length; i++) {
	// 	document.body.removeChild(circle_divs[i]);
	// }
	// console.log("after removal: " + circle_divs.length)
	var w = window.innerWidth;
	var h = window.innerHeight;


	var percentages = cumulativeArray.map(x => x/100.0);
	var positions = percentages.map(x => x*w);
	var fixedPositions = positions.map(x => x-50);

	console.log(percentages.length)
	for (var i = 0;  i < percentages.length; i++) {
		var circ = document.createElement('div');
		circ.className = 'circle';

		var yvalue = h*getRandomFloat(.3, .8);
		circ.style.left = fixedPositions[i] + "px";
		circ.style.top = yvalue + "px";
		circ.setAttribute("data-tippy", "hello this is a test"); 

		console.log(circ);
		document.body.appendChild(circ);
		circle_divs.push(circ);
		
	}

}

// function makeDots() {
// 	clearDots();
// 	var c = document.getElementById("myCanvas");

// 	var circle = document.createElement("div");
// 	circle.ClassName = "circle_div";
// 	circle.style.position = "absolute";

// 	var ctx = c.getContext("2d");
	var w = window.innerWidth;
	var h = window.innerHeight;

// 	var percentages = cumulativeArray.map(x => x/100.0);
// 	var positions = percentages.map(x => x*w);
// 	var fixedPositions = positions.map(x => x-50);

// 	c.width = w;
// 	c.height = h;

// 	for (var j=0; j<percentages.length; j+=1) {
// 		var yvalue = h*getRandomFloat(.3, .8);
// 		ctx.beginPath();
// 		ctx.arc(fixedPositions[j], yvalue, 8, 0, 2 * Math.PI);
// 		ctx.strokeStyle = "#ffffff";
// 		ctx.stroke();
// 	}
// }

// function clearDots() {
// 	var c = document.getElementById("myCanvas");
// 	var ctx = c.getContext("2d");
// 	ctx.clearRect(0, 0, c.width, c.height);
// }
