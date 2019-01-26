var title = "The Great Gatsby";
var allText = "";
var splitString = "";

var dom = document.body;
var bg = "linear-gradient( to right, ";



function getTitle() {
  var h = document.createElement("h2");
  var t = document.createTextNode(title);
  h.appendChild(t);
  document.getElementById("titleContainer").appendChild(h);
  console.log("h2")
}

function readTextFile(file)
{
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
	    	else if (splitString[i] === "gray") {
	    		bg += "gray ";
	    	}

	    	if (i+1 === splitString.length-1) {
	    		bg += "100% )"
	    	}
	    	else {
	    		bg += cumulative + "%, ";
	    	}
	    	cumulative = parseInt(splitString[i+1]) + cumulative;
    	}
    }
	document.body.style.backgroundImage = bg;
}	
