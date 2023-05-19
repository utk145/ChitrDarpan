window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle('window-scrolled', window.scrollY > 0);
})

const yearElement = document.getElementById('year_tag');
const currentYear = new Date().getFullYear();
yearElement.textContent = yearElement.textContent.replace('2023', currentYear);







// Circular effect in CONTACT BTN
const textBtns = document.querySelectorAll(".contact_btn");
textBtns.forEach(textBtn => {
    let para = textBtn.querySelector('p');
    para.innerHTML = para.innerHTML.split('').map((char, indx) => `<span style="transform:rotate(${indx * 12}deg)">${char}</span>`).join('')
})




// Changing About Name just for fun
const names = ["Hawk-Mi", "Serene", "Olivia", "Emma", "Noah", "Sophia", "Liam", "Ava", "Wilena", "Isabella", "Jamia", "Mia"];
const randomName = names[Math.floor(Math.random() * names.length)];
document.getElementById("about_name_title_change").textContent = `About ${randomName}`;



// Handling About image
const aboutImage = document.getElementById('aboutImage');
aboutImage.addEventListener('error', () => {
    aboutImage.src = './images_webp/about.webp';
});


