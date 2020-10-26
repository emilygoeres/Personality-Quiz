const questionText = $("#questionText");
const answerBlock = $("#answerBlock");
const resultBlock = $("#resultBlock");
const nextButton = $("#nextButton");
const quizDescription = $("#quizDescription");
const quizID = questionText.data("quizid");
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
}).then(function (response) {
    console.log(response);
    quiz = response;
})


// Button Click Listener to begin the Quiz, disappears after click and begins generating questions
nextButton.on("click", function (event) {
    nextButton.hide();
    quizDescription.hide();
    current = 0;

    generateNext();

})

// Function to generate the next question
function generateNext() {
    questionText.text(quiz.questions[current].question);
    quiz.questions[current].answers.forEach((element, index) => {
        let nextAnswer = $("<div>").text(element.answer);
        nextAnswer.data("personality", element.personality.personality_type);
        nextAnswer.data("archetype", element.personality.archetypeId);
        nextAnswer.data("points", element.points);
        nextAnswer.addClass("box answerChoice")

        if (!(`${element.personality.personality_type}` in personalities)) {
            personalities[`${element.personality.personality_type}`] = [element.personality.personality_description, element.personalityId];
        }

        // Append the answer to the answer block
        answerBlock.append(nextAnswer);
    });
}

// Click Listener for answer block
answerBlock.on("click", function (event) {
    // if the user selects on an answer, run the code below.
    // If they select the area within the answer block that isnt an answer choice, do nothing
    if ($(event.target).hasClass("answerChoice")) {
        // Store the selected answer into a variable
        const answerSelected = $(event.target);
        // Run the accrue results function on the answer selected
        accrueResults(answerSelected.data("personality"), answerSelected.data("points"), answerSelected.data("archetype"));

        console.log(personalityResults);

        // Increment the current question counter
        current++;

        // Empty the contents of answer block to prepare for new questions
        $(this).empty();

        // If there are still questions left in the quiz, generate the next one.
        // else, show results and update database (quiz results and user archetype counters)
        if (current < quiz.questions.length) {
            generateNext()
        } else {
            // Find the personality with the most points, return that as Result
            const result = Object.keys(personalityResults).reduce((a, b) => personalityResults[a] > personalityResults[b] ? a : b)

            // Update the text on UI to show personality result
            questionText.text(`Congratulations! You are... ${result}!`)

            // Update the text in the answer block to show personality result description
            answerBlock.hide();
            resultBlock.text(`${personalities[result][0]}`)
            resultBlock.addClass("box");

            console.log(personalities[result][1])
            console.log(archetypeResults);

            // POST request to store the quiz results in DB
            $.ajax({
                url: "/api/quizTaken",
                method: "POST",
                data: {
                    quizId: quizID,
                    personalityId: personalities[result][1]
                }
            }).then(function (response) {
                // Function to store updated archetype counts for user in an object
                const archetypeUpdate = {};
                archetypeResults.forEach((element, index) => {
                    archetypeUpdate[`archetype_${index + 1}`] = element;
                })

                console.log(archetypeUpdate)

                // Update the User's archetype counts in DB
                $.ajax({
                    url: "/api/user/1", //TODO: switch to user authentification when ready
                    method: "PUT",
                    data: archetypeUpdate
                }).then(function (result) {
                    console.log(result);
                })
            })
        }
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
    archetypeResults[archetype - 1]++;
}

$(".modalStart.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})

$(".modal-background.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})

$(".delete.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})