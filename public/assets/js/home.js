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
        // console.log(result);
        result.forEach(element => {
            const liEl = $("<li>");
            const link = $("<a>");
            link.text(element.quiz_name);
            link.attr("href", "/quiz/1")
            liEl.append(link)
            searchBlock.append(liEl);
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