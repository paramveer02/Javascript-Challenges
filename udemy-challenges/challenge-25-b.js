/*
Coding Challenge #25-b:

Title: Load and Display Images Sequentially Using Async/Await
- Create an async function 'loadAllImagesArray' that receives an array of image paths 'imgArr'
Goal: Recreate a sequential image loading flow using async/await syntax instead of Promises and .then().*/

let currentImage;

const wait = async function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = async function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", (e) => {
      document.querySelector(".images").append(img);
      resolve(img);
    });

    img.addEventListener("error", (e) => {
      reject(new Error("Couldn't fetch image!!"));
    });
  });
};

const loadAllImages = async function () {
  try {
    currentImage = await createImage("../images/img-1.jpg");
    await wait(4);
    currentImage.style.display = "none";
    currentImage = await createImage("../images/img-2.jpg");
    await wait(3);
    currentImage.style.display = "none";
    currentImage = await createImage("../images/img-3.jpg");
    await wait(2);
    currentImage.style.display = "none";
  } catch (err) {
    console.error(`${err}: Coulnd't load the image!`);
  }
};

// loadAllImagesArray();
const images = [
  "../images/img-1.jpg",
  "../images/img-2.jpg",
  "../images/img-3.jpg",
];

const loadAllImagesArray = async function (imageArr) {
  for (const imagePath of imageArr) {
    try {
      currentImage = await createImage(imagePath);
      await wait(4);
      currentImage.style.display = "none";
    } catch (err) {
      console.error(`${err}: Coulnd't load the image!`);
    }
  }
};

loadAllImagesArray(images);

const obj1 = {
  name: "Param",
  age: 31,
};

const obj2 = { ...obj1 };
const { name, age } = obj2;
console.log(name);
console.log(age);
