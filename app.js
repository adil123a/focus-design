
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

// custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})