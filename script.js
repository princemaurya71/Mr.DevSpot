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