document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const products = [
  { id: 'a15', name: 'Samsung Galaxy A15' },
  { id: 'lg-tv', name: 'LG Smart TV 43"' },
  { id: 'ramtons-kettle', name: 'Electric Kettle Ramtons' }
];

const productSelect = document.querySelector("#product");
const productImg = document.querySelector("#productImg");

const productImages = {
  'a15': 'images/samsung.jpg',
  'lg-tv': 'images/lgtv.jpeg',
  'ramtons-kettle': 'images/ramtonskettle.jpg'
};

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

productSelect.addEventListener("change", e => {
  const selected = e.target.value;
  if (productImages[selected]) {
    productImg.src = productImages[selected];
    productImg.alt = products.find(p => p.id === selected).name;
    productImg.classList.remove("hidden");
  } else {
    productImg.src = "images/placeholder.jpg";
    productImg.alt = "Product preview";
    productImg.classList.add("hidden");
  }
});

document.querySelectorAll("input[name='rating']").forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("ratingDisplay").textContent = `Selected Rating: ${radio.value} star(s)`;
  });
});

const reviewBox = document.getElementById("review");
const charCount = document.getElementById("charCount");

reviewBox.addEventListener("input", () => {
  charCount.textContent = `${reviewBox.value.length}/500 characters`;
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});