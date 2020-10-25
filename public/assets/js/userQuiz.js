//Post one big object into a create api route 

//INSERT INTO Quizzes(quiz_name,quiz_category) values (qName, qCategory), get back PK quiz id

//Henceforth, quiz id (primary key) = quizID

//INSERT INTO personalities (pName, pArchetype, pDescription )

//INSERT INTO questions  (questionText )
const quizBlock = $("#quizBlock");
const personalityBlock = $("#personalityBlock");
const QAndABlock = $("#QAndABlock");


let allPersonalityInfo = [];
if (localStorage.getItem("allPersonalityInfo")) {
    allPersonalityInfo = JSON.parse(localStorage.getItem("allPersonalityInfo"));
}


let personalityIds = [];
if (localStorage.getItem("personalityIds")) {
    personalityIds = JSON.parse(localStorage.getItem("personalityIds"));
}

let QAndA = [];
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



if (localStorage.getItem("quizInfo")) {
    quizBlock.hide();
    if (localStorage.getItem("personalityIds")) {
        personalityBlock.hide();
        QAndABlock.show();
        populateAnswerPersonalities();
    } else {
        personalityBlock.show();
        QAndABlock.hide();
    }
} else {
    quizBlock.show();
    personalityBlock.hide();
    QAndABlock.hide();

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
    // $.ajax("/api/quiz",{
    //     type: 'POST',
    //     data: quizInfo
    // }).then(function(response){
    //     console.log("Created a new quiz with id of " + response.id);
    // }).catch(err => console.log(err));
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
    personalityIds = [];
    // allPersonalityInfo.forEach(element => {
    //     $.ajax("/api/personalities", {
    //         type: 'POST',
    //         data: element
    //     }).then(function (response) {
    //         console.log("Created a new personality with id of " + response.id);

    //         personalityIds.push(response.id);
    //         localStorage.setItem("personalityIds", JSON.stringify(personalityIds))
    //     }).catch(err => console.log(err));

    // })

    personalityBlock.hide();
    QAndABlock.show();

    populateAnswerPersonalities();
})

function populateAnswerPersonalities() {
    for (let i = 0; i < personalityIds.length; i++) {

        const liEl = $("<option>");
        liEl.val(personalityIds[i])
        liEl.text(allPersonalityInfo[i].personality_type);
        $(".personalityList").append(liEl);
    }

    $("#a5").hide();
    
    $("#a6").hide();
    
    $("#a7").hide();
    
    $("#a8").hide();
}

$("#questionText").on("submit", function (event) {
    event.preventDefault();
    const questionInfo = {
        question: $("#pName").val().trim(),
        //need to grab quiz id and insert it in here after posting quiz
        quizId: 7
    }
    allPersonalityInfo.push(personalityInfo);
    localStorage.setItem("allPersonalityInfo", JSON.stringify(allPersonalityInfo));

    $("#pName").val("");
    $("#pDescription").val("");
    $("#pArchetype").val(1);
})

$("#answer1").click(function() {
    $("#a1").toggle();
})

$("#answer2").click(function() {
    $("#a2").toggle();
})

$("#answer3").click(function() {
    $("#a3").toggle();
})

$("#answer4").click(function() {
    $("#a4").toggle();
})

$("#answer5").click(function() {
    $("#a5").toggle();
})

$("#answer6").click(function() {
    $("#a6").toggle();
})

$("#answer7").click(function() {
    $("#a7").toggle();
})

$("#answer8").click(function() {
    $("#a8").toggle();
})