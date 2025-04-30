let currentIndex = 0;
const artworks = document.querySelectorAll('.art-container');
const music = document.getElementById('background-music');
let musicPlaying = false;

function showArtwork(index) {
    artworks.forEach((art, i) => {
        art.style.display = i === index ? 'block' : 'none';
    });
}

function prevArtwork() {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    showArtwork(currentIndex);
}

function nextArtwork() {
    currentIndex = (currentIndex + 1) % artworks.length;
    showArtwork(currentIndex);
}

// Show first artwork
showArtwork(currentIndex);

// Background Music Toggle
function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
    } else {
        music.play();
        musicPlaying = true;
    }
}

// Fullscreen Mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Lightbox
function openLightbox(imageSrc, title, description) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox-caption').textContent = title + " - " + description;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Search Filter
function searchArtworks() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    artworks.forEach(art => {
        let title = art.querySelector(".info").textContent.toLowerCase();
        art.style.display = title.includes(input) ? "block" : "none";
    });
}
