$(document).ready(() => {
    $('#Form').on('click', (v) => {
        const movies = $('#movies').val();
        getTop(movies);
        v.preventDefault();
    });
});

function getTop() {

    const baseUrl = "https://api.themoviedb.org/3/movie/"
    const api_key = "api_key=335e349c4eea6d4901a3f5dfa7b939f8"
    const baseImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"
    const getTop = () => {

        fetch(`${baseUrl}top_rated?${api_key}`)

            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                }
                else {
                    showMovietop(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })


    };

    const showMovietop = results => {
        const listtopElement = document.querySelector("#movies");
        listtopElement.innerHTML = ``;

        results.forEach(movie => {
            listtopElement.innerHTML += `<div class="lesson"><div> <a onClick="movieSelect('${movie.id}')"class="btn-primary">
            <img src="${baseImg}${movie.poster_path}" alt="" class="card_image"></div>
            <div class="card_content">
            ${movie.overview}
            </div>
            </div>`;
        });
    };

    getTop();
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
}
document.addEventListener("DOMContentLoaded", () => {
    getTop();
});

{/* <div class="cards"><div class="card_image"><img src="${baseImg}${movie.poster_path}"><h5>${movie.title}</h5><a onClick="movieSelect('${movie.id}')"class="btn-primary">Details</a></div></<div></div> <p>(${movie.overview})</p> */ }