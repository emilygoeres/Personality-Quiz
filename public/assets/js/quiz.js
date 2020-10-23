const questionBlock = $("#questionBlock");
const answerBlock = $("#answerBlock");
const nextButton = $("#nextButton");

//These collect results as the quiz iterates, and are eventually passed in to a function 
let current;
const personalityResults = {};

//
let personalities;

let quiz;


nextButton.on("click",function(event) {
    nextButton.hide();
    current = 0;

    // $.get()

    generateNext();
    
})

function generateNext () {
    questionBlock.text(quiz[current].question);
    quiz[current].answers.forEach((element,index) => {
        let nextAnswer = $("<li>").text(element);
        nextAnswer.data("type",quiz[current].type[index]);
        nextAnswer.data("points",quiz[current].points[index]);
        answerBlock.append(nextAnswer);
    });
}


answerBlock.off("click").on("click", function(event) {
    const answerSelected = $(event.target);

    accrueResults(answerSelected.data("type"),answerSelected.data("points"));

    console.log(personalityResults);

    current++;
    $(this).empty();
    
    if(current < quiz.length) generateNext();
    else {
        const result = Object.keys(personalityResults).reduce((a,b) => personalityResults[a] > personalityResults[b] ? a : b)
        questionBlock.text(`Congratulations! \n ${personalities[result]}`) 
        //ajax call, where a param is the winning character
    }
})


function accrueResults(type, points) {
    if(`${type}` in personalityResults) {
        let currPoints = parseInt(personalityResults[type]);
        console.log()
        currPoints += parseInt(points);
        personalityResults[`${type}`] = `${currPoints}`;

    } else {
        personalityResults[`${type}`] = `${points}`;
    }
}