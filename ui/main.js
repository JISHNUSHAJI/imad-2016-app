console.log('Loaded!');
var span = document.getElementsByTagName('qw')[0];
var hideshow = document.getElementById('hideshow');

span.style.display = 'none';

hideshow.onclick = function() {
  span.style.display = 'block';
};