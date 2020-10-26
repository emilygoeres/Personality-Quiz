const viewToggle = $("#normalViewToggle");
let view = true;

//When a search is performed, the search results are made visible and the featured quizzes etc are removed from view.
$("#searchQuiz").on("submit", function (event) {
    event.preventDefault();

    
    const searchBlock = $("#searchedQuizzes > ul");
    searchBlock.empty();

    const searchFor = $("#quizSearch").val()
    $("#quizSearch").val("");

    $("#searchedQuizzes").css("display", "block");
    viewToggle.css("display", "block");

    $.ajax({
        url: "/api/quizzes/" + searchFor,
        method: "GET"
    }
    ).then(function (result) {
        result.forEach(element => {
            // Create elements for search results
            const link = $("<a>");
            const newCard = $("<div>");
            const newCardContent = $("<div>")
            const newP = $("<p>")

            // Style and give data to those elements
            link.attr("href", `/quiz/${element.id}`)
            newCard.addClass("card mb-1 allQuizzesCard")
            newCardContent.addClass("card-content")
            newP.addClass("is-size-5")
            newP.text(element.quiz_name);

            // Append those elements to the page
            newCardContent.append(newP);
            newCard.append(newCardContent);
            link.append(newCard);
            searchBlock.append(link);
        })
        $("#featuredQuizzes").hide();
        $("#allQuizzes").hide();
        view = false;
    })
})

//After a search has been performed, a "back" button is shown, and can be clicked to move between normal view and viewing the search results.
viewToggle.on("click", function(event) {
    if(view) {
        $("#featuredQuizzes").hide();
        $("#allQuizzes").hide();
        $("#searchedQuizzes").show()
        view = false;
    } else {
        $("#featuredQuizzes").show();
        $("#allQuizzes").show();
        $("#searchedQuizzes").hide();
        view = true;
    }
})

$(".modalStart.continue").on("click", function(event){
    $(".modal#continue").toggleClass("is-active")
    const quizId = $(this).data("quizid");
    $("#quizLink").attr("href",`/quiz/${quizId}`)
})

$(".modal-background.continue").on("click", function(event){
    $(".modal#continue").toggleClass("is-active")
})

$(".delete.continue").on("click", function(event){
    $(".modal#continue").toggleClass("is-active")
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