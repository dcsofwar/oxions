<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="index.js"></script>
</head>
<body>
    <div class="card-container">
        <div class="card" id="card">
            <div class="card-face card-front">
                <img src="./oxsi.png" alt="avatar" />
                <h1>Oxsions</h1>
                <a target="_blank" href="https://discord.gg/bVXKDsank4">
                    <button>Discord</button>
                </a>
                <a target="_blank" href="https://www.tiktok.com/@oxsions">
                    <button>Tiktok</button>
                </a>
                <a target="_blank" href="https://www.youtube.com/@oxsions">
                    <button>Youtube</button>
                </a>
                <a target="_blank" href="https://open.spotify.com/user/c9ajhiqasziku5va371dy4vi1?si=1230dd4b7e6e460f&nd=1&dlsi=bf4573ff1ddd4268">
                    <button>Spotify</button>
                </a>
                <button onclick="flipCard()">Bilgilerim</button>
            </div>
            <div class="card-face card-back">
                <!-- Arkada gösterilecek bilgiler burada olacak -->
                <h1>Bilgilerim</h1>
                <p>Buraya bilgiler gelecek...</p>
            </div>
        </div>
    </div>

    <script>
        function flipCard() {
            const card = document.getElementById('card');
            card.classList.toggle('card-flip');
        }
    </script>
</body>
</html>

