document.getElementById("year").textContent = new Date().getFullYear();

const galleryImages = [
  "images/lion.jpg",
  "images/amboseli.jpg",
  "images/jeep.jpg",
  "images/sunset.jpg",
  "images/giraffes.jpg",
  "images/cheetah.jpg",
  "images/wildbeest.jpg",
  "images/birds.jpg",
  "images/hippos.jpg",
  "images/zebras.jpg",
  "images/rhino.jpg",
  "images/maasai.jpg"
];

const galleryContainer = document.querySelector(".gallery-grid");

galleryImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Kenya Safari Image";
  galleryContainer.appendChild(img);
});
