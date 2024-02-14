document.addEventListener('DOMContentLoaded', function() {
  const clickMeBtn = document.getElementById('clickMeBtn');
  const output = document.getElementById('output');

  clickMeBtn.addEventListener('click', function() {
    output.textContent = 'Button Clicked!';
  });
});
