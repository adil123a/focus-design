
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
//Prevent the text Selecting
isBody.addEventListener('selectstart',e=>{
  e.preventDefault()
})