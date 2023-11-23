document.addEventListener("click", function(event) {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      if (event.target.closest(".dropdown") !== dropdown) {
          dropdown.style.display = "none";
      }
  }
});

// Define JavaScript objects to represent movies
const movie1 = {
  title: "Barbie",
  director: "Greta Gerwig",
  releaseYear: 2023,
  genre: "Comedy,Drama",
  rating: 9.3,
  plotSummary: "Stereotypical Barbie and fellow dolls reside in Barbieland, a matriarchal society populated by different versions of Barbies, Kens, and a group of discontinued models, who are treated like outcasts due to their unconventional traits"
};

const movie2 = {
  title: "Ocean's 8",
  director: "Gary Ross",
  releaseYear: 2018,
  genre: "Crime",
  rating: 9.2,
  plotSummary: "Newly paroled con artist Debbie Ocean, Danny Ocean's younger sister, convinces former partner in crime Lou to join her in a new heist."
};

const movie3 = {
  title: "Suzume",
  director: "Makoto Shinkai",
  releaseYear: 2022,
  genre: "Fantazy",
  rating: 8.9,
  plotSummary: "Suzume Iwato is a 17-year-old high school girl, who lives with her aunt in a quiet town in the Kyushu region of Japan. While heading to school, she encounters a young man searching for an abandoned area with a door, so she informs him of an abandoned onsen (spa) resort nearby, and curiously follows him."
};

const list = document.getElementById("movieList");

function displayMovieInfo(movie) {
  const movieInfo = document.createElement("div");
  movieInfo.innerHTML = `
      <h2>${movie.title}</h2>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> ${movie.rating}</p>
      <p><strong>Plot Summary:</strong> ${movie.plotSummary}</p>
  `;

  movieList.appendChild(movieInfo);
}

//ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("jumping-image");
  image.addEventListener("click", function () {
      image.style.animationPlayState = "running";
  });
  image.addEventListener("animationiteration", function () {
      image.style.animationPlayState = "paused";
  });
});


//POSTER
const moviePoster = document.getElementById('poster');
moviePoster.addEventListener('mouseover', function () {
    moviePoster.querySelector('img').style.opacity = '0.5';
});
moviePoster.addEventListener('mouseout', function () {
    moviePoster.querySelector('img').style.opacity = '1';
});


//AUDIO
function play(){
  var audio = new Audio('pop.mp3') 
  audio.play();
};

//DRAG AND DROP GAME
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("image_id", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var image_id = event.dataTransfer.getData("image_id");
    var image = document.getElementById(image_id);
    event.target.appendChild(image);
}

function checkGenres() {
    var correctGenres = ["Action", "Comedy", "Drama"];
    var resultText = "Correct!";
    
    for (var i = 1; i <= 3; i++) {
        var genreCell = document.getElementById("genre" + i);
        var image = genreCell.querySelector("img");
        if (!image || image.getAttribute("data-genre") !== correctGenres[i - 1]) {
            resultText = "Incorrect";
            break;
        }
    }
    
    document.getElementById("result").innerText = resultText;
}

//VIDEO
var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//Scroll button
function scrollToTop(){
window.scrollTo(0,0);
}


//Quiz
function checkAnswers() {
  const correctAnswers = ["b", "a", "a", "a", "b", "a", "b", "a", "a", "a"];
  const userAnswers = [];
  
  for (let i = 1; i <= 10; i++) {
      const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
      userAnswers.push(selectedOption ? selectedOption.value : null);
  }

  for (let i = 0; i < 10; i++) {
      const resultElement = document.createElement("p");
      resultElement.textContent = `Question ${i + 1}: `;
      
      if (userAnswers[i] === correctAnswers[i]) {
          resultElement.classList.add("correct");
          resultElement.textContent += "Correct!";
      } else {
          resultElement.classList.add("incorrect");
          resultElement.textContent += `Incorrect. Correct answer: ${correctAnswers[i].toUpperCase()}`;
      }

      document.getElementById("quiz").appendChild(resultElement);
  }
}