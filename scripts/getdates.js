const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

console.log(`Current Year: ${currentYear}`);
console.log(`Last Modified Date: ${lastModifiedDate}`);

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
});
