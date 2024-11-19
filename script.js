document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Yay! You said yes! U better call me now.....u know my number right🎉💖');
  });
  
  document.getElementById('noBtn').addEventListener('mouseover', function() {
    // Move the "No" button randomly when hovered
    const btn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
  
    const maxX = container.offsetWidth - btn.offsetWidth;
    const maxY = container.offsetHeight - btn.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });