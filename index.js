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

function changeBoxShadow() {
  const box = document.querySelector('.kart');  // .box yerine .kart
  const blur = getRandomInt(50, 200);       // Rastgele bulanıklık değeri (20px ile 100px arasında)
  const color = getRandomColor();           // Rastgele renk

  // Sabit değerlerle box-shadow, sadece blur ve renk değişir
  box.style.boxShadow = `0 0 ${blur}px ${color}`;
}

setInterval(changeBoxShadow, 1000);  // Her saniyede bir gölge rengini ve bulanıklığını değiştir
