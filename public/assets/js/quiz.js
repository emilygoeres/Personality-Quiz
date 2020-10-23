const questionBlock = $("#questionBlock");
const answerBlock = $("#answerBlock");
const nextButton = $("#nextButton");
const quizID = questionBlock.data("quizid");
console.log(quizID)

//These collect results as the quiz iterates, and are eventually passed in to a function that determines the resut of the quiz
let current;
const personalityResults = {};


//
const personalities = {};
let quiz;

$.ajax({
        url: `/api/quizQuestions/${quizID}`,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        quiz = response;
    })


nextButton.on("click", function (event) {
    nextButton.hide();
    current = 0;

    generateNext();

})

function generateNext() {
    questionBlock.text(quiz.questions[current].question);
    quiz.questions[current].answers.forEach((element, index) => {
        let nextAnswer = $("<li>").text(element.answer);
        nextAnswer.data("personality", element.personality.personality_type);
        nextAnswer.data("archetype",element.personality.archetypeId);
        
        if (`${element.personality.personality_type}` in personalities) {
            console.log("Already here!");
        } else {
            personalities[`${element.personality.personality_type}`] = element.personality.personality_description
        }


        nextAnswer.data("points", element.points);
        answerBlock.append(nextAnswer);
    });
}


answerBlock.on("click", function (event) {
    const answerSelected = $(event.target);

    accrueResults(answerSelected.data("personality"), answerSelected.data("points"));

    console.log(personalityResults);

    current++;
    $(this).empty();

    if (current < quiz.questions.length) generateNext();
    else {
        const result = Object.keys(personalityResults).reduce((a, b) => personalityResults[a] > personalityResults[b] ? a : b)
        questionBlock.text(`Congratulations! \n ${personalities[result]}`)
        //ajax call, where a param is the winning character
    }
})


function accrueResults(type, points) {
    if (`${type}` in personalityResults) {
        let currPoints = parseInt(personalityResults[type]);
        console.log()
        currPoints += parseInt(points);
        personalityResults[`${type}`] = `${currPoints}`;

    } else {
        personalityResults[`${type}`] = `${points}`;
    }
}