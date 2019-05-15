$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour status to", newDevour);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            'burger_name': $("#burger_name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
            //might need a devoured trait here

        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });
});