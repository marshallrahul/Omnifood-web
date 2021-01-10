
// DOM manipulation

$(document).ready(function () {
    $(".main-nav li a").hover(function () {
        $(this).toggleClass("myClass");
    // }, function () {
    //     $(this).removeClass("myClass");
    });
    $(".btn-1").css("background-color", "#e67e22");
    $(".btn-1 a").css("color", "#fff")
    $(".btn-2").hover(function () {
        $(this).css({
            "background-color" : "#e67e22",
            "transition" : "background-color 0.2s"
        });
        $(".btn-2 a").css("color", "#fff");
    }, function () {
        $(this).css({
            "background-color" : "",
            "transition" : "background-color 0.2s"
        });
        $(".btn-2 a").css("color", "");
    });
    
    // cities 
    $(".cities div figure img").hover(function () {
        $(this).css({"transform" : "scale(1.12)", "transition" : "transform 0.3"});
    }, function () {
        $(this).css({"transform" : "", "transition" : "transform 0.3s"});
    });
    
    // social icons
    $(".ion-social-facebook").hover(function () {
        $(this).css({"color": "#3b5998", "transition" : "color 0.2s"});
    }, function () {
        $(this).css({"color": "", "transition" : "color 0.2s"});
    });
    $(".ion-social-instagram").hover(function () {
        $(this).css({"color": "rgb(188, 42, 141)", "transition" : "color 0.2s"});
    }, function () {
        $(this).css({"color": "", "transition" : "color 0.2s"});
    });
    $(".ion-social-googleplus").hover(function () {
        $(this).css({"color": "#dd4b39", "transition" : "color 0.2s"});
    }, function () {
        $(this).css({"color": "", "transition" : "color 0.2s"});
    });
    $(".ion-social-whatsapp").hover(function () {
        $(this).css({"color": "#2edb1f", "transition" : "color 0.2s"});
    }, function () {
        $(this).css({"color": "", "transition" : "color 0.2s"});
    });
    
    // food images
    $(".meal-photo img").hover(function () {
        $(this).css({"transform" : "scale(1.15)", "transition" : "transform 0.2s"});
    }, function () {
        $(this).css({"transform" : "", "transition" : "transform 0.2s"});
    });
});