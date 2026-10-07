import { movies } from "./movies.js";

function displayMovies(movieList) {
  const movieGrid = document.querySelector("#movie-grid");

  if (!movieGrid) return;

  movieGrid.innerHTML = movieList.map(movie => `
    <article class="movie-card">
      <a href="movie.html?id=${movie.id}">
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.year} / ${movie.genre}</p>
        <p>★ ${movie.rating}</p>
      </a>
    </article>
  `).join("");
}

displayMovies(movies);