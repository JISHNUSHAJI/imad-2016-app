console.log('Loaded!');
var span = document.getElementsByTagName('qw')[0];
var hideshow = document.getElementByClassName('read');

hideshow.style.display = 'none';

hideshow.onclick = function() {
  span.style.display = 'block';
};