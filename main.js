function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	
	var correct = 0;
	
	if (question1 == "6"){
		correct++;
	}
	
	if (question2 == "8"){
		correct++;
	}
	
	if (question3 == "18"){
		correct++;
	}
	if (question4 == "25"){
		correct++;
	}
	if (question5 == "14"){
		correct++;
	}
	if (question6 == "30"){
		correct++;
	}
	if (question7 == "22"){
		correct++;
	}
	if (question8 == "12"){
		correct++;
	}
	if (question9 == "20"){
		correct++;
	}
	if (question10 == "9"){
		correct++;
	}
	var messages = ["Great Job!", "You could do better","You need a lot more practice!"];
	var pictures = ["img/win.gif", "img/meh.gif", "img/epicfail.gif"];
	var range;
	
	if (correct < 5){
		range = 2;
	}
	if (correct >= 5 && correct <= 7){
		range = 1;
	}
	if (correct >= 8 && correct <= 10){
		range = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
	
}