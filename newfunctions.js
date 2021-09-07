$(document).ready(function() {
    var delay_time = 0;

    $(".menu-button").click(function() {
        if ($("#navigation-list").css("display") == "none") {
            $("#navigation-list").css("display", "flex");

            $("li").hide().each(function (i) {
                $(this).delay(delay_time).fadeIn();
                delay_time += 50;
            })

            delay_time = 0; // reset time before exiting

            return
        }

        if ($("#navigation-list").css("display") == "flex") {
            $($("li").get().reverse()).each(function (i) {
                $(this).delay(delay_time).fadeOut();
                delay_time += 50;
            })

            delay_time = 0;

            setTimeout(function() {
                $("#navigation-list").css("display", "none");
            }, 500)
            return
        }
    });
});