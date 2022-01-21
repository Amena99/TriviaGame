$(document).ready(function() {
    var quizInterval = null;
    var convertedTime = 0; 
    var timerRunning = false;
    var timerInterval = null;
    var userclick = false;
       var timerObject = {
           time: 11,
           start: function(){
            if (!timerRunning){
                timerInterval = setInterval(timerObject.count, 1000);
                timerRunning = true;
           }},
           reset: function(){
               clearInterval(timerInterval);
               timerRunning = false;
               timerObject.time = 11;
               $("#timer").text(" ");
           },
           count: function(){
                // if (timerObject.time>0){
                timerObject.time--;
               $("#timer").text("Seconds Remaining: " + timerObject.time);
                // }
            },
    
    };
        var i = 0;
        var qcount = 0;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numBlank = 0;   
        var answerArray = [];
        var radios = document.getElementsByTagName("input");
        var questionFinished = false;
        var showAns = null;
        var countUp = null;
        var questionsArray = [
            {
                question: "Which of the following presidents is not on Mount Rushmore?",
                answers: {
                    a: "A. John F. Kennedy",
                    b: "B. Theodore Roosevelt",
                    c: "C. Abraham Lincoln",
                    d: "D. Thomas Jefferson",
                },
                correctanswer: "A. John F. Kennedy",
                answerKey: "a",
                embed_url: "https://i.gifer.com/1y32.gif", 
            },
            {
                question: "Which country not including Japan has the most people of Japenese descent? ",
                answers: {
                    a: "A. China",
                    b: "B. South Korea",
                    c: "C. United States of America",
                    d: "D. Brazil"
            },
                correctanswer: "D. Brazil",
                answerKey: "d",
                embed_url: "https://imgur.com/jJgELot",
            },
            {
                question: "What is the Polish city known to Germans as Danzig?",
                answers: {
                    a: "A. Warsaw",
                    b: "B. Gdańsk",
                    c: "C. Zakopane",
                    d: "D. Poznań"
            },
                correctanswer: "B. Gdańsk",
                answerKey: "b",
                embed_url: "https://imgur.com/aUJegiI",//not working
            },
            {
                question: "What tiny principality lies between Spain and France?",
                answers: {
                    a: "A. Monaco",
                    b: "B. Liechtenstein",
                    c: "C. Andorra",
                    d: "D. San Marino"
            },
                correctanswer: "C. Andorra",
                answerKey: "c",
                embed_url: "https://1.bp.blogspot.com/-aiQC5VBjgqw/Wz5Adht0b6I/AAAAAAAApAI/JACpfLq1ua80Co8L92CxtKuQvFRCwZKOQCLcBGAs/s1600/Flag_of_Andorra.gif",
            },
            {
                question: "What is the capital of India?",
                answers: {
                    a: "A. Bejing",
                    b: "B. New Delhi",
                    c: "C. Tithi",
                    d: "D. Montreal"
            },
                correctanswer: "B. New Delhi",
                answerKey: "b",
                embed_url: "https://media.giphy.com/media/l2YWBnlBuAzVNta4o/giphy.gif", //not working
            },
            {
                question: "How many sovereign states are members of the United Nations?",
                answers: {
                    a: "A. 195",
                    b: "B. 201",
                    c: "C. 153",
                    d: "D. 178"
            },
                correctanswer: "A. 195",
                answerKey: "a",
                embed_url: "https://thumbs.gfycat.com/DizzyBriefCuckoo-small.gif",
            },
            {
                question: "What is the largest non-continental island in the world?",
                answers: {
                    a: "A. Madagascar",
                    b: "B. Borneo",
                    c: "C. New Guinea",
                    d: "D. Greenland"
            },
                correctanswer: "D. Greenland",
                answerKey: "d",
                embed_url: "https://media.giphy.com/media/WaPxDPoI4iIDK/giphy.gif", //not working
            },
            {
                question: "Which German city is located on the River Isar?",
                answers: {
                    a: "A. Munich",
                    b: "B. Berlin",
                    c: "C. Hamburg",
                    d: "D. Dortmund"
            },
                correctanswer: "A. Munich",
                answerKey: "a",
                embed_url: "https://media.giphy.com/media/xUySTYL706E8EVBYru/giphy.gif", //not working
            },
            {
                question: "What is the largest lake in the African continent?",
                answers: {
                    a: "A. Lake Malawi",
                    b: "B. Lake Tanganyika",
                    c: "C. Lake Victoria",
                    d: "D. Lake Turkana"
            },
                correctanswer: "B. Lake Victoria",
                answerKey: "b",
                embed_url: "https://static1.squarespace.com/static/5b88974731d4df1ac824c450/5b8de20c4d7a9cd1f8f9801c/5b8de4ae40ec9a2651f1e361/1536037474875/ff026c9f723ec772-bay_victoria.gif?format=1000w",
            },
            {
                question: "What is the right way to spell the capital of Hungary?",
                answers: {
                    a: "A. Bhudapest",
                    b: "B. Budapast",
                    c: "C. Boodapest",
                    d: "D. Budapest"
            },
                correctanswer: "D. Budapest",
                answerKey: "d",
                embed_url: "https://media.giphy.com/media/BfuFjFohFnfLG/giphy.gif",
            },
        ];
    
    loadStart();
     function loadStart(){
         $(".main1").append('<h2 id="questionNum">Geography Trivia!</h2>');
         $(".main3").html('<button class="startButton">Start</button>');  
         $("#timer").hide();
     };
    
    //too WET?
    //Appends the radio buttons, labels, and the question and choices. 
    
    
    $(".startButton").on("click", beginQuiz);
    
    function beginQuiz(){
        qcount=0;
        $(".main4").empty();
        $(".main5").empty();
        beginDisplay();
        quizInterval = setInterval(beginDisplay, 16000);
        
    };
    function beginDisplay(){
        console.log("startButton clicked, firing beginDisplay()");
        $("#timer").show();
        $(".main3").html('<div class="form-check num1">');
        $(".num1").html('<input class="form-check-input first" type="radio" name="exampleRadios" id="exampleRadiosa" value="a">');
        $(".num1").append('<label class="form-check-label" id="choiceNum1" for="exampleRadiosa"></label>');
        $(".main3").append('<div class="form-check num2">');
        $(".num2").html('<input class="form-check-input second" type="radio" name="exampleRadios" id="exampleRadiosb" value="b">');
        $('.num2').append('<label class="form-check-label" id="choiceNum2" for="exampleRadiosb"></label>');
        $(".main3").append('<div class="form-check num3"></div>');
        $(".num3").html(' <input class="form-check-input third" type="radio" name="exampleRadios" id="exampleRadiosc" value="c">');
        $(".num3").append('<label class="form-check-label" id="choiceNum3" for="exampleRadiosc"></label>');
        $(".main3").append('<div class="form-check num4"></div>');
        $(".num4").html('<input class="form-check-input fourth" type="radio" name="exampleRadios" id="exampleRadiosd" value="d">');
        $(".num4").append('<label class="form-check-label" id="choiceNum4" for="exampleRadiosd"></label>');
        showAns = setTimeout(displayResults, 10000);
        countUp = setTimeout(counterFunc, 11000); 
        displayRecord();
          
        
        // }else{
            
        // }
    }; 


    function displayRecord () {
        if(qcount===10){
            clearInterval(quizInterval);
            clearTimeout(showAns);
            clearTimeout(countUp);
            displayScore();
        } else {
        console.log("Firing displayRecord()");
        $("#questionNum").html("Question #" + (qcount+1));
        $("#questionString").text( questionsArray[qcount].question );
        $("#choiceNum1").text(questionsArray[qcount].answers.a);
        $("#choiceNum2").text(questionsArray[qcount].answers.b);
        $("#choiceNum3").text(questionsArray[qcount].answers.c);
        $("#choiceNum4").text(questionsArray[qcount].answers.d);
        $("input[name=exampleRadios]").prop('checked', false);
        timerObject.reset();
        timerObject.start();   
        }
    };
    
        function displayResults(){
            var isCorrect = checkAnswers();
            console.log("Q count in the display Results function:" + qcount);
                $("#timer").hide();
                $("#questionNum").html("Time's up!");
    
                if (isCorrect){
                    $("#questionNum").html("Congrats! That's Correct!");
                }else{$("#questionNum").html("Try Again!");}
                
                $(".main2").html("The correct answer is: "+ questionsArray[qcount].correctanswer);
                
                $(".main3").html("<embed src='"+questionsArray[qcount].embed_url+"' width='"+300+"' height='"+200+"'/>");
                // qcount++;
        };    


    function checkAnswers() { 
        console.log("check answers func is called."); 
       
            var counter = 0;
            var value = null;
            var isAnswer = false;
            //go thru all radios 
            for (var i=0; i<radios.length; i++) {
                //if any radio is selected add the value to ansArray
                if (radios[i].type === 'radio' && radios[i].checked){
                    value = radios[i].value;
                    console.log("This is the value of radio button: " + value);
                    answerArray.push(value);
                    console.log("This is the answer Array: " + answerArray);
                }else {//count how many radios are not selected
                    counter++; 
                }
            }
            if (counter ===4){//if all radios are not selected,
                numBlank++;//the input is blank
            }else {
                //is value a correct answer?
                if (value === questionsArray[qcount].answerKey){
                    numCorrect++;
                    console.log("Number correct: " + numCorrect);
                    isAnswer = true;
                }else{  //if (value != questionsArray[qcount].correctanswer)
                    numIncorrect++;
                    console.log("Number Incorrect: " + numIncorrect);
                }
            }
            console.log(isAnswer);
            return isAnswer;
    };

    function counterFunc(){
        if (qcount<=9){
            qcount++;
            // displayResults();
        }
    };
    
    function displayScore (){ 
        timerObject.reset();
        $("#questionNum").html("Your Score:");
        $("#questionString").html("Number Correct: " + numCorrect);
        $(".main3").html("Number Incorrect: " + numIncorrect );
        $(".main4").html("Number Unanswered: " + numBlank); 
        $(".main5").html('<button class="startButton">Play Again!</button>');
        $(".startButton").on("click", beginQuiz);
    };
    
       
    });