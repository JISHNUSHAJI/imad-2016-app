
var span = document.getElementsByTagName('span')[0];
var hideshow = document.getElementById('hideshow');

span.style.display = 'none';

hideshow.onclick = function() {
  span.style.display = 'block';
};