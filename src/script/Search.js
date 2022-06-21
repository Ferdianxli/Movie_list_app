const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=&api_key=335e349c4eea6d4901a3f5dfa7b939f8&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=335e349c4eea6d4901a3f5dfa7b939f8&query=";

const main = document.getElementById("movies");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData.results);
}

function showMovies(movies) {
  // clear main
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, id } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML += `<div class="lesson"><div> <a onClick="movieSelect('${id}')"class="btn-primary">
    <img src="${IMGPATH + poster_path}" alt="" class="card_image"></div>
    <div class="card_content">${movie.overview}
   </div></div>`;

    main.appendChild(movieEl);
  });
}
document.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);

    search.value = "";
  }
})
  ;