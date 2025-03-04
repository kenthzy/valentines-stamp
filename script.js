document.querySelector('.stamp').addEventListener('click', () => {
  window.location.href = 'chocolate.html';
});

document.querySelector('.wrap-my-candy').addEventListener('click', () => {
  window.location.href = '/';
});

//snow script
innerStamp = document.getElementById("inner-stamp");

for (let i=0;i<800;i++){
  makeSnow();
}
function makeSnow(){
  const snow = document.createElement("div");
  snow.classList.add('snow');
  let positionX = Math.random() * (window.innerWidth);
  let positionY = Math.random() * window.innerHeight;
	let speed = Math.random(2);
  snow.style.top = `${positionY}px`;
  snow.style.left = `${positionX}px`;
    function drop() {
      positionY += speed;
      snow.style.top = `${positionY}px`;
      if (positionY > window.innerHeight) {
        positionY= - 5; 
      }
      requestAnimationFrame(drop);
    }
		drop();
		innerStamp.appendChild(snow);
}
