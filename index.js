Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle('.hvr' , {videos:["https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4", "https://videos.pexels.com/video-files/9669050/9669050-hd_1920_1080_25fps.mp4" ,"https://videos.pexels.com/video-files/9668944/9668944-hd_1920_1080_25fps.mp4"],})

gsap.to(".l1",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start: "top top",
        end: "bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})

var sections = document.querySelectorAll(".l1")
Shery.imageEffect("#img", {
    style: 5,
    // config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
      sections.forEach(function(section , index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress + index)
            }
        })
      })
    },
  });