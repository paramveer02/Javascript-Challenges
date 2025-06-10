/*
Coding Challenge #25-b:

Title: Load and Display Images Sequentially Using Async/Await
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

loadAllImages();
