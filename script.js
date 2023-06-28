const simButton = document.getElementById('sim-btn');
const naoButton = document.getElementById('nao-btn');
const container = document.querySelector('.container');

container.addEventListener('mousemove', function(event) {
  if (event.target === simButton) {
    const containerRect = container.getBoundingClientRect();
    const maxLeft = containerRect.width + 500 - simButton.offsetWidth;
    const maxTop = containerRect.height + 500 - simButton.offsetHeight;

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    simButton.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
  }
});

naoButton.addEventListener('click', function() {
  alert('tmj mlk a mãe é lisa, ta me devendo o c# ksdjkskdsfdf');
});
