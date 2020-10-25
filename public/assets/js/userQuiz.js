const quizBlock = $("#quizBlock");
const personalityBlock = $("#personalityBlock");
const QAndABlock = $("#QAndABlock");
const completeBlock = $("#completeBlock");
const creationSuccessful = $("#creationSuccessful");

let quizInfo;
if (localStorage.getItem("quizInfo")) {
    quizInfo = JSON.parse(localStorage.getItem("quizInfo"));
}

let allPersonalityInfo = [];
if (localStorage.getItem("allPersonalityInfo")) {
    allPersonalityInfo = JSON.parse(localStorage.getItem("allPersonalityInfo"));
}


let QAndA = [[], []];
if (localStorage.getItem("QAndA")) {
    QAndA = JSON.parse(localStorage.getItem("QAndA"));
}

let archetypeDefinitions;
$.ajax({
    method: "GET",
    url: "/api/archetypes"
}).then(result => {
    archetypeDefinitions = result;
});

let personalityIds = [];


if (localStorage.getItem("quizInfo")) {
    quizBlock.hide();
    $("#quizTitle").text(`Quiz: ${quizInfo.quiz_name}`)
    $("#quizCategory").text(`Quiz: ${quizInfo.quiz_category}`)
    if (localStorage.getItem("personalitiesComplete") === "true") {
        personalityBlock.hide();
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



$("#quizCreation").on("submit", function (event) {
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo", JSON.stringify(quizInfo));
    quizBlock.hide();
    personalityBlock.show();

})

$("#quizCreation").on("submit", function (event) {
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo", JSON.stringify(quizInfo));
    quizBlock.hide();
    personalityBlock.show();
    // $.ajax("/api/quiz",{
    //     type: 'POST',
    //     data: quizInfo
    // }).then(function(response){
    //     console.log("Created a new quiz with id of " + response.id);
    // }).catch(err => console.log(err));
})

$("#personalityCreation").on("submit", function (event) {
    event.preventDefault();
    const personalityInfo = {
        personality_type: $("#pName").val().trim(),
        personality_description: $("#pDescription").val().trim(),
        archetypeId: $("#pArchetype").val()
    }
    allPersonalityInfo.push(personalityInfo);
    localStorage.setItem("allPersonalityInfo", JSON.stringify(allPersonalityInfo));

    $("#pName").val("");
    $("#pDescription").val("");
    $("#pArchetype").val(1);
})

$("#personalitiesFinished").on("click", function (event) {


    personalityBlock.hide();
    QAndABlock.show();

    localStorage.setItem("personalitiesComplete", "true")
    populateAnswerPersonalities();
})

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

$(':checkbox').on('click', function (event) {
    const num = $(event.target).data("num")
    const str = "#a" + num;
    $(`${str}`).toggle();
});




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

$("#questionsFinished").on("click", function (event) {
    localStorage.setItem("questionsComplete", "true");
    QAndABlock.hide();
    completeBlock.show();
})

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
