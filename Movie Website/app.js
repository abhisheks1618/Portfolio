// let apiKey = "api_key=bff659db519f0d8bfa019e2cd7ad23a8";
// let baseUrl = "https://api.themoviedb.org/3/";
// let apiUrl = baseUrl + "discover/movie?sort_by=popularity.desc&" + apiKey;
// let imgUrl = "https://image.tmdb.org/t/p/w500/";


// async function getMovies(url) {
//     let res=await fetch(apiUrl);
//     let finalData= await res.json();
//     let results= finalData.results;
//     // console.log(results);

//     results.map(movie => {
//         let moviecard=document.querySelector("wrapper");
//         moviecard.innerHTML +=`
//       <div class="movie-card">
//         <img class="mIcon" src="${imgUrl+movie.poster_path}" alt="" />
//         <p class="mname">${movie.title}</p>
//       </div>
                
//                 `
//        console.log(movie);
//     });
    
// }

// getMovies(apiUrl)

// let apiKey = "api_key=bff659db519f0d8bfa019e2cd7ad23a8";
// let baseUrl = "https://api.themoviedb.org/3/";
// let apiUrl = baseUrl + "discover/movie?sort_by=popularity.desc&" + apiKey;
// let imgUrl = "https://image.tmdb.org/t/p/w500/";
// let searchBtn = document.querySelector(".searchbtn")
// let searchInput =document.querySelector(".searchinp")

// async function getMovies(url) {
//     let res = await fetch(apiUrl);
//     let finalData = await res.json();
//     let results = finalData.results;

//     let movieWrapper = document.querySelector(".wrapper"); 

//     results.map(movie => {
//         movieWrapper.innerHTML += `
//         <div class="movie-card">
//             <img class="mIcon" src="${imgUrl + movie.poster_path}" alt="${movie.title}" />
//             <p class="mname">${movie.title}</p>
//         </div>
//         `;
//     });
// }

// getMovies();

// searchBtn.addEventListener("click", () => {
//     let query = searchInput.value.trim();
//     if (query !== "") {
//         let searchUrl = baseUrl + "search/movie?" + apiKey + "&query=" + encodeURIComponent(query);
//         getMovies(searchUrl);
//     } else {
//         console.log("not available");
//     }
// });




let apiKey = "api_key=bff659db519f0d8bfa019e2cd7ad23a8";
let baseUrl = "https://api.themoviedb.org/3/";
let apiUrl = baseUrl + "discover/movie?sort_by=popularity.desc&" + apiKey;
let imgUrl = "https://image.tmdb.org/t/p/w500/";
let searchBtn = document.querySelector(".searchbtn");
let searchInput = document.querySelector(".searchbox");

async function getMovies(url) {
    let res = await fetch(url);
    let finalData = await res.json();
    let results = finalData.results;

    let movieWrapper = document.querySelector(".wrapper");
    movieWrapper.innerHTML = ""; // Clear existing content

    if (results.length === 0) {
        movieWrapper.innerHTML = `<p>No results found.</p>`;
        return;
    }

    results.forEach(movie => {
        movieWrapper.innerHTML += `
            <div class="movie-card">
                <img class="mIcon" src="${imgUrl + movie.poster_path}" alt="${movie.title}" />
                <p class="mname">${movie.title}</p>
            </div>
        `;
    });
}

// Load popular movies on page load
getMovies(apiUrl);

// Search on button click
searchBtn.addEventListener("click", () => {
    let query = searchInput.value.trim();
    if (query !== "") {
        let searchUrl = baseUrl + "search/movie?" + apiKey + "&query=" + encodeURIComponent(query);
        getMovies(searchUrl);
    } else {
        getMovies(apiUrl); // Show popular if search is empty
    }
});



