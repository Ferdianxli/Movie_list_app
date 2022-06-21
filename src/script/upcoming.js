$(document).ready(() => {
    $('#upcoming').on('click', (v) => {
        const movies = $('#movies').val();
        getupcoming(movies);
        v.preventDefault();
    });
});

function getupcoming(movies) {

    const baseUrl = "https://api.themoviedb.org/3/movie/"
    const api_key = "api_key=335e349c4eea6d4901a3f5dfa7b939f8"
    const baseImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"
    const getupcoming = (movies) => {

        fetch(`${baseUrl}upcoming?${api_key}`)

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
    getupcoming();
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
}
document.addEventListener("DOMContentLoaded", () => {

    const upcoming = document.querySelector("#upcoming");
    getupcoming();
});

{/* <div class="lesson">
            <img src="${baseImg}${movie.poster_path}" alt="" class="card_image">
            <div class="card_content">
                <h5>(${movie.title})</h5>
            </div>
            <div class="card_info">
                <div> <a onClick="movieSelect('${movie.id}')"class="btn-primary">View movie</a></div>
            </div> */}