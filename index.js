function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomBlur() {
  return `${getRandomInt(0, 100)}px`;
}

function changeBoxShadow() {
  const card = document.getElementById('card');
  const blur = getRandomBlur();       // Rastgele bulanıklık değeri (0px ile 100px arasında)
  const color = getRandomColor();     // Rastgele renk

  // Sabit değerlerle box-shadow, sadece blur ve renk değişir
  card.style.boxShadow = `0 0 ${blur} ${color}`;
}

// Kart tıklama olayını dinle
const card = document.getElementById('card');
card.addEventListener('click', function() {
  card.classList.toggle('card-flip');
  changeBoxShadow();  // Kart çevrildiğinde box-shadow'u güncelle
});

// Başlangıçta da bir box-shadow ayarla
changeBoxShadow();
