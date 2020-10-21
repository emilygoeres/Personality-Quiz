$("#searchQuiz").on("submit", function (event) {
    event.preventDefault();
const searchBlock = $("#searchedQuizzes");
searchBlock.empty();
    const searchFor = $("#quizSearch").val()
    /* 
    $.ajax({
            url: "/api/quizzes/" + searchFor,
            method: "GET"
        }
    ).then(function (result) {
        
        searchBlock.css("display", "block");
        result.forEach(element => {
            const liEl = $("<li>");
            const link = $("<a>");
            a.text(element.something...);
            a.attr("href", route for the quiz)
            liEl.append(link)
            searchBlock.append(liEl);
        })
    })

    */
})

