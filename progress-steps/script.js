document.addEventListener('DOMContentLoaded', function () {
    var numbers = document.querySelectorAll('.number');
    var prevBtn = document.querySelector('#prevBtn');
    var nextBtn = document.querySelector('#nextBtn');
  
    var currentIndex = 0; 
    
    function updateSteps() {
      numbers.forEach(function (number, index) {
        if (index === currentIndex) {
          number.classList.add('numberActive');
        } else {
          number.classList.remove('numberActive');
        }
      });
  

      prevBtn.disabled = currentIndex === 0;

      nextBtn.disabled = currentIndex === numbers.length - 1;
  
      if (prevBtn.disabled) {
        prevBtn.classList.add('buttonDisactive');
      } else {
        prevBtn.classList.remove('buttonDisactive');
      }
  
      if (nextBtn.disabled) {
        nextBtn.classList.add('buttonDisactive');
      } else {
        nextBtn.classList.remove('buttonDisactive');
      }
    }
  
    prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSteps();
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentIndex < numbers.length - 1) {
        currentIndex++;
        updateSteps();
      }
    });
  
    updateSteps();
  });
  



