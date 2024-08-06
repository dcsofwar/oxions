function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBoxShadow() {
    const box = document.querySelector('.box');
    const hOffset = getRandomInt(-10, 10);  // Yatay gölge
    const vOffset = getRandomInt(-10, 10);  // Dikey gölge
    const blur = getRandomInt(0, 20);       // Bulanıklık
    const spread = getRandomInt(0, 10);     // Yayılma
    const color = `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.5)`;

    box.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;

    // Rastgele büyütme ve küçültme efekti ekleyelim
    const scale = getRandomInt(90, 110) / 100;
    box.style.transform = `scale(${scale})`;
}

setInterval(changeBoxShadow, 1000);  // Her saniyede bir gölgeyi değiştir
