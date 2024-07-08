var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
});

var h4all = document.querySelectorAll(".nav h4");

h4all.forEach(function (elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid white";
        crsr.style.transitionDuration = "0.2s"
        crsr.style.borderColor = "white"
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "rgba(156, 255, 7, 0.733)";
        crsr.style.border = "none";
        crsr.style.transitionDuration = "0.1s"
    });
});

gsap.to('.colon1',{
    y:30,
    x:20,
    duration:1.5,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        markers:true,
    }
})
gsap.to('.colon2',{
    y:-40,
    x:-10,
    duration:1.5,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        markers:true,
        // start:"top -90%"
    }
})
