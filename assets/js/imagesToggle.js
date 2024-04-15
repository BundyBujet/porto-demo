import DataTransfer from "./data.js";
const images = [...document.querySelectorAll("#product_img")];
const buttons = [...document.querySelectorAll("#image_toggle")];
console.log(DataTransfer);

// popup

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const codeLabel = document.querySelector(".code-label  > span");
const sizeLabel = document.querySelector(".size-label  > span");
const facesLabel = document.querySelector(".faces-label  > span");
const thicknessLabel = document.querySelector(".thickness-label  > span");
const finishLabel = document.querySelector(".finish-label  > span");
const typologyLabel = document.querySelector(".typology-label  > span");
const usageLabel = document.querySelector(".usage-label  > span");

let index = 0; // will track our current image;

const imagesPath = images.map((item, i) => {
  const imagePath = item.style.backgroundImage.split(`"`)[1];
  return imagePath;
});

buttons.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(imagesPath[i]);
    updateLabels(i);
    popup.classList.toggle("active");
    index = i;
    imageIndex.innerHTML = index + 1;
  });
});

const updateImage = (path) => {
  largeImage.src = path;
};

const updateLabels = (i) => {
  let facesText = `${DataTransfer[i].faces}`;
  let thicknessText = `${DataTransfer[i].thickness}`;
  let codeText = `${DataTransfer[i].code}`;
  let sizeText = `${DataTransfer[i].size}`;
  let finishText = `${DataTransfer[i].finish}`;
  let typologyText = `${DataTransfer[i].typology}`;
  let usageText = `${DataTransfer[i].usage}`;

  facesLabel.innerHTML = facesText;
  thicknessLabel.innerHTML = thicknessText;
  codeLabel.innerHTML = codeText;
  sizeLabel.innerHTML = sizeText;
  finishLabel.innerHTML = finishText;
  typologyLabel.innerHTML = typologyText;
  usageLabel.innerHTML = usageText;

  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    updateImage(imagesPath[index - 1]);
    updateLabels(index);
    index--;
    imageIndex.innerHTML = index + 1;
  }
});

rightArrow.addEventListener("click", () => {
  if (index < buttons.length - 1) {
    updateImage(imagesPath[index + 1]);
    updateLabels(index);
    index++;
    imageIndex.innerHTML = index + 1;
  }
});
