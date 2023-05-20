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

aboutImage.addEventListener('load', () => {
    // Check if the loaded image is empty or undefined
    if (!aboutImage.complete || aboutImage.naturalWidth === 0) {
        aboutImage.src = './images_webp/about.webp';
    }
});

/* Notes:-
In JavaScript, the complete property and naturalWidth property are attributes of the HTMLImageElement object. Here's what they represent:

complete: The complete property indicates whether the image has finished loading or not. It returns a boolean value (true or false). When complete is true, it means the image has finished loading. Conversely, when complete is false, it means the image is still loading or failed to load.

naturalWidth: The naturalWidth property represents the intrinsic width of the image in pixels. It provides the actual width of the image file, regardless of any resizing or scaling applied through CSS or HTML attributes. If the image fails to load, naturalWidth will be set to 0.

In the context of the code snippet I provided, these properties are used to determine if the loaded image is empty or undefined. If the complete property is false or the naturalWidth is 0, it implies that the image failed to load or is empty. In such cases, the fallback image URL is set as the source of the aboutImage element.

*/






// Swiper Js For Gallery Section
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // // Handling Responsiveness
        breakpoints: {
            599: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    });
})






// Hamberger menu
const nav = document.querySelector(".nav_links");
const navOpen = document.querySelector("#nav_toggle-open");
const navClose = document.querySelector("#nav_toggle-close");

navOpen.addEventListener("click", () => {
    nav.style.display = "flex";
    navOpen.style.display = "none";
    navClose.style.display = "inline-block"
})


navClose.addEventListener("click", () => {
    nav.style.display = "none";
    navOpen.style.display = "inline-block";
    navClose.style.display = "none"
})


nav.querySelectorAll("li a").forEach(navLink => {
    navLink.addEventListener("click", () => {
        // We close the nav
        nav.style.display = "none";
        navOpen.style.display = "inline-block";
        navClose.style.display = "none"
    })
})






if (document.body.clientWidth < 1024) {

    nav.querySelectorAll("li a").forEach(navLink => {
        navLink.addEventListener("click", () => {
            // We close the nav
            nav.style.display = "none";
            navOpen.style.display = "inline-block";
            navClose.style.display = "none"
        })
    })

}


