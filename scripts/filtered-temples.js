document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "X" : "☰";
});

const temples = [
  {
    templeName: "Boise Idaho Temple",
    location: "Boise, Idaho, USA",
    dedicated: "1984-05-25",
    area: 35700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-3851.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Washington, D.C., USA",
    dedicated: "1974-11-19",
    area: 160000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-29514-thumb.jpg"
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: "1993-06-19",
    area: 72000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska, USA",
    dedicated: "1999-01-09",
    area: 11937,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-57454-main.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Billings Montana Temple",
    location: "Billings, Montana, USA",
    dedicated: "1999-12-19",
    area: 33600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-61360-thumb.jpg"
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Atlanta, Georgia, USA",
    dedicated: "1983-06-01",
    area: 34500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3859-thumb.jpg"
  }
];

function displayTemples(templeArray) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  templeArray.forEach((temple) => {
    const section = document.createElement("section");

    section.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(section);
  });
}

displayTemples(temples);

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.getAttribute("data-filter");
    let filtered = [];

    switch (filter) {
      case "old":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }

    displayTemples(filtered);
  });
});
