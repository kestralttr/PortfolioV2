
let activateGlitch = function(element) {
  	let el = element;
    // el.style.color = "red";
    let x = Math.floor(Math.random() * 50);
    x = x - 25;
    let y = Math.floor(Math.random() * 50);
    y = y - 25;
    let scaleX = +(Math.random() * 3).toFixed(2);
    scaleX = scaleX - 1.5;
    let scaleY = +(Math.random() * 3).toFixed(2);
    scaleY = scaleY - 1.5;
    let ms = Math.floor(Math.random() * 750);
    el.style.transform = "translate(" + x + "px," + y + "px) " + "scale(" + scaleX + "," + scaleY + ")";
    setTimeout(function() {
    	el.style.transform = "none";
    },ms);
};

setInterval(function() {
  let skillItems = document.getElementsByClassName("skill-item");
  Array.prototype.forEach.call(skillItems,function(el) {
    let randomizer = Math.round(Math.random() * 2);
    if(randomizer === 0) {
      activateGlitch(el);
    }
  });
},3000);
