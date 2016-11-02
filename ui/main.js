
var button = document.querySelector('.read-more');

button.addEventListener('click', function(event) {
  var span = event.target.previousElementSibling.querySelector('span');
  span.classList.add('fade-in');
});
.show-more span {
  display: inline-block;
  height: 0;
  overflow: hidden;
  transition: opacity 2s;
  opacity: 0;
}
.show-more span.fade-in {
  height: auto;
  opacity: 1;
}