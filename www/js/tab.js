var next = function(){
    var car = $("#car");
    car.get(0).next();
    var tabs = $(".tab").children();
    console.info();
    $(tabs[0]).removeClass("active")
    $(tabs[1]).addClass("active")
}
var prev = function(){
    var car = $("#car");
    car.get(0).prev();
    var tabs = $(".tab").children();
    $(tabs[1]).removeClass("active");
    $(tabs[0]).addClass("active");
}
