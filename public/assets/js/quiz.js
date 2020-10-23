const questionBlock = $("#questionBlock");
const answerBlock = $("#answerBlock");
const nextButton = $("#nextButton");
const quizID = questionBlock.data("quizid");
console.log(quizID)

//These collect results as the quiz iterates, and are eventually passed in to a function that determines the resut of the quiz
let current;
const personalityResults = {};
const archetypeResults = new Array(12).fill(0);


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
        nextAnswer.data("points", element.points);
        
        if (!(`${element.personality.personality_type}` in personalities)) {
            personalities[`${element.personality.personality_type}`] = [element.personality.personality_description, element.personalityId];
        }


        answerBlock.append(nextAnswer);
    });
}


answerBlock.on("click", function (event) {
    const answerSelected = $(event.target);

    accrueResults(answerSelected.data("personality"), answerSelected.data("points"),answerSelected.data("archetype"));

    console.log(personalityResults);

    current++;
    $(this).empty();

    if (current < quiz.questions.length) generateNext();
    else {
        const result = Object.keys(personalityResults).reduce((a, b) => personalityResults[a] > personalityResults[b] ? a : b)
        questionBlock.text(`Congratulations! You are... ${result}!`)
        
        answerBlock.text(`${personalities[result][0]}`)
        console.log(personalities[result][1])
        console.log(archetypeResults);
        $.ajax({
            url: "/api/quizTaken",
            method: "POST",
            data: {
                quizId: quizID,
                userId: 1, //Comment out when user auth set up
                personalityId: personalities[result][1]
            }
        }).then(function(response){
            const archetypeUpdate = {};
             archetypeResults.forEach((element, index) => {
                archetypeUpdate[`archetype_${index+1}`] = element;
            })
            console.log(archetypeUpdate)
            $.ajax({
                url: "/api/user/1", //switch to user authentification when ready
                method: "PUT",
                data: archetypeUpdate
            }).then(function(result){
                console.log(result);
            })
        })
    }
})


function accrueResults(type, points, archetype) {
    if (`${type}` in personalityResults) {
        let currPoints = parseInt(personalityResults[type]);
        console.log()
        currPoints += parseInt(points);
        personalityResults[`${type}`] = `${currPoints}`;

    } else {
        personalityResults[`${type}`] = `${points}`;
    }
    archetype = parseInt(archetype);
    archetypeResults[archetype-1]++;
}