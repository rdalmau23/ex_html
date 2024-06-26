const images = [
    '2c.gif',
    '2h.gif',
    '2d.gif',
    '2s.gif',

    '3c.gif',
    '3h.gif',
    '3d.gif',
    '3s.gif',

    '4c.gif',
    '4h.gif',
    '4d.gif',
    '4s.gif',

    '5c.gif',
    '5h.gif',
    '5d.gif',
    '5s.gif',

    '6c.gif',
    '6h.gif',
    '6d.gif',
    '6s.gif',

    '7c.gif',
    '7h.gif',
    '7d.gif',
    '7s.gif',

    '8c.gif',
    '8h.gif',
    '8d.gif',
    '8s.gif',

    '9c.gif',
    '9h.gif',
    '9d.gif',
    '9s.gif',

    'tc.gif',
    'th.gif',
    'td.gif',
    'ts.gif',

    'qc.gif',
    'qh.gif',
    'qd.gif',
    'qs.gif',

    'kc.gif',
    'kh.gif',
    'kd.gif',
    'ks.gif',

    'jc.gif',
    'jh.gif',
    'jd.gif',
    'js.gif',

    'ac.gif',
    'ah.gif',
    'ad.gif',
    'as.gif',
    'b.gif'
  ];
  

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
function updateRandomImage() {
    const randomImage = getRandomImage();
    const imgElement = document.getElementById('randomImage');
    imgElement.src = `img/${randomImage}`;
  }
  
    document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.getElementById('randomImage');
    imgElement.addEventListener('click', updateRandomImage);

    updateRandomImage();
  });