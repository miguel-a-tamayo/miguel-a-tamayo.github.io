$(document).ready(function() {

    $(".menu-button").click(function() {
        if ($("#navigation-list").css("display") == "none") {
            $("#navigation-list").css("display", "flex");
            return
        }

        if ($("#navigation-list").css("display") == "flex") {
            $("#navigation-list").css("display", "none")

            $("#navigation-list").css("display", "none");
            return
        }
    });
});