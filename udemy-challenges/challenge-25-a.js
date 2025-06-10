/*
Coding Challenge #25

Your tasks:

PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use document.createElement('img')) 
and sets the .src attribute to the provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution

PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wro
*/

let currentImage;

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
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

createImage("../images/img-1.jpg")
  .then((img1) => {
    currentImage = img1;
    return wait(4);
  })
  .then(() => {
    console.log("4 seconds have passed!");
    currentImage.style.display = "none";
    return createImage("../images/img-2.jpg");
  })
  .then((img2) => {
    currentImage = img2;
    return wait(3);
  })
  .then(() => {
    console.log("3 seconds have passed!");
    currentImage.style.display = "none";
    return createImage("../images/img-3.jpg");
  })
  .then((img3) => {
    currentImage = img3;
    return wait(2);
  })
  .then(() => {
    console.log("2 seconds have passed");
    currentImage.style.display = "none";
  })
  .catch((error) => console.error(error));
