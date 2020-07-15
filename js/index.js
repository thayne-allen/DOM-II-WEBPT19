// Your code goes here

const select = s => document.querySelector(s);

window.addEventListener("load", function(event) {
    alert("Fasten your seatbelt, you are about to enter the FunBus Zone!");
    });

window.addEventListener('mousedown', function(event) {
    event.target.style.opacity = '0.5';
    });
    
window.addEventListener('mouseup', function(event) {
    event.target.style.opacity = '1';
    })

const homePrevent = document.querySelector('#home');
  homePrevent.addEventListener('click', function(event){
    event.preventDefault();
  });

const divClick = document.querySelector('#divBorder');
  divClick.addEventListener('click', function(event){
    event.currentTarget.style.background = 'aqua';
  });

const button1 = document.querySelector('#btn1');
  button1.addEventListener('click', function(event){
    event.target.style.color = 'black';
    event.stopPropagation();
  });

const button2 = document.querySelector('#btn2');
  button2.addEventListener('mouseover', function(event){
    event.target.style.background = 'black';
  });
  
const button3 = document.querySelector('#btn3');
  button3.addEventListener('dblclick', function(event){
    event.target.style.borderColor = 'red';
  });

const img1 = document.querySelector('#img1');
  img1.addEventListener('mouseenter', function(event){
    event.target.style.border = '2px dashed green';
  });
  
img1.addEventListener('mouseleave', function(event){
    event.target.style.border = 'none';
  });
  
const img2 = document.querySelector('#img2');
  img2.addEventListener('contextmenu', function(event){
    event.target.style.border = '2px solid yellow';
  }); 

const p = document.querySelector('#noCopy');
  p.addEventListener('contextmenu', function(event){
    event.preventDefault();
    alert('No context menu for you!')
  });