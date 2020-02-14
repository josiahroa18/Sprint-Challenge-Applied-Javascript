/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function Carousel(){
  // Create Elements
  const carousel = document.createElement('div'),
        leftButton = document.createElement('div'),
        rightButton = document.createElement('div');

  // Nest Elements
  carousel.appendChild(leftButton);
  const imgNames = ['mountains.jpeg', 'computer.jpeg', 'trees.jpeg', 'turntable.jpeg'];
  for(let i=0; i<imgNames.length; i++){
    let img = document.createElement('img');
    img.src = `./assets/carousel/${imgNames[i]}`;
    carousel.appendChild(img);
  }
  carousel.appendChild(rightButton);

  // Add Classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Carousel Functionality
  let currentIndex = 1;

  // By Default, display first img
  let currentImage = carousel.childNodes;
  currentImage[currentIndex].style.display = "block";
  
  leftButton.addEventListener('click', () => {
    currentImage[currentIndex].style.display = "none";
    if(currentIndex == 1){
      currentIndex = imgNames.length;
    }else{
      currentIndex --;
    }
    currentImage[currentIndex].style.display = "block";
  })

  rightButton.addEventListener('click', () => {
    currentImage[currentIndex].style.display = "none";
    if(currentIndex == imgNames.length){
      currentIndex = 1;
    }else{
      currentIndex ++;
    }
    currentImage[currentIndex].style.display = "block";
  })


  return carousel;
}
carouselContainer.appendChild(Carousel());
