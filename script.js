window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle('window-scrolled', window.scrollY > 0);
})

const yearElement = document.getElementById('year_tag');
const currentYear = new Date().getFullYear();
yearElement.textContent = yearElement.textContent.replace('2023', currentYear);







// Circular effect in CONTACT BTN
const textBtns = document.querySelectorAll(".contact_btn");
textBtns.forEach(textBtn =>{
    let para = textBtn.querySelector('p');
    para.innerHTML=para.innerHTML.split('').map((char,indx)=>`<span style="transform:rotate(${indx * 12}deg)">${char}</span>`).join('')
})







