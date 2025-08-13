document.getElementById("year").textContent = new Date().getFullYear();

const galleryImages = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg",
  "images/gallery5.jpg",
  "images/gallery6.jpg"
];

const galleryContainer = document.querySelector(".gallery-grid");

galleryImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Kenya Safari Image";
  galleryContainer.appendChild(img);
});
