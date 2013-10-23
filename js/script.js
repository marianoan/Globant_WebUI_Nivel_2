$(document).ready(function () {
    $(".tablesorter").tablesorter();
    $("#contact_list").show();
    $("#new_contact_form").hide();

    $(".icn_add_user").on("click", function () {
        $("#contact_list").hide();
        $("#new_contact_form").show();
    });

    $(".icn_view_users").on("click", function () {
        $("#contact_list").show();
        $("#new_contact_form").hide();
    });
    //$("#main").empty();
});

