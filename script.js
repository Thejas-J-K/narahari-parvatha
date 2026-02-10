let isEnglish = true;

function toggleLanguage() {
 isEnglish = !isEnglish;
 document.querySelectorAll("[data-en]").forEach(el => {
   el.innerText = isEnglish ? el.dataset.en : el.dataset.kn;
 });
}

function scrollToSection(id) {
 document.getElementById(id).scrollIntoView({ behavior:"smooth" });
}

function openLightbox(img) {
 document.getElementById("lightbox").style.display = "flex";
 document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
 document.getElementById("lightbox").style.display = "none";
}
