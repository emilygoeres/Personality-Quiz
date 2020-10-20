$("#history").on("click", event => {
    const selected = $(event.target);
    if(selected.data("next")==="retakeButton") {
        //window.location quiz with an id of selected.data("quizID")
        //const id = selected.data("quizID")
    }else if (selected.data("next")==="deleterButton") {
        /*
        const id = $(this).data("quizID")
        $.ajax("/api/users/quiz/" + id, {
            type:'DELETE'
        }).then( function() {
            console.log("Deleted quiz from user " + id);
            location.reload()
        })
        
        */
    }
});