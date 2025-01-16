let questions = [ "What does NULL mean?",
    " Which of these is used to compare both value and type in JavaScript?",
    " Which keyword is used to define a constant in JavaScript?",
    " Which method is used to add an element to the end of an array in JavaScript?",
    " What does console.log() do in JavaScript?",
    " How do you create a function in JavaScript?",
    " Which of the following is not a primitive data type in JavaScript?",
    " What is the correct way to declare a variable in JavaScript?",
    " Which of the following is used to parse a string into an integer in JavaScript?",
    " What is the purpose of the return statement in a function?"]
let correctAnswers = [4,2,3,1,1,2,3,1]
let options = [["\n1. Number", "\n2. Nothing","\n3. Undefied","\n4. No value"],
    ["\n1. ==", "\n2. ===","\n3. !=","\n4. !=="],
    ["\n1. let", "\n2. var","\n3. const","\n4. constant"],
    ["\n1. push()", "\n2. pop()","\n3. shift()","\n4. unshift()"],
    ["\n1.  Prints text to the console", "\n2. Alrts the user","\n3. Adds numbers","\n4. Stops the program"],
    ["\n1.  function = myFunc() {}", "\n2. function myFunc() {}","\n3. create function myFunc() {}","\n4. def myFunc() {}"],
    ["\n1. String", "\n2. Boolean","\n3. Array","\n4. Number"],
    ["\n1. var x = 5;", "\n2. let x = 5;","\n3. const x;","\n4. variable x = 5;"],
    ["\n1. parseInt()", "\n2. parseString()","\n3. toInteger()","\n4. int()"]]

let correct = 0
let userAnswer

for (let i = 0; i < questions.length; i++){
    userAnswer = prompt("Answer this question:" + questions[i] + ".\nChoose 1 answer (1-4): " + options[i])
    if (parseInt(userAnswer) == correctAnswers[i]){
        correct +=1
    } else if (parseInt(userAnswer) < 0 || parseInt(userAnswer) > 4 ){
        console.log("The answer must be between 1 and 4")
    }
}

console.log("You got ", correct, " correct answers out of ", questions.length, " questions.")