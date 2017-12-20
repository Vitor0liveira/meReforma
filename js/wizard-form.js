$(document).ready(function() {

$(".account-element").on("click", ".choice", function() {
    var id = $(this).attr("id");

    console.log(id);

    if (id === "check-test") {
        console.log("Click on checkbox test");
        $('#teste').remove();
        showCategories();
    } else if (id === "check-ap") {
        console.log("Click on checkbox apto");
        var html = "<div id='teste' class='account-element col-sm-3 col-xs-6'><div id='check-test' class='choice' data-toggle='wizard-radio'><input type='checkbox' name='jobb'/><div class='icon'><i class='fa fa-terminal'></i></div><h6>Teste</h6></div></div>";
        hideCategories();
        $('#pane-account').append(html);
    } else {
        console.log("Click not identified");
    }
});

function hideCategories() {
    console.log("Hidding elements");
    $(".account-element").hide();
}

function showCategories() {
    console.log("Displaying apartamento");
    $(".account-element").show();
}
});