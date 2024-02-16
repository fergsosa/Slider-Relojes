const d = document,
  $nextButton = d.getElementById("next"),
  $prevButton = d.getElementById("prev"),
  $carousel = d.querySelector(".carousel"),
  $listHTML = d.querySelector(".carousel .list"),
  $seeMoreButtons = d.querySelectorAll(".seeMore"),
  $backButton = d.getElementById("back");

$nextButton.onclick = () => {
  showSlider("next");
};
$prevButton.onclick = () => {
  showSlider("prev");
};

let unAcceppClick;

const showSlider = (type) => {
  $nextButton.style.pointerEvents = "none";
  $prevButton.style.pointerEvents = "none";

  $carousel.classList.remove("next", "prev");
  let items = d.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    $listHTML.appendChild(items[0]);
    $carousel.classList.add("next");
  } else {
    $listHTML.prepend(items[items.length - 1]);
    $carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    $nextButton.style.pointerEvents = "auto";
    $prevButton.style.pointerEvents = "auto";
  }, 2000);
};

$seeMoreButtons.forEach((button) => {
  button.onclick = () => {
    $carousel.classList.remove("next", "prev");
    $carousel.classList.add("showDetail");
  };
});

$backButton.onclick = () => {
  $carousel.classList.remove("showDetail");
};
