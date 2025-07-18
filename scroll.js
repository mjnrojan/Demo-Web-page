// window.onload = function () {
//   const container = document.getElementById("scroll");
//   const scrollAmount = container.offsetWidth * 0.33 + 20; // 33% + estimated gap

//   document.querySelector(".scroll-btn.left").onclick = function () {
//     container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   };

//   document.querySelector(".scroll-btn.right").onclick = function () {
//     container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };
// };

function scrollHorizontally(containerSelector, direction) {
  const container = document.querySelector(containerSelector);
  const scrollAmount = 300;

  if (container) {
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}