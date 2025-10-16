function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// locomotiveAnimation()

function navAnimation(){
    var nav = document.querySelector("nav")
nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline() //This line convert the code into synchronized
    tl.to(".nav-bottom", {
        height: "28vh"
    })
    tl.to(".nav-part2 h5", {
        display: "block"
    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        duration: 0.4,
        stagger: {
            amount: 1
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline() //This line convert the code into synchronized
    tl.to(".nav-part2 h5 span", {
        y:25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none", duration: 0.1
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration: 0.1
    })
})
}

navAnimation()

function page2animation(){
    let rightElements = document.querySelectorAll(".right-elem")
rightElements.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3], {
            opacity:1,
            scale:1
            
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3], {
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3], {
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-150

        })
    })
})
}

page2animation()


function page3Animation(){
    let = page3Center = document.querySelector(".page3-center")

let video = document.querySelector(".page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0
    })
})

video.addEventListener("click", function(){
    video.pause()
     gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 1,
        borderRadius:"30px"
    })
})
}

page3Animation()

function videoAnimation(){
    let section = document.querySelectorAll(".sec-right")
section.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()

    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].laod()

    })
})
}

videoAnimation()

function page7Animation(){
    gsap.from(".btn7-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".btn7-part2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 10%",
        scrub:true
    }
})
}

page7Animation()

function loadingAnimation(){
    let tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1", {
    transform:"ScaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"100px",
    duration:1,
    ease:"expo.out"
})

tl.from("nav",{
    opacity: 0
})

tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity: 0,
    duration:0.5,
    stagger:0.2
    
})
}

loadingAnimation()