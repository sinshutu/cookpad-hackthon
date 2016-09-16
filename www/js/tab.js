var active = 0;
var toggle = function(){
    var tabs = $(".tab").children();
    $(tabs[active]).removeClass("active");
    console.log(active);
    active = (active == 0)?1:0;
    $(tabs[active]).addClass("active");
}
var next = function(){
    var car = $("#car");
    car.get(0).next();
}
var prev = function(){
    var car = $("#car");
    car.get(0).prev();
    var tabs = $(".tab").children();
}
$(document).ready(function(){
    var car = $("#car");
    car.on('postchange',function(e){
        toggle();
    });
});
