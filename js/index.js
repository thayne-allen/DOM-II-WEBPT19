// Your code goes here

window.addEventListener("load", function(event) {
    alert("Fasten your seatbelt, you are about to enter the FunBus Zone!");
    });

    window.addEventListener('mousedown', function(event) {
        event.target.style.opacity = '0';
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