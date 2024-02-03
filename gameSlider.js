const slider = document.getElementById('sliderGames');
let isDown = false;
let startX;
let scrollLeft;


function slideLeft() {
    document.getElementById("sliderGames").scrollLeft -= 300;
}

function slideRight() {
    document.getElementById("sliderGames").scrollLeft += 300;
}


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
    slider.style.scrollSnapType = "none"
});



slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.scrollSnapType = "x mandatory"
});


slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  beginMomentumTracking();
  slider.style.scrollSnapType = "x mandatory"
});


slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-fast
  var prevScrollLeft = slider.scrollLeft;
  slider.scrollLeft = scrollLeft - walk;
  velX = slider.scrollLeft - prevScrollLeft;
});



// Momentum 

var velX = 0;
var momentumID;

slider.addEventListener('wheel', (e) => {
  cancelMomentumTracking();
});  

function beginMomentumTracking(){
  cancelMomentumTracking();
  momentumID = requestAnimationFrame(momentumLoop);
}
function cancelMomentumTracking(){
  cancelAnimationFrame(momentumID);
}
function momentumLoop(){
  slider.scrollLeft += velX;
  velX *= 0.95; 
  if (Math.abs(velX) > 0.5){
    momentumID = requestAnimationFrame(momentumLoop);
  }
}