// Menu Function
let menuIcon = document.querySelector(".icon");
let cancelIcon = document.querySelector(".cancel");
let menu = document.querySelector(".menu");
menuIcon.onclick = () => {
    menu.classList.toggle("active");
    cancelIcon.onclick = () => {
        menu.classList.toggle("active");
    };
};     
// var swiper = new Swiper(".mySwiper", {
//     autoplay: {
//         delay: 2000,
//     },
//     slidesPerView: 4,
//     slidesPerGroup: 4,
//     loop: true,
//     loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: true,
    //   },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
// });


// Statistics Counter
// let num = document.querySelectorAll(".num");
// let section = document.querySelector(".statistics");
// let started = false;
// window.onscroll = () => {
//     if(window.scrollY >= section.offsetTop){
//         if(!started){
//             num.forEach((num) => startCount(num));
//         };
//         started = true;
//     };
// };
// function startCount(el){
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if(el.textContent == goal){
//             clearInterval(count);
//         };
//     },2000 / goal)
// };

// Footer 
let date = new Date();
let to = document.querySelector(".to");
to.textContent = date.getFullYear();