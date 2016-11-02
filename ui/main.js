console.log('Loaded!');
var span = document.getElementsByTagName('qw')[0];
var hideshow = document.getElementById('hideshow');

qw.style.display = 'none';

hideshow.onclick = function() {
  qw.style.display = 'block';
};