function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  // Rastgele bir renk oluştur
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomBlur() {
  // Rastgele bir yüzdelik değer oluştur (0% ile 100% arasında)
  return getRandomInt(0, 20) + '%';
}

function changeBoxShadow() {
  const box = document.querySelector('.kart');  // .box yerine .kart
  const blur = getRandomBlur();       // Rastgele bulanıklık değeri (0% ile 100% arasında)
  const color = getRandomColor();     // Rastgele renk

  // Sabit değerlerle box-shadow, sadece blur ve renk değişir
  box.style.boxShadow = `0 0 ${blur} ${color}`;
}

setInterval(changeBoxShadow, 1000);  // Her saniyede bir gölge rengini ve bulanıklığını değiştir
