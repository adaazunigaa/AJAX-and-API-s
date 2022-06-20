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
            
            
            const card = document.createElement("div");
            const img = document.createElement("IMG");
            //const name = document.createElement("figcaption");

            const cardBody = document.createElement("div");

            const cardTitle = document.createElement("h5");
            const cardText = document.createElement("p");
            
            
            
            const id = eachShow.show.id;
            img.src = eachShow.show.image.medium;
            cardTitle.innerHTML = eachShow.show.name;
            cardText.innerHTML = eachShow.show.summary;


            card.className = `card card${id} row `;
            
            img.className = "dottedBorder card-img-top col-md-4 w-25 h-50 ";
            cardBody.className = `card-body cardBody${id} col-md-8 ` ;
            cardTitle.className = "card-title";
            cardText.className = "card-text";

            

            //name.className = "d-inline"
        

            //document.querySelector(".displayImg").append(name);
            document.querySelector("#imageContainer").append(card);
            document.querySelector(`.card${id}`).append(img);
            document.querySelector(`.card${id}`).append(cardBody)
            document.querySelector(`.cardBody${id}`).append(cardTitle)
            document.querySelector(`.cardBody${id}`).append(cardText)
           

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
