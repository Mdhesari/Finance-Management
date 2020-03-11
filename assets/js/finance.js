$(document).ready(function () {

    

    // back cover for selection 
    $(".backcover").on("click", function () {
        $(".profile-dropdown").slideUp();
        $(this).hide();
    });

    $(".filter-reports li:last-child").click(function () {
        $(".Date").css("display", "inline");
    });

    $("#close-date").click(function () {
        //$('.Date').hide(selectedEffect, options, 1000, callback);
        $(".Date").hide("fade");
    });

    

    $(".profile-btn p").click(function () {

        $(".backcover").show();

        $(".profile-dropdown").slideToggle();

    });

})
