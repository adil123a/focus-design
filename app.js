
//Animate on Scroll Library
AOS.init({
  offset: 120,
  delay: 0,
  duration: 1000, 
  easing: 'ease',
});

//Hide the contextmenu
var isBody= document.getElementById('body')
isBody.addEventListener('contextmenu',e=>{
    e.preventDefault()
})

//Owl carosel
$('.owl-carousel').owlCarousel({
  loop:true,
  dots:false,
  autoplayTimeout:1000,
  autoplay:true,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})