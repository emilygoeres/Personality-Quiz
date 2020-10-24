//Post one big object into a create api route 

//INSERT INTO Quizzes(quiz_name,quiz_category) values (qName, qCategory), get back PK quiz id

//Henceforth, quiz id (primary key) = quizID

//INSERT INTO personalities (pName, pArchetype, pDescription )

//INSERT INTO questions  (questionText )
const quizBlock =$("#quizBlock");
const personalityBlock =$("#personalityBlock");


const personalities = [];
let archetypeDefinitions;
$.ajax({
    method:"GET",
    url: "/api/archetypes"
}).then(result => {
    archetypeDefinitions = result;
});



if(localStorage.getItem("quizInfo")) {
    quizBlock.hide();
} else {
    quizBlock.show();
    personalityBlock.hide();
}

$("#quizCreation").on("submit",function(event){
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo",JSON.stringify(quizInfo));
    quizBlock.hide();
    personalityBlock.show();
    // $.ajax("/api/quiz",{
    //     type: 'POST',
    //     data: quizInfo
    // }).then(function(response){
    //     console.log("Created a new quiz with id of " + response.id);
    // }).catch(err => console.log(err));
})

$("#quizCreation").on("submit",function(event){
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo",JSON.stringify(quizInfo));
    quizBlock.hide();
    personalityBlock.show();
    // $.ajax("/api/quiz",{
    //     type: 'POST',
    //     data: quizInfo
    // }).then(function(response){
    //     console.log("Created a new quiz with id of " + response.id);
    // }).catch(err => console.log(err));
})

$("#personalityCreation").on("submit",function(event){
    event.preventDefault();
    const quizInfo = {
        quiz_name: $("#qName").val().trim(),
        quiz_category: $("#qCategory").val().trim(),
        image_tile: $("#qPicture").val().trim()
    }
    localStorage.setItem("quizInfo",JSON.stringify(quizInfo));
    quizBlock.hide();
    personalityBlock.show();
    // $.ajax("/api/quiz",{
    //     type: 'POST',
    //     data: quizInfo
    // }).then(function(response){
    //     console.log("Created a new quiz with id of " + response.id);
    // }).catch(err => console.log(err));
})