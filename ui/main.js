console.log('Loaded!');
var span = document.getElementsByTagName('span')[0];
var hideshow = document.getElementByClassName('read');

span.style.display = 'none';

hideshow.onclick = function() {
  span.style.display = 'block';
};