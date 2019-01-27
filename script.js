var title = "The Great Gatsby";
var allText = "";
var splitString = "";
var cumulativeArray = [];

var dom = document.body;
var bg = "linear-gradient( to right, ";

// document.getElementsByClassName("one").addEventListener("click", readTextFile(file, title));
// document.getElementsByClassName("two").addEventListener("click", readTextFile(file, title));
// document.getElementsByClassName("three").addEventListener("click", readTextFile(file, title));
// document.getElementsByClassName("four").addEventListener("click", readTextFile(file, title));
// document.getElementsByClassName("five").addEventListener("click", readTextFile;

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
				console.log(splitString);
            }
        }
    }
    rawFile.send(null);
    setBg();
	makeDots();
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function setBg()  {
	var cumulative = 0;
	bg = "linear-gradient( to right, ";
	console.log(bg.length);

	console.log("set bg len:"  + splitString.length);

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
			
			console.log("bg " + bg)
			console.log("splitstring: " + i + " :" + splitString[i])
			console.log("splitstring: " + splitString[i+1]);
			console.log("--------")
	    	cumulative = parseFloat(splitString[i+1]) + cumulative;
	    	cumulativeArray.push(cumulative);
		} else if (i+2 === splitString.length) {
			console.log("in else" + bg);
			bg = bg.substring(0, bg.length-2);
			console.log("after substrng" + bg);
			bg += " )";
		}
		
		console.log(bg);
    }
	document.body.style.backgroundImage = bg;

	console.log("-----------------------------------------------")
}

function makeDots() {
	// var c = document.getElementById("myCanvas");
	// var ctx = c.getContext("2d");
	// var w = window.innerWidth;
	// var h = window.innerHeight;
	// const percentages = cumulativeArray.map(x => x/100.0);
	// const positions = percentages.map(x => x*w);
	// const fixedPositions = positions.map(x => x-50);

	// c.width = w;
	// c.height = h;

	// for (var j=0; j<percentages.length; j+=1) {
	// 	var yvalue = h*getRandomFloat(.3, .8);
	// 	ctx.beginPath();
	// 	ctx.arc(fixedPositions[j], yvalue, 8, 0, 2 * Math.PI);
	// 	ctx.strokeStyle = "#ffffff";
	// 	ctx.stroke();
	// }
}