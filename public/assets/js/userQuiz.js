//These elements are flipped from hidden to visible depending how how far the user has progressed in their quiz creation.
const quizBlock = $("#quizBlock");
const personalityBlock = $("#personalityBlock");
const QAndABlock = $("#QAndABlock");
const completeBlock = $("#completeBlock");
const creationSuccessful = $("#creationSuccessful");

//Stores the name/category of the quiz globally, and grabs the current quiz if the user has been working on it when the page reloads
let quizInfo;
if (localStorage.getItem("quizInfo")) {
    quizInfo = JSON.parse(localStorage.getItem("quizInfo"));
}

//Stores all created personalities (including name, description, and archetype association) of the quiz globally, and grabs all created personalities if the user has been working on it when the page reloads
let allPersonalityInfo = [];
if (localStorage.getItem("allPersonalityInfo")) {
    allPersonalityInfo = JSON.parse(localStorage.getItem("allPersonalityInfo"));
}

//Stores all created question (just question text) and answer (answer text, personality association) sets of the quiz globally, and grabs all created sets if the user has been working on it when the page reloads
let QAndA = [[], []];
if (localStorage.getItem("QAndA")) {
    QAndA = JSON.parse(localStorage.getItem("QAndA"));
}

//This information, as of 10/24/2020, is not currently in use. The idea is that while creating personalities, users can see the explanations of the archetypes.
let archetypeDefinitions;
$.ajax({
    method: "GET",
    url: "/api/archetypes"
}).then(result => {
    archetypeDefinitions = result;
});

//This is only used in posting the entire question to the server.
let personalityIds = [];

//Controls what sections are shown at any given point in time by flipping display from "block" to "none" and vice versa. Additionally, populates the sidebar with a history of user inputs.
if (localStorage.getItem("quizInfo")) {
    quizBlock.hide();
    $("#quizTitle").text(`Quiz Title: ${quizInfo.quiz_name}`)
    $("#quizCategory").text(`Quiz Description: ${quizInfo.quiz_category}`)
    if (allPersonalityInfo.length) {
        allPersonalityInfo.forEach(element => {
            const newList = $("<ul>");
            const liPersonality = $("<li>").text(`Personality: ${element.personality_type}`);
            const liPDescription = $("<li>").text(`Description: ${element.personality_description}`)
            newList.append(liPersonality, liPDescription);
            $("#quizPersonalities").append(newList)
        });
    }
    if (localStorage.getItem("personalitiesComplete") === "true") {
        personalityBlock.hide();
        if (QAndA[0].length) {
            for (let i = 0; i < QAndA[1].length; i++) {
                const questionDisplay = $("<h3>").text(`Question: ${QAndA[0][i].question}`);
                const newList = $("<ul>");
                console.log(QAndA[1][i]);
                QAndA[1][i].forEach(element => {
                    console.log(element)
                    const liPDescription = $("<li>").text(`Answer: ${element.answer}`)
                    newList.append(liPDescription);
                });

                $("#quizQuestions").append(questionDisplay,newList)
            }

        }
        if (localStorage.getItem("questionsComplete") === "true") {
            completeBlock.show()
            QAndABlock.hide();
            creationSuccessful.hide();
        } else {
            completeBlock.hide();
            QAndABlock.show();
            populateAnswerPersonalities();
            creationSuccessful.hide();
        }
    } else {
        personalityBlock.show();
        QAndABlock.hide();
        completeBlock.hide();
        creationSuccessful.hide();
    }
} else {
    quizBlock.show();
    personalityBlock.hide();
    QAndABlock.hide();
    completeBlock.hide();
    creationSuccessful.hide();
}


//Stores quiz name and category for later submission to the database
$("#quizCreation").on("submit", function (event) {
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo", JSON.stringify(quizInfo));
    
    location.reload();

})

//Stores personalities for later submission to the database
$("#personalityCreation").on("submit", function (event) {
    event.preventDefault();
    const personalityInfo = {
        personality_type: $("#pName").val().trim(),
        personality_description: $("#pDescription").val().trim(),
        archetypeId: $("#pArchetype").val()
    }
    allPersonalityInfo.push(personalityInfo);
    localStorage.setItem("allPersonalityInfo", JSON.stringify(allPersonalityInfo));

    location.reload();
})

