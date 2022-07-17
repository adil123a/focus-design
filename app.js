
//Animate on Scroll Library
AOS.init({
    offset: 120,
  delay: 0,
  duration: 2000, 
  easing: 'ease',
});

//Hide the contextmenu
var isBody=document.getElementById('body')
isBody.addEventListener('contextmenu',e=>{
    e.preventDefault()
})