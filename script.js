let discover ="https://api.themoviedb.org/3/discover/movie?api_key=f38a3caef028622645f9cdb2d2af83f4&sort_by=popularity.desc&page=1";
let search = "https://api.themoviedb.org/3/search/movie?";
const listElement = document.getElementById("list");

const searchBar =  document.getElementById("search");
searchBar.onkeyup = function(event) {
    if (event.target.value == '') {
        listElement.innerHTML = ``;
        getData();
    }else{
        listElement.innerHTML = ``
        let search_term = event.target.value;
        console.log(search_term);
            fetch(
                search +
                new URLSearchParams ({
                    api_key : "f38a3caef028622645f9cdb2d2af83f4",
                    query: search_term,
                    page: 1,
                }) 
                )
                .then((result) => result.json())
                .then((result) => {
                    console.log(result);
                    makeElement(result);
                

            });
    }
};

let getData = () => {
    fetch(discover)
        .then((result) => result.json())
        .then((result) => {
        makeElement(result);
        });
};

let makeElement = (data) => {
    data.results.forEach((element) => {
        listElement.innerHTML += `<div class="card" style="width: 250px;">
            <img src="https://www.themoviedb.org/t/p/w500${element.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-body1">
                        <p class="judul">${element.title}</p>
                        <p class="rate"><i class="fa fa-star"></i> <b>${element.vote_average}</b></p>
                    </div>
                    <p class="card-text">${element.release_date}</p>
                </div>
        </div>`;
    });
};

getData();
