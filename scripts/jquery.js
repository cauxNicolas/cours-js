/*****************************************
 *          Excercie 5 en jQuery          *
 *****************************************/

$("#services a").click(function(e) { // similaire addeventListenner
    console.log(e);
    e.preventDefault()
    if ($(this).html() == "Read More »") {
        jQuery.data(
            $(this).parent().parent().children("p"),
            "Text",
            $(this).parent().parent().children("p").text()
        )
        $(this).parent().parent().children("p").append("azerty")
        $(this).html("Read Less &raquo;")
    } else {
        $(this).html("Read More »")
    }
})