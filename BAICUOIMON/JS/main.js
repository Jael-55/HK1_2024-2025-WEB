// document.addEventListener('DOMContentLoaded', () => {
//     const bannerImages = [
//         "https://via.placeholder.com/800x400",
//         "https://via.placeholder.com/800x400/0000FF",
//         "https://via.placeholder.com/800x400/FF0000"
//     ];
//     let currentImageIndex = 0;
//     const bannerImageElement = document.querySelector('.banner-image img');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     function updateBannerImage() {
//         bannerImageElement.src = bannerImages[currentImageIndex];
//     }

//     prevButton.addEventListener('click', () => {
//         currentImageIndex = (currentImageIndex === 0) ? bannerImages.length - 1 : currentImageIndex - 1;
//         updateBannerImage();
//     });

//     nextButton.addEventListener('click', () => {
//         currentImageIndex = (currentImageIndex === bannerImages.length - 1) ? 0 : currentImageIndex + 1;
//         updateBannerImage();
//     });

//     // Auto-slide
//     setInterval(() => {
//         currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
//         updateBannerImage();
//     }, 3000);
// });


let index = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextImage() {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
}

setInterval(showNextImage, 3000);
