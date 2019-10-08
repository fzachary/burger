// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var name = $(this).data("name")
        var newDevoured = 1;

        console.log(id, newDevoured);

        var newBurgerState = {
            id: id,
            burger_name: name,
            devoured: newDevoured
        };

        console.log(newBurgerState);

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#add-burger").on("click", function(event) {
        // preventDefault
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".redo-burger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var name = $(this).data("name")
        var newDevoured = 0;

        console.log(id, newDevoured);

        var newBurgerState = {
            id: id,
            burger_name: name,
            devoured: newDevoured
        };

        console.log(newBurgerState);

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});