for (var i = 1; i < 99999; i++) window.clearInterval(i);
$("#blcontent").remove();
$("#blwrapper").remove();
$("#container").css("opacity","1");
$("center").css("opacity","1");
$("body").css("overflow","visible");

document.watch('location', function() {
    return '#';
});
