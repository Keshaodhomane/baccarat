

/* toggle fullscreen  */


function toggleFullScreen(elem) {
   // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
   if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
       if (elem.requestFullScreen) {
           elem.requestFullScreen();
       } else if (elem.mozRequestFullScreen) {
           elem.mozRequestFullScreen();
       } else if (elem.webkitRequestFullScreen) {
           elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
       } else if (elem.msRequestFullscreen) {
           elem.msRequestFullscreen();
       }
   } else {
       if (document.cancelFullScreen) {
           document.cancelFullScreen();
       } else if (document.mozCancelFullScreen) {
           document.mozCancelFullScreen();
       } else if (document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
       } else if (document.msExitFullscreen) {
           document.msExitFullscreen();
       }
   }
}

/* end toggle fullscreen */



/* close window  */

function closewindow(){
var win = window.open("about:blank", "_self");
window.close();
}


$(".closebutton").click(function(){

   closewindow();

})

/* end close window */







CSSPlugin.defaultTransformPerspective = 1000;

//we set the backface 
TweenMax.set($(".cardBack"), {rotationY:-180});

tl = new TimelineMax ({ paused:true } );

tl .from( $(".card1"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card1").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card1").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card1"), .5, {z:50}, 0 )
   .to( $(".card1"), .5, {z:0}, .5 )


   .from( $(".card3"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card3").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card3").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card3"), .5, {z:50}, 0 )
   .to( $(".card3"), .5, {z:0}, .5 )
   

   .from( $(".card2"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card2").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card2").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card2"), .5, {z:50}, 0 )
   .to( $(".card2"), .5, {z:0}, .5 )
   
   
   .from( $(".card4"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card4").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card4").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card4"), .5, {z:50}, 0 )
   .to( $(".card4"), .5, {z:0}, .5 )


   .from( $(".card5"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card5").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card5").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card5"), .5, {z:50}, 0 )
   .to( $(".card5"), .5, {z:0}, .5 )



   .from( $(".card6"), 2, {top:"17%", left:"73.5%", rotation:-40, scaleX:0.65, scaleY:0.65 })
   .to( $(".card6").children(".cardFront"), 1, {rotationY:180} )
   .to( $(".card6").children(".cardBack"), 1, {rotationY:0}, 0 )
   .to( $(".card6"), .5, {z:50}, 0 )
   .to( $(".card6"), .5, {z:0}, .5 )


   .to($(".player-points"), .5, {opacity:1, scale:1})
   .to($(".banker-points "), .5, {opacity:1, scale:1})
   .to($(".winner-banner"), 1, {opacity:1, scale:1}, "+=2")
   


$(".deal-button, .closebutton, .fullscreen").hover(elOver, elOut);

$(".rebet-button").hover(elOver, elOut);

function elOver() {
  TweenMax.to($(this), .5, {scale:1.2});
}

function elOut() {
  TweenMax.to($(this), .5, {scale:1});
}


$(".deal-button").click(function()
{
tl.play();
tl.timeScale(2);
})


$(".rebet-button").click(function(){
   tl.restart()
   tl.pause();
})



/* scroll coins */

$(".beforespan").click(function()
{
   TweenMax.to(".coinscontainer", .5, {x:"+= 60px"})
})


$(".afterspan").click(function()
{
   TweenMax.to(".coinscontainer", .5, {x:"-= 60px"})
   
})


$(".coinscontainer div img").hover(function(){
  

})


/* end scroll coins */





/* coins drag and drop */




/* end coins drag and drop */



/* hide left links */

$(".hideall").click(function()
{
   TweenMax.to($(".leftlinks"), 1, {x:"-100px"})
})

/* end hide left links */
