$(document).ready(function () {
    'use strict';

    //  carousel auto
    // $('.carousel').carousel({
    //     interval: 1500,
    //     keyboard:true
    //
    // });

    // adjust slider height

    var winH    = $(window).height(),
        navH    = $(".navbar").innerHeight(),
        upperH  = $(".upper-bar").innerHeight();

    var heightSlider = winH - (navH + upperH);
    //console.log(heightSlider);
    $(".slider, .carousel-item").height(heightSlider);

    // featured work shuffle

    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        //console.log($(this).data('class'));
        if($(this).data('class') === 'all') {
            $(".featured-work .imgTranstion").css("opacity", "1");
        } else {
            $(".featured-work .imgTranstion").css("opacity", "0.2");
            $($(this).data('class')).parent().css("opacity", "1");
        }
    });

    // on hover display indicator block
    // $(".testimonials .overlay").on("hover", function () {
    //     console.log("mahmoud");
    //     $(".background-indicator").fadeIn();
    // });

    // $(".testimonials").hover(function () {
    //     console.log("mahmoud");
    //     $(".background-indicator").fadeIn();
    // });
    //
    // $(".testimonials").blur(function () {
    //     console.log("mahmoud");
    //     $(".background-indicator").fadeOut();
    // });

    $(".testimonials").hover(
        function () {
            $(".background-indicator").fadeIn();
        },
        function () {
            $(".background-indicator").fadeOut();
        }
    );

    $("#validate").on("click", function () {
        var x = $("#testStr").val();
        var x1 = $("#testStr1").val();
        var x2 = $("#testStr2").val();
        var regex=/^[0-9]+$/;

        if ((!x.match(regex) && x == "" ) || (!x1.match(regex) && x1 == "" ) || (!x2.match(regex) && x2 == "" ))
        {
            $("#no").css("display", "block");
            $("#yse").css("display", "none");

        } else {
            $("#yse").css("display", "block");
            $("#no").css("display", "none");

        }
    });

    $("#testStr").on("focus", function () {
        $("#Ghadeer").css("display", "none");
    });
});