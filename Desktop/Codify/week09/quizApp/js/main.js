// console.log("connected");

// //primitive data types
//
// //1. NUMBERS
//     8
//     100
//     5.379
// //2. STRINGS
//     "connected"
//     "this is a string"
//     "D"
//     ""
//     "7"
//     "131"
// //3. BOOLEANS
//     true
//     false
// //4. and 5.
//     null
//     undefined //error


//variables - you can store anything inside of a variable in javascript.


// console.log("connected")
// document.write("This writes content to the HTML webpage")

// prompt()

//DOT NOTATION

// alert("This creates a popup");
// prompt("This is a prompt. How are you today?");

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
//
// document.write("Hello, " + firstName + " " + lastName + "!");




//LOGICAL OPERATORS
// && //BOTH SIDES MUST BE TRUE
// || //ONE SIDE MUST BE TRUE
// ! //RETURNS THE BOOLEAN OPPOSITE



//STRING PROPERTIES
    //.length
    //[] :index starts at 0. eg. 0,1,2,3...

//LOOPS - FOR LOOPS
  //ALLOW US TO RUN BLOCKS OF CODE MULTIPLE TIMES

var questions = [
  {
      question: "Who is the king of the gods in Ancient Roman mythology?",
      answer: "Jupiter"
  },
  {
      question: "What is the name of the god of the sea in Ancient Greek mythology?",
      answer: "Poseidon"
  },
  {
      question: "Who were the three brothers who presided over the three realms of the universe in Roman mythology?",
      answer: "Jupiter, Neptune, Pluto"
  },
  {
      question: "Who were the three brothers who resided over the three realms of the universe in Greek mythology?",
      answer: "Zeus, Poseidon, Hades"
  },
  {
      question: "What were the three realms of the universe in Ancient Greek and Roman mythology?",
      answer: "The sky, the waters, the underworld"
  },
  {
      question: "Who was Heracles' father in Greek mythology?",
      answer: "Zeus"
  },
  {
      question: "What is the name of the Roman god of war?",
      answer: "Mars"
  },
  {
      question: "How many total labours did Heracles have to perform?",
      answer: 12
  },
  {
      question: "What is Poseidon's weapon of choice?",
      answer: "trident"
  },
  {
      question: "Who is the Roman god of the underworld?",
      answer: "Pluto"
  },
  {
      question: "BONUS: Who were the first to put the Greek myths into writing?",
      answer: "Hesiod and Homer"
  }
]


for(var i = 0; i < questions.length; i++) {
  var question = questions[i].question;
  var el = document.getElementById("question" + [i]);

  console.log(question, el);

  el.textContent = question;
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for(var i = 0; i < questions.length; i++) {
    var answer = questions[i].answer;
    var guess = document.getElementById("answer" + [i]).value;
    var questionSpot = document.getElementById("question" + [i]);

    if(answer == guess) {
      questionSpot.className = "correct";
      correct++;
    } else {
      questionSpot.className = "incorrect";
      incorrect++;
    };
  };
  document.getElementById("correct").textContent = correct;
  document.getElementById("incorrect").textContent = incorrect;
}

var btn = document.getElementById("thebutton");
document.body.addEventListener("keypress", function(e) {
	if(e.keyCode == 13) {
		changeAvatar();
	};
}, false);
