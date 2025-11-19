document.querySelectorAll('.img').forEach(img => {
    const randomRotation = (Math.random() * 16 - 8).toFixed(1); // between -8 and 8 degrees
    const randomTop = Math.random() * 70 + 10; // between 10% and 80%
    const randomLeft = Math.random() * 70 + 10; // between 10% and 80%
  
    img.style.setProperty('--angle', `${randomRotation}deg`);
    img.style.top = `${randomTop}%`;
    img.style.left = `${randomLeft}%`;
  });