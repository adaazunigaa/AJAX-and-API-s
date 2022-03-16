const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userInputSearch = form.elements.query.value;

    const config = { params: { q: userInputSearch } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    //console.log(res.data[0].show.image.medium);
    getData(res.data);
    form.elements.query.value = "";
});

//res.data[0].show.name
//res.data[0].show.summary
function getData(showsJSON) {

    for (let eachShow of showsJSON) {
        if (eachShow.show.image) {
            const img = document.createElement("IMG");
            //const name = document.createElement("figcaption");

            
            
            img.src = eachShow.show.image.medium;
            //name.innerHTML = eachShow.show.name;


            img.className = "m-2 dottedBorder images"
            //name.className = "d-inline"
            
            //document.querySelector(".displayImg").append(name);
            document.querySelector(".displayImg").append(img);
           

        }
    }
}



const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", clearImage);

const userInput = document.querySelector("#userInput");
userInput.addEventListener("click", clearImage);

function clearImage() {
    document.querySelector("#imageContainer").innerHTML = "";
}