//Indicates the user is finished creating personality results
$("#personalitiesFinished").on("click", function (event) {
    personalityBlock.hide();
    QAndABlock.show();

    localStorage.setItem("personalitiesComplete", "true")
    populateAnswerPersonalities();
})

//The user can only shoose personality results for each answer from a dropdown list of previously defined personality results.
function populateAnswerPersonalities() {
    for (let i = 0; i < allPersonalityInfo.length; i++) {

        const liEl = $("<option>");
        liEl.val(i)
        liEl.text(allPersonalityInfo[i].personality_type);
        $(".personalityList").append(liEl);
    }

    $("#a5").hide();
    $("#a6").hide();
    $("#a7").hide();
    $("#a8").hide();
}

//Toggles answer forms when the checkbox is ticked
$(':checkbox').on('click', function (event) {
    const num = $(event.target).data("num")
    const str = "#a" + num;
    $(`${str}`).toggle();
});

//Grabs the current question-answer set and stores it for later referral, if and only if the answer checkboxes are ticked
$("#allAnswers").on("submit", function (event) {
    event.preventDefault();
    const questionInfo = {
        question: $("#questionText").val().trim(),
        //need to grab quiz id and insert it in here after posting
    }

    let answersInfo = [];
    for (let i = 1; i <= 8; i++) {
        const str = "#answer" + i;
        console.log($(`${str}`));
        console.log($(`#answer1`).is(":checked"));
        if ($(str).is(":checked")) {
            let answerObj = {
                answer: $(`#answerText${i}`).val(),
                personalityIdProvisional: $(`#aPersonality${i}`).val(),
                points: $(`#aPoints${i}`).val()
            }
            answersInfo.push(answerObj);
        }
    }
    QAndA[0].push(questionInfo)
    QAndA[1].push(answersInfo);
    localStorage.setItem("QAndA", JSON.stringify(QAndA));
    location.reload();

})

//Finishes inputting questions and asks the user for confirmation to proceed
$("#questionsFinished").on("click", function (event) {
    localStorage.setItem("questionsComplete", "true");
    QAndABlock.hide();
    completeBlock.show();
})

//Posts the quiz in its entirety to the server, and thus, the database
$("#postQuiz").on("click", function (event) {
    $.ajax("/api/quiz", {
        type: 'POST',
        data: quizInfo
    }).then(function (quizResponse) {
        console.log("Created a new quiz with id of " + quizResponse.id);

        let personalityPostings = Array();
        for (let i = 0; i < allPersonalityInfo.length; i++) {
            personalityPostings.push(
                $.ajax("/api/personalities", {
                    type: 'POST',
                    data: allPersonalityInfo[i],
                    success: function (res) {
                        personalityIds.push(res.id)
                    }
                })
            )
        }

        $.when.apply($, personalityPostings).then(function () {
            console.log(personalityIds);

            let questionPostings = Array();
            for (let j = 0; j < QAndA[0].length; j++) {
                let questionData = QAndA[0][j];
                questionData.quizId = quizResponse.id;
                $.ajax("/api/questions", {
                    type: "POST",
                    data: questionData
                }).then(function (questionResponse) {
                    let questionId = questionResponse.id;
                    console.log(questionId);
                    for (let k = 0; k < QAndA[1][j].length; k++) {
                        let answerData = QAndA[1][j][k];
                        console.log(answerData);
                        answerData.questionId = questionId;
                        answerData.personalityId = parseInt(answerData.personalityIdProvisional) + parseInt(personalityIds[0]);
                        $.ajax("/api/answer", {
                            type: "POST",
                            data: answerData
                        }).then(function (answerResponse) {
                            console.log(answerResponse)

                            if (k === QAndA[1][j].length - 1 && j === QAndA[0].length - 1) {
                                localStorage.clear();
                                completeBlock.hide();
                                creationSuccessful.show();
                            }
                        })
                    }
                })
            }


        })

    }).catch(err => console.log(err));

})


$(".modalStart.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})

$(".modal-background.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})

$(".delete.about").on("click", function(event){
    $(".modal#about").toggleClass("is-active")
})