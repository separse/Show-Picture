function big(th) {
  var mask = document.getElementById('mask');
  mask.style.display = 'block';

  var nyImg = document.createElement('img');
  nyImg.src = th.src;
  nyImg.style.width = '600px';
  nyImg.style.height = '400px';
  nyImg.style.position = 'absolute';
  nyImg.style.zIndex = '9999';
  var w = window.innerWidth;
  var h = window.innerHeight;
  nyImg.style.left = (w-600)/2;
  nyImg.style.top = (h-400)/2;
  nyImg.id = 'nyImg';

  document.body.appendChild(nyImg);

}

function hide(th) {
  document.body.removeChild(nyImg);
  th.style.display = 'none';
}