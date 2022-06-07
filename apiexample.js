var animalDiv;
var visit;
var mammal;
var bird;
var reptile;
var frog;
var fish;
var day;
var night;
var dusk;
var score = 0;
var scorebox;
var btnClrChange;

function timer () {
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = "score: "+ score + "<br><br>" +"<button> Restart </button>";
}
function restart() {
	location.reload();
}
// initialize variables after page loads
window.onload = function() {
	
	document.getElementById("visit").addEventListener('click', fetchAnimal);
	
	btnClrChange = document.querySelectorAll(".clr");
	animalDiv = document.getElementById("animal");
	mammal = document.getElementById("mammal").value;
	bird = document.getElementById("bird").value;
	reptile = document.getElementById("reptile").value;
	frog = document.getElementById("frog").value;
	fish = document.getElementById("fish").value;
	day = document.getElementById("day").value;
	night = document.getElementById("night").value;
	dusk = document.getElementById("dusk").value;
	scorebox = document.getElementById("scorebox");
	visit = document.getElementById("Visit");
	   document.getElementById("lightbox").style.display = "none";

}; // window.onload

// get animal from api
function fetchAnimal() {
	
	setTimeout(timer, 30000);
	
	for (let i = 0; i < btnClrChange.length; i++) {
		console.log("e");
		btnClrChange[i].style.color = "black";
		btnClrChange[i].style.boxShadow = "none";
		btnClrChange[i].disabled = false;
	}
	
	fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
		.then(response => response.json())
		.then(data => show(data));


	
		
} // fetchAnimal

function show(data) {
	console.log(data);
	animalDiv.innerHTML = "<h2>" + data[0].name + "</h2>" +
		"<p> Latin Name: " + data[0].latin_name + "<br> Life Span: " + data[0].lifespan + " yrs<p>" + "<img src=" + data[0].image_link + ">";
		
		
	document.getElementById("mammal").onclick = function() {
		if (data[0].animal_type == mammal) {
			console.log("y");
			document.getElementById("mammal").style.color = "green";
			document.getElementById("mammal").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("mammal").style.color = "red";
			document.getElementById("mammal").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //mammal markit

	document.getElementById("bird").onclick = function() {
		if (data[0].animal_type == bird) {
			console.log("y");
			document.getElementById("bird").style.color = "green";
			document.getElementById("bird").style.boxShadow = "1px 0px 10px green";
			score++;
		} else {
			console.log("n");
			document.getElementById("bird").style.color = "red";
			document.getElementById("bird").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //bird markit

	document.getElementById("reptile").onclick = function() {
		if (data[0].animal_type == reptile) {
			console.log("y");
			document.getElementById("reptile").style.color = "green";
			document.getElementById("reptile").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("reptile").style.color = "red";
			document.getElementById("reptile").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Reptile markit

	document.getElementById("frog").onclick = function() {
		if (data[0].animal_type == frog) {
			console.log("y");
			document.getElementById("frog").style.color = "green";
			document.getElementById("frog").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("frog").style.color = "red";
			document.getElementById("frog").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Frog markit

	document.getElementById("fish").onclick = function() {
		if (data[0].animal_type == fish) {
			console.log("y");
			document.getElementById("fish").style.color = "green";
			document.getElementById("fish").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("fish").style.color = "red";
			document.getElementById("fish").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //Fish markit


	document.getElementById("day").onclick = function() {
		if (data[0].active_time == day) {
			console.log("y");
			document.getElementById("day").style.color = "green";
			document.getElementById("day").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("day").style.color = "red";
			document.getElementById("day").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //day markit	

	document.getElementById("night").onclick = function() {
		if (data[0].active_time == night) {
			console.log("y");
			document.getElementById("night").style.color = "green";
			document.getElementById("night").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("night").style.color = "red";
			document.getElementById("night").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //night markit

	document.getElementById("dusk").onclick = function() {
		if (data[0].active_time == dusk) {
			console.log("y");
			document.getElementById("dusk").style.color = "green";
			document.getElementById("dusk").style.boxShadow = "1px 0px 10px green";
			score++;

		} else {
			console.log("n");
			document.getElementById("dusk").style.color = "red";
			document.getElementById("dusk").style.boxShadow = "1px 0px 10px red";
			score--;
		}
		printScore();
		this.disabled = true;
	}; //dusk markit

} //showData



function printScore() {
	console.log(score);
	scorebox.innerHTML = "score: " + score + " ";

}

// // change the animal displayed
// function changeAnimal(data) {
// console.log(data);
// animalDiv.innerHTML = 
// "<h2>" + data[0].name + "</h2>"+
// "<p> Latin Name: " + data[0].latin_name + "<br> Life Span: "+ data[0].lifespan + " yrs<p>"
// + "<img src='" + data[0].image_link + "'>";


// } // changeAnimal

// function ma(data) {
// // if (data.animal_type == mammal) {
// // console.log("correct");
// // }
// // else {
// // console.log("wrong");
// // }
// console.log(data);
// }