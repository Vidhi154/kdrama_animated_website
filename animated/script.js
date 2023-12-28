// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circlemouse(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function firstpage(){
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundlm", {
        y: 0,
        // opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut,
        stagger: .2,
        delay:-1
    })

    .from("#herofoot", {
        y: -10,
        opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })



}


function circlechap(){
    window.addEventListener("mousemove", function(dets){
        
    })
}




circlemouse();
firstpage();
