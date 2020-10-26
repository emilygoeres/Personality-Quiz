let archetypeDefinitions;
$.ajax({
    method: "GET",
    url: "/api/archetypes"
}).then(result => {
    archetypeDefinitions = result;
});

$("#history").on("click", event => {
    const selected = $(event.target);
    if(selected.data("next")==="retakeButton") {
        const id = selected.data("quizid");
        location.href = "/quiz/"+id;
    }else if (selected.data("next")==="deleterButton") {
        
        const id = selected.data("quizid");
        $.ajax("/api/quizTaken/" + id, {
            type:'DELETE'
        }).then( function() {
            location.reload()
        })
        
        
    }
});

$(".modalStart").on("click", function(event){
    $(".modal").toggleClass("is-active")
    const archetypeId = $(this).data("archid");
    $("#archetypeName").text(archetypeDefinitions[archetypeId-1].archetype.toUpperCase());
    $("#archetypeDescription").text(archetypeDefinitions[archetypeId-1].archetype_description);
})

$(".modal-background").on("click", function(event){
    $(".modal").toggleClass("is-active")
})

$(".delete").on("click", function(event){
    $(".modal").toggleClass("is-active")
})