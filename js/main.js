import { movies } from "./movies.js";


// ==============================
// 映画一覧を表示
// ==============================

function displayMovies(movieList) {
  const movieGrid = document.querySelector("#movieGrid");

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


// ==============================
// 映画詳細を表示
// ==============================

function displayMovieDetail() {
  const movieDetail = document.querySelector("#movieDetail");

  if (!movieDetail) return;

  // URLから映画IDを取得
  const params = new URLSearchParams(window.location.search);
  const movieId = Number(params.get("id"));

  // IDに一致する映画を探す
  const movie = movies.find(movie => movie.id === movieId);

  // 映画が見つからない場合
  if (!movie) {
    movieDetail.innerHTML = `
      <div class="movie-not-found">
        <h2>映画が見つかりません</h2>
        <p>指定された映画は存在しません。</p>
        <a href="movies.html" class="btn btn-primary">
          映画一覧へ戻る
        </a>
      </div>
    `;

    return;
  }

  // 映画情報を表示
  movieDetail.innerHTML = `
    <div class="movie-detail">

      <div class="movie-detail-image">
        <img src="${movie.poster}" alt="${movie.title}">
      </div>

      <div class="movie-detail-content">

        <p class="movie-detail-label">
          ${movie.genre}
        </p>

        <h1>${movie.title}</h1>

        <div class="movie-meta">
          <span>${movie.year}</span>
          <span>★ ${movie.rating}</span>
        </div>

        <div class="movie-review">
          <p class="review-label">50文字レビュー</p>
          <p class="review-text">
            ${movie.review}
          </p>
        </div>

      </div>

    </div>
  `;
}


// ==============================
// 実行
// ==============================

displayMovies(movies);
displayMovieDetail();
