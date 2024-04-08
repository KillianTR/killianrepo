function changeImage(isFront) {
    const image = document.getElementById('cardImage');
    if (isFront) {
        image.src = getRandomImage();
    } else {
        image.src = "./images/card-back.png";
    }
}

function getRandomImage() {
    const images = [
        "./images/card-front.png",
        "./images/vecteezy_carte-de-poker-diamant_1198360.png",
        "./images/vecteezy_cartao-de-poquer-de-diamante_1198363.png",
        "./images/vecteezy_tarjeta-de-poker-de-diamantes_1198369.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}