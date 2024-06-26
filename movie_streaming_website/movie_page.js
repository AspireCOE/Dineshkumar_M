// Retrieve movie ID from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

// Retrieve movie data from local storage
const movieData = JSON.parse(localStorage.getItem("movies"));

if (movieId && movieData) {
  // Get movie details by ID
  const movie = movieData.movies[movieId];

  // Construct HTML for movie details
  const movieDetails = `
<div class="main-movie"  style="
background-image: url('${movie.main_pic}');
">
<div class="main-movie-details">
   <h1 class="main-movie-title">${movie.name}</h1>
   <p class="main-year">Year ${movie.year}</p>
   <p class="main-duration">Runtime : ${movie.runtime}</p>
   <p class="main-cast">Cast : ${movie.cast}</p>
   <p class="main-imdb">IMDB rating : ${movie.rating}</p>
   <button class="watch-btn">
     <i class="ri-play-fill"></i>Watch
   </button>
   <button class="fav-button">
    <i class="ri-heart-3-fill"></i><span>${
      movie.fav === "yes" ? "Added to Favourites" : "Add to Favourite"
    }</span>
   </button>
 </div>
 </div>
`;

  // Display movie details
  document.querySelector(".movie-details").innerHTML = movieDetails;
}

// logout
document.addEventListener("DOMContentLoaded", function () {
  // Get the user icon element
  var logoutIcon = document.getElementById("logoutIcon");

  // Add click event listener to the user icon
  logoutIcon.addEventListener("click", function () {
    // Show a confirmation dialog
    var confirmLogout = confirm("Are you sure you want to logout?");

    // If user confirms logout
    if (confirmLogout) {
      // Redirect to login.html
      window.location.href = "login.html";
    }
  });
});

// fav
const fav_click = document.querySelector(".fav-button");
document.addEventListener("DOMContentLoaded", function () {
  const favButton = document.querySelector(".fav-button");

  favButton.addEventListener("click", function () {
    const buttonText = favButton.querySelector("span");

    // Toggle the button text between "Add to Favourites" and "Added to Favourites"
    if (movieData.movies[movieId].fav === "no") {
      buttonText.textContent = "Added to Favourites";
      movieData.movies[movieId].fav = "yes";
      localStorage.setItem("movies", JSON.stringify(movieData));
    } else {
      buttonText.textContent = "Add to Favourites";
      movieData.movies[movieId].fav = "no";
      localStorage.setItem("movies", JSON.stringify(movieData));
    }
  });
});
