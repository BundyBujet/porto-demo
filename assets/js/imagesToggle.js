const images = [...document.querySelectorAll("#product_img")];
const buttons = [...document.querySelectorAll("#image_toggle")];
const imageDesc = [
  {
    code: "GNA-596",
    size: "1000 x 1000",
    faces: "37",
    thickness: "3",
    finish: "glossy",
    typology: "retro",
    usage: "wall & floor",
  },
  {
    code: "GNA-597",
    size: "800 x 800",
    faces: "28",
    thickness: "2",
    finish: "matte",
    typology: "modern",
    usage: "floor",
  },
  {
    code: "GNA-598",
    size: "1200 x 1200",
    faces: "49",
    thickness: "4",
    finish: "textured",
    typology: "contemporary",
    usage: "wall",
  },
  {
    code: "GNA-599",
    size: "600 x 600",
    faces: "16",
    thickness: "1.5",
    finish: "polished",
    typology: "classic",
    usage: "floor",
  },
  {
    code: "GNA-600",
    size: "1500 x 1500",
    faces: "64",
    thickness: "5",
    finish: "satin",
    typology: "vintage",
    usage: "wall & floor",
  },
  {
    code: "GNA-601",
    size: "900 x 900",
    faces: "25",
    thickness: "2.5",
    finish: "matt",
    typology: "industrial",
    usage: "wall",
  },
  {
    code: "GNA-602",
    size: "1100 x 1100",
    faces: "42",
    thickness: "3.5",
    finish: "polished",
    typology: "rustic",
    usage: "floor",
  },
  {
    code: "GNA-603",
    size: "700 x 700",
    faces: "20",
    thickness: "2",
    finish: "gloss",
    typology: "minimalist",
    usage: "wall",
  },
  {
    code: "GNA-604",
    size: "1300 x 1300",
    faces: "56",
    thickness: "4.5",
    finish: "satin",
    typology: "eclectic",
    usage: "floor",
  },
  {
    code: "GNA-605",
    size: "850 x 850",
    faces: "32",
    thickness: "2.8",
    finish: "textured",
    typology: "bohemian",
    usage: "wall",
  },
  {
    code: "GNA-606",
    size: "1000 x 1200",
    faces: "44",
    thickness: "3.2",
    finish: "matte",
    typology: "modern",
    usage: "floor",
  },
  {
    code: "GNA-607",
    size: "950 x 950",
    faces: "36",
    thickness: "2.7",
    finish: "satin",
    typology: "vintage",
    usage: "wall & floor",
  },
];

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
  let facesText = `${imageDesc[6].faces}`;
  let thicknessText = `${imageDesc[6].thickness}`;
  let codeText = `${imageDesc[6].code}`;
  let sizeText = `${imageDesc[6].size}`;
  let finishText = `${imageDesc[6].finish}`;
  let typologyText = `${imageDesc[6].typology}`;
  let usageText = `${imageDesc[6].usage}`;

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
