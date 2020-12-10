// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burg").val().trim()
            //sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function (event) {
        event.preventDefault();

        const id = $(this).data("id");
        const devour = 1; //1 for true $(this).data("devoured");
    
        const consumed = {
            devoured : devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: consumed
        }).then( (result) => {
            console.log(result);
            location.reload();
        });
    });

});
