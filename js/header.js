// First attempt
$(document).ready(function () {
  var $header = $("header"),
    $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function () {
    $(document).scroll(function () {
      if ($(window).scrollTop() <= 500) {
        $("body").removeClass("down");
      } else {
        var scrollBottom =
          $(document).height() - $(window).height() - $(window).scrollTop();
        $("body").toggleClass("down", scrollBottom > 200);
      }
    });
  });
});

// Script 1
// $(document).ready(function () {
//   var $header = $("header"),
//     $clone = $header.before($header.clone().addClass("clone"));

//   $(window).on("scroll", function () {
//     var fromTop = $(window).scrollTop();
//     $("body").toggleClass("down", fromTop > 800);
//   });
// });

//Script 2
// $(document).scroll(function () {
//   if ($(window).scrollTop() === 0) {
//     $(".menu").hide();
//   }
// });
