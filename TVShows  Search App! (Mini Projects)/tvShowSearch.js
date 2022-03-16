const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userInputSearch = form.elements.query.value;

    const config = { params: { q: userInputSearch } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements.query.value = "";
});

function makeImages(shows) {

    for (let eachShow of shows) {
        if (eachShow.show.image) {
            const img = document.createElement("IMG");
            img.src = eachShow.show.image.medium;
            img.className = "m-2 dottedBorder"
            document.querySelector(".displayImg").appendChild(img);
        }
    }
}





const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", function () {
    document.querySelector("#imageContainer").innerHTML = "";
});

