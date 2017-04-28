
let activateGlitch = function(element,pos,scale) {
  	let el = element;
    // el.style.color = "red";
    let x = Math.floor(Math.random() * pos);
    x = x - (pos/2);
    let y = Math.floor(Math.random() * pos);
    y = y - (pos/2);
    let scaleX = +(Math.random() * scale).toFixed(2);
    scaleX = scaleX - (scale/2);
    let scaleY = +(Math.random() * scale).toFixed(2);
    scaleY = scaleY - (scale/2);
    let ms = Math.floor(Math.random() * 300) + 200;
    el.style.transform = "translate(" + x + "px," + y + "px) " + "scale(" + scaleX + "," + scaleY + ")";
    setTimeout(function() {
    	el.style.transform = "none";
    },ms);
};

let descriptions = [
  "Software Engineer",
  "Frontend Fanatic",
  "UI Connoisseur",
  "JavaScript Expert",
  "React Aficionado",
  "Rails Adept"
];

let description = document.querySelector("#intro h2");
let dIdx = 0;

setInterval(function() {
  let skillItems = document.getElementsByClassName("skill-item");
  Array.prototype.forEach.call(skillItems,function(el) {
    let randomizer = Math.round(Math.random() * 3);
    if(randomizer < 2) {
      activateGlitch(el,50,3);
    }
  });
  if(dIdx === descriptions.length - 1) {
    dIdx = 0;
  } else {
    dIdx++;
  }
  activateGlitch(description,20,2);
  description.innerHTML = descriptions[dIdx];
},5000);


let scrollToIntro = function() {
  $('html, body').animate({
      scrollTop: parseInt($("#intro").offset().top - 50)
  }, 1000);
};

let scrollToProjects = function() {
  $('html, body').animate({
      scrollTop: parseInt($("#projects").offset().top - 50)
  }, 1000);
};

let scrollToExperience = function() {
  $('html, body').animate({
      scrollTop: parseInt($("#experience").offset().top - 50)
  }, 1000);
};


let hidePhoneNumber = function() {
  $("#phone-number-blackout").fadeTo(300,0);
  setTimeout(function() {
    $("#phone-number-blackout").css("display","none");
  },300);
};

let showPhoneNumber = function() {
  $("#phone-number-blackout").css("display","block");
  $("#phone-number-blackout").fadeTo(300,1);
};
