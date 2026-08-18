/* =========================================================
   TV TRACKER - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   SHOW DATABASE
   ========================================================= */

const shows = [

    {
        name: "X-Men '97",
        image: "images/xmen97.jpg",
        genre: "Animation",
        total: 19,
        type: "series"
    },

    {
        name: "Bleach",
        image: "images/bleach.jpg",
        genre: "Anime",
        total: 366,
        type: "series"
    },
   
	{
		name: "Bleach: Thousand-Year Blood War",
		image: "images/bleachtybw.jpg",
		genre: "Anime",
		total: 50,
		type: "series"
	},
   
    {
        name: "Mr. Robot",
        image: "images/mrrobot.jpg",
        genre: "Drama",
        total: 45,
        type: "series"
    },

    {
        name: "Lost",
        image: "images/lost.jpg",
        genre: "Drama",
        total: 121,
        type: "series"
    },

    {
        name: "Brooklyn Nine-Nine",
        image: "images/99.jpg",
        genre: "Comedy",
        total: 153,
        type: "series"
    },

    {
        name: "Game of Thrones",
        image: "images/gameofthrones.jpg",
        genre: "Fantasy",
        total: 73,
        type: "series"
    },

    {
        name: "Cowboy Bebop",
        image: "images/cowboybebop.jpg",
        genre: "Anime",
        total: 26,
        type: "series"
    },

    {
        name: "The Mentalist",
        image: "images/thementalist.jpg",
        genre: "Crime",
        total: 151,
        type: "series"
    },

    {
        name: "Smallville",
        image: "images/smallville.jpg",
        genre: "Superhero",
        total: 217,
        type: "series"
    },

    {
        name: "Avatar: The Last Airbender",
        image: "images/avatar.jpg",
        genre: "Animation",
        total: 61,
        type: "series"
    },
    
    { 
        name: "Breaking Bad", 
        image: "images/breakingbad.jpg", 
        genre: "Crime", 
        total: 62, 
        type: "series" 
    },

    { 
        name: "Better Call Saul", 
        image: "images/bettercallsaul.jpg", 
        genre: "Crime", 
        total: 63, 
        type: "series" 
    },

    { 
        name: "The Sopranos", 
        image: "images/sopranos.jpg", 
        genre: "Crime", 
        total: 86, 
        type: "series" 
    },

    { 
        name: "The Wire", 
        image: "images/thewire.jpg", 
        genre: "Crime", 
        total: 60, 
        type: "series" 
    },

    { 
        name: "Peaky Blinders", 
        image: "images/peakyblinders.jpg", 
        genre: "Crime", 
        total: 36, 
        type: "series" 
    },

    { 
        name: "Dexter", 
        image: "images/dexter.jpg", 
        genre: "Crime", 
        total: 96, 
        type: "series" 
    },

    { 
        name: "Hannibal", 
        image: "images/hannibal.jpg", 
        genre: "Crime", 
        total: 39, 
        type: "series" 
    },

    { 
        name: "True Detective", 
        image: "images/truedetective.jpg", 
        genre: "Crime", 
        total: 30, 
        type: "series" 
    },

    { 
        name: "Mindhunter", 
        image: "images/mindhunter.jpg", 
        genre: "Crime", 
        total: 19, 
        type: "series" 
    },

    { 
        name: "Fargo", 
        image: "images/fargo.jpg", 
        genre: "Crime", 
        total: 51, 
        type: "series" 
    },

    { 
        name: "Narcos", 
        image: "images/narcos.jpg", 
        genre: "Crime", 
        total: 30, 
        type: "series" 
    },

    { 
        name: "Ozark", 
        image: "images/ozark.jpg", 
        genre: "Crime", 
        total: 44, 
        type: "series" 
    },

    { 
        name: "Prison Break", 
        image: "images/prisonbreak.jpg", 
        genre: "Crime", 
        total: 90, 
        type: "series" 
    },

    { 
        name: "Suits", 
        image: "images/suits.jpg", 
        genre: "Drama", 
        total: 134, 
        type: "series" 
    },

    { 
        name: "Succession", 
        image: "images/succession.jpg", 
        genre: "Drama", 
        total: 39, 
        type: "series" 
    },

    { 
        name: "The Bear", 
        image: "images/thebear.png", 
        genre: "Drama", 
        total: 38, 
        type: "series" 
    },

    { 
        name: "The Last of Us", 
        image: "images/thelastofus.jpg", 
        genre: "Drama", 
        total: 16, 
        type: "series" 
    },

    { 
        name: "Shogun", 
        image: "images/shogun.jpg", 
        genre: "Drama", 
        total: 10, 
        type: "series" 
    },

    { 
        name: "Euphoria", 
        image: "images/euphoria.jpg", 
        genre: "Drama", 
        total: 18, 
        type: "series" 
    },

    { 
        name: "Yellowstone", 
        image: "images/yellowstone.jpg", 
        genre: "Drama", 
        total: 53, 
        type: "series" 
    },

    { 
        name: "House", 
        image: "images/house.jpg", 
        genre: "Drama", 
        total: 177, 
        type: "series" 
    },

    { 
        name: "The Walking Dead", 
        image: "images/walkingdead.jpg", 
        genre: "Drama", 
        total: 177, 
        type: "series" 
    },

    { 
        name: "The Office", 
        image: "images/theoffice.jpg", 
        genre: "Comedy", 
        total: 201, 
        type: "series" 
    },

    { 
        name: "Parks and Recreation", 
        image: "images/parksandrec.jpg", 
        genre: "Comedy", 
        total: 125, 
        type: "series" 
    },

    { 
        name: "Community", 
        image: "images/community.jpg", 
        genre: "Comedy", 
        total: 110, 
        type: "series" 
    },

    { 
        name: "Modern Family", 
        image: "images/modernfamily.jpg", 
        genre: "Comedy", 
        total: 250, 
        type: "series" 
    },

    { 
        name: "Friends", 
        image: "images/friends.jpg", 
        genre: "Comedy", 
        total: 236, 
        type: "series" 
    },

    { 
        name: "How I Met Your Mother", 
        image: "images/howimetyourmother.jpg", 
        genre: "Comedy", 
        total: 208, 
        type: "series" 
    },

    { 
        name: "The Good Place", 
        image: "images/thegoodplace.jpg", 
        genre: "Comedy", 
        total: 53, 
        type: "series" 
    },

    { 
        name: "Ted Lasso", 
        image: "images/tedlasso.jpg", 
        genre: "Comedy", 
        total: 34, 
        type: "series" 
    },

    { 
        name: "Stranger Things", 
        image: "images/strangerthings.jpg", 
        genre: "Sci-Fi", 
        total: 34, 
        type: "series" 
    },

    { 
        name: "Black Mirror", 
        image: "images/blackmirror.jpg", 
        genre: "Sci-Fi", 
        total: 33, 
        type: "series" 
    },

    { 
        name: "Dark", 
        image: "images/dark.jpg", 
        genre: "Sci-Fi", 
        total: 26, 
        type: "series" 
    },

    { 
        name: "The Expanse", 
        image: "images/expanse.jpg", 
        genre: "Sci-Fi", 
        total: 62, 
        type: "series" 
    },

    { 
        name: "Westworld", 
        image: "images/westworld.jpg", 
        genre: "Sci-Fi", 
        total: 36, 
        type: "series" 
    },

    { 
        name: "Fallout", 
        image: "images/fallout.jpg", 
        genre: "Sci-Fi", 
        total: 8, 
        type: "series" 
    },

    { 
        name: "Silo", 
        image: "images/silo.jpg", 
        genre: "Sci-Fi", 
        total: 20, 
        type: "series" 
    },

    { 
        name: "The Mandalorian", 
        image: "images/mandalorian.jpg", 
        genre: "Sci-Fi", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Andor", 
        image: "images/andor.jpg", 
        genre: "Sci-Fi", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Daredevil", 
        image: "images/daredevil.jpg", 
        genre: "Superhero", 
        total: 39, 
        type: "series" 
    },

    { 
        name: "Daredevil: Born Again", 
        image: "images/daredevilbornagain.jpg", 
        genre: "Superhero", 
        total: 9, 
        type: "series" 
    },

    { 
        name: "The Punisher", 
        image: "images/punisher.jpg", 
        genre: "Superhero", 
        total: 26, 
        type: "series" 
    },

    { 
        name: "Loki", 
        image: "images/loki.jpg", 
        genre: "Superhero", 
        total: 12, 
        type: "series" 
    },

    { 
        name: "Peacemaker", 
        image: "images/peacemaker.jpg", 
        genre: "Superhero", 
        total: 13, 
        type: "series" 
    },

    { 
        name: "The Boys", 
        image: "images/theboys.jpg", 
        genre: "Superhero", 
        total: 32, 
        type: "series" 
    },

    { 
        name: "Gen V", 
        image: "images/genv.jpg", 
        genre: "Superhero", 
        total: 8, 
        type: "series" 
    },

    { 
        name: "Gotham", 
        image: "images/gotham.jpg", 
        genre: "Superhero", 
        total: 100, 
        type: "series" 
    },

    { 
        name: "The Umbrella Academy", 
        image: "images/umbrellaacademy.jpg", 
        genre: "Superhero", 
        total: 36, 
        type: "series" 
    },

    { 
        name: "Invincible", 
        image: "images/invincible.jpg", 
        genre: "Animation", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Rick and Morty", 
        image: "images/rickandmorty.jpg", 
        genre: "Animation", 
        total: 81, 
        type: "series" 
    },

    { 
        name: "BoJack Horseman", 
        image: "images/bojack.jpg", 
        genre: "Animation", 
        total: 77, 
        type: "series" 
    },

    { 
        name: "Arcane", 
        image: "images/arcane.jpg", 
        genre: "Animation", 
        total: 18, 
        type: "series" 
    },

    { 
        name: "Gravity Falls", 
        image: "images/gravityfalls.jpg", 
        genre: "Animation", 
        total: 40, 
        type: "series" 
    },

    { 
        name: "Adventure Time", 
        image: "images/adventuretime.jpg", 
        genre: "Animation", 
        total: 283, 
        type: "series" 
    },

    { 
        name: "Regular Show", 
        image: "images/regularshow.jpg", 
        genre: "Animation", 
        total: 261, 
        type: "series" 
    },

    { 
        name: "Batman: The Animated Series", 
        image: "images/batmantas.jpg", 
        genre: "Animation", 
        total: 85, 
        type: "series" 
    },

    { 
        name: "Justice League", 
        image: "images/justiceleague.jpg", 
        genre: "Animation", 
        total: 52, 
        type: "series" 
    },

    { 
        name: "The Clone Wars", 
        image: "images/clonewars.jpg", 
        genre: "Animation", 
        total: 133, 
        type: "series" 
    },

    { 
        name: "Death Note", 
        image: "images/deathnote.jpg", 
        genre: "Anime", 
        total: 37, 
        type: "series" 
    },

    { 
        name: "Jujutsu Kaisen", 
        image: "images/jjk.jpg", 
        genre: "Anime", 
        total: 59, 
        type: "series" 
    },

    { 
        name: "One Piece", 
        image: "images/onepiece.jpg", 
        genre: "Anime", 
        total: 1150, 
        type: "series" 
    },

    { 
        name: "Naruto", 
        image: "images/naruto.jpg", 
        genre: "Anime", 
        total: 220, 
        type: "series" 
    },

    { 
        name: "Naruto: Shippuden", 
        image: "images/narutoshippuden.jpg", 
        genre: "Anime", 
        total: 500, 
        type: "series" 
    },

    { 
        name: "Attack on Titan", 
        image: "images/aot.jpg", 
        genre: "Anime", 
        total: 94, 
        type: "series" 
    },

    { 
        name: "Demon Slayer", 
        image: "images/demonslayer.jpg", 
        genre: "Anime", 
        total: 63, 
        type: "series" 
    },

    { 
        name: "My Hero Academia", 
        image: "images/mha.jpg", 
        genre: "Anime", 
        total: 170, 
        type: "series" 
    },

    { 
        name: "Hunter x Hunter", 
        image: "images/hunterxhunter.jpg", 
        genre: "Anime", 
        total: 148, 
        type: "series" 
    },

    { 
        name: "Vinland Saga", 
        image: "images/vinlandsaga.jpg", 
        genre: "Anime", 
        total: 48, 
        type: "series" 
    },

    { 
        name: "Blue Lock", 
        image: "images/bluelock.jpg", 
        genre: "Anime", 
        total: 38, 
        type: "series" 
    },

    { 
        name: "Haikyu!!", 
        image: "images/haikyuu.jpg", 
        genre: "Anime", 
        total: 85, 
        type: "series" 
    },

    { 
        name: "JoJo's Bizarre Adventure", 
        image: "images/jojos.jpg", 
        genre: "Anime", 
        total: 190, 
        type: "series" 
    },

    { 
        name: "Neon Genesis Evangelion", 
        image: "images/evangelion.jpg", 
        genre: "Anime", 
        total: 26, 
        type: "series" 
    },

    { 
        name: "Fullmetal Alchemist: Brotherhood", 
        image: "images/fmab.jpg", 
        genre: "Anime", 
        total: 64, 
        type: "series" 
    },

    { 
        name: "Chainsaw Man", 
        image: "images/chainsawman.jpg", 
        genre: "Anime", 
        total: 12, 
        type: "series" 
    },

    { 
        name: "Mob Psycho 100", 
        image: "images/mobpsycho.jpg", 
        genre: "Anime", 
        total: 37, 
        type: "series" 
    },

    { 
        name: "One Punch Man", 
        image: "images/onepunchman.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Parasyte: The Maxim", 
        image: "images/parasyte.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Cyberpunk: Edgerunners", 
        image: "images/cyberpunk.jpg", 
        genre: "Anime", 
        total: 10, 
        type: "series" 
    },

    { 
        name: "Steins;Gate", 
        image: "images/steinsgate.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Monster", 
        image: "images/monster.jpg", 
        genre: "Anime", 
        total: 74, 
        type: "series" 
    },

    { 
        name: "Code Geass", 
        image: "images/codegeass.jpg", 
        genre: "Anime", 
        total: 50, 
        type: "series" 
    },

    { 
        name: "Berserk", 
        image: "images/berserk.jpg", 
        genre: "Anime", 
        total: 25, 
        type: "series" 
    },

    { 
        name: "Kakegurui", 
        image: "images/kakegurui.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Zom 100: Bucket List of the Dead", 
        image: "images/zom100.jpg", 
        genre: "Anime", 
        total: 12, 
        type: "series" 
    },

    { 
        name: "My Dress-Up Darling", 
        image: "images/mydressupdarling.jpg", 
        genre: "Anime", 
        total: 12, 
        type: "series" 
    },

    { 
        name: "The Quintessential Quintuplets", 
        image: "images/quintessentialquintuplets.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Frieren: Beyond Journey's End", 
        image: "images/frieren.jpg", 
        genre: "Anime", 
        total: 28, 
        type: "series" 
    },

    { 
        name: "Dandadan", 
        image: "images/dandadan.jpg", 
        genre: "Anime", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Solo Leveling", 
        image: "images/sololeveling.jpg", 
        genre: "Anime", 
        total: 25, 
        type: "series" 
    },

    { 
        name: "Kaiju No. 8", 
        image: "images/kaiju8.jpg", 
        genre: "Anime", 
        total: 23, 
        type: "series" 
    },

    { 
        name: "The Promised Neverland", 
        image: "images/promisedneverland.jpg", 
        genre: "Anime", 
        total: 23, 
        type: "series" 
    },

    { 
        name: "Black Clover", 
        image: "images/blackclover.jpg", 
        genre: "Anime", 
        total: 170, 
        type: "series" 
    },

    { 
        name: "Dragon Ball Z", 
        image: "images/dbz.jpg", 
        genre: "Anime", 
        total: 291, 
        type: "series" 
    },

    { 
        name: "Dragon Ball Super", 
        image: "images/dbsuper.jpg", 
        genre: "Anime", 
        total: 131, 
        type: "series" 
    },

    { 
        name: "The Legend of Korra", 
        image: "images/korra.jpg", 
        genre: "Animation", 
        total: 52, 
        type: "series" 
    },

    { 
        name: "The Boys: Diabolical", 
        image: "images/diabolical.jpg", 
        genre: "Animation", 
        total: 8, 
        type: "series" 
    },

    { 
        name: "The Haunting of Hill House", 
        image: "images/hillhouse.jpg", 
        genre: "Horror", 
        total: 10, 
        type: "series" 
    },

    { 
        name: "The Haunting of Bly Manor", 
        image: "images/blymanor.jpg", 
        genre: "Horror", 
        total: 9, 
        type: "series" 
    },

    { 
        name: "Midnight Mass", 
        image: "images/midnightmass.jpg", 
        genre: "Horror", 
        total: 7, 
        type: "series" 
    },

    { 
        name: "Squid Game", 
        image: "images/squidgame.jpg", 
        genre: "Thriller", 
        total: 22, 
        type: "series" 
    },

    { 
        name: "Alice in Borderland", 
        image: "images/aliceinborderland.jpg", 
        genre: "Thriller", 
        total: 16, 
        type: "series" 
    },

    { 
        name: "Reacher", 
        image: "images/reacher.jpg", 
        genre: "Action", 
        total: 24, 
        type: "series" 
    },

    { 
        name: "Cobra Kai", 
        image: "images/cobrakai.jpg", 
        genre: "Action", 
        total: 65, 
        type: "series" 
    },

    { 
        name: "The Last Kingdom", 
        image: "images/lastkingdom.jpg", 
        genre: "Drama", 
        total: 46, 
        type: "series" 
    },

    { 
        name: "Vikings", 
        image: "images/vikings.jpg", 
        genre: "Drama", 
        total: 89, 
        type: "series" 
    },

    { 
        name: "The Witcher", 
        image: "images/witcher.jpg", 
        genre: "Fantasy", 
        total: 32, 
        type: "series" 
    },

    { 
        name: "House of the Dragon", 
        image: "images/houseofthedragon.jpg", 
        genre: "Fantasy", 
        total: 18, 
        type: "series" 
    },

    { 
        name: "The Sandman", 
        image: "images/sandman.jpg", 
        genre: "Fantasy", 
        total: 23, 
        type: "series" 
    },

    { 
        name: "Wednesday", 
        image: "images/wednesday.jpg", 
        genre: "Fantasy", 
        total: 16, 
        type: "series" 
    },
];


/* =========================================================
   LOCAL STORAGE HELPERS
   ========================================================= */

function getProgress() {

    return JSON.parse(
        localStorage.getItem("showProgress")
    ) || {};

}


function saveProgress(progress) {

    localStorage.setItem(
        "showProgress",
        JSON.stringify(progress)
    );

}


function getCustomShows() {

    return JSON.parse(
        localStorage.getItem("customShows")
    ) || [];

}


function saveCustomShows(customShows) {

    localStorage.setItem(
        "customShows",
        JSON.stringify(customShows)
    );

}


function getAllShows() {

    return [
        ...shows,
        ...getCustomShows()
    ];

}


/* =========================================================
   FIND SHOW
   ========================================================= */

function findShow(showName) {

    return getAllShows().find(
        show =>
            show.name.toLowerCase() ===
            showName.toLowerCase()
    );

}


/* =========================================================
   SEARCH SHOW DATABASE
   ========================================================= */

function searchShows() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (!input || !results) {
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    results.innerHTML = "";


    /* Empty search */

    if (query === "") {

        results.classList.remove("active");

        return;

    }


    /*
        Search the limited database.

        We search both the built-in database
        and any custom shows.
    */

    const matches =
        getAllShows().filter(show => {

            return show.name
                .toLowerCase()
                .includes(query);

        });


    results.classList.add("active");


    /* No results */

    if (matches.length === 0) {

        results.innerHTML = `

            <div class="search-result">

                <div class="search-result-info">

                    <h3>
                        No shows found
                    </h3>

                    <p>
                        Try another show name.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    /* Display results */

    matches.forEach(show => {

        const result =
            document.createElement("div");

        result.className =
            "search-result";


        /* Poster */

        if (show.image) {

            const image =
                document.createElement("img");

            image.src =
                show.image;

            image.alt =
                show.name;

            result.appendChild(image);

        }


        /* Information */

        const info =
            document.createElement("div");

        info.className =
            "search-result-info";


        const title =
            document.createElement("h3");

        title.textContent =
            show.name;


        const details =
            document.createElement("p");

        if (show.type === "movie") {

            details.textContent =
                `${show.genre} • Movie`;

        } else {

            details.textContent =
                `${show.genre} • ${show.total} Episodes`;

        }


        info.appendChild(title);

        info.appendChild(details);


        /* Add button */

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.textContent =
            "+ Add";


        button.addEventListener(
            "click",
            function () {

                addToWatchlist(
                    show.name
                );

            }
        );


        result.appendChild(info);

        result.appendChild(button);


        results.appendChild(result);

    });

}


/* =========================================================
   ADD SHOW FROM SEARCH
   ========================================================= */

function addToWatchlist(showName) {

    const show =
        findShow(showName);


    if (!show) {

        return;

    }


    const progress =
        getProgress();


    /*
        If the show already exists in progress,
        it is already in the library.
    */

    if (
        progress[show.name] !== undefined
    ) {

        alert(
            `"${show.name}" is already in your watchlist.`
        );

        return;

    }


    /* Add at zero progress */

    progress[show.name] = 0;


    saveProgress(progress);


    alert(
        `"${show.name}" has been added to your watchlist!`
    );


    /* Clear search */

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (input) {

        input.value = "";

    }


    if (results) {

        results.innerHTML = "";

        results.classList.remove(
            "active"
        );

    }


    /* Refresh website */

    refreshTracker();

}


/* =========================================================
   ADD CUSTOM SHOW
   =========================================================
   
   Kept for future use.

   The current Home page uses the database search
   instead of the prompt.
   ========================================================= */

function addShow() {

    let showName =
        prompt(
            "Enter the name of the TV Show:"
        );


    if (
        showName === null ||
        showName.trim() === ""
    ) {

        return;

    }


    showName =
        showName.trim();


    const existingShow =
        findShow(showName);


    if (existingShow) {

        alert(
            `"${existingShow.name}" is already in your library.`
        );

        return;

    }


    const newShow = {

        name: showName,

        image: "",

        genre: "Unknown",

        total: 1,

        type: "series",

        custom: true

    };


    const customShows =
        getCustomShows();


    customShows.push(
        newShow
    );


    saveCustomShows(
        customShows
    );


    const progress =
        getProgress();


    progress[showName] =
        0;


    saveProgress(
        progress
    );


    alert(
        `"${showName}" has been added to your library!`
    );


    refreshTracker();

}

/* =========================================================
   LOG EPISODE
   ========================================================= */

function logEpisode(showName) {

    const show =
        findShow(showName);


    if (!show) {
        return;
    }


    const progress =
        getProgress();


    let watched =
        progress[show.name] || 0;


    /* Already completed */

    if (watched >= show.total) {

        return;

    }


    /* Add one episode */

    watched++;


    progress[show.name] =
        watched;


    saveProgress(
        progress
    );


    /* =====================================================
       SHOW COMPLETED
       ===================================================== */

    if (watched >= show.total) {

        /*
            Ask for rating immediately after
            the final episode is logged.
        */

        let rating = null;


        while (rating === null) {

            const answer =
                prompt(
                    `🎉 You finished "${show.name}"!\n\n` +
                    `Rate it out of 5 stars (1-5):`
                );


            /*
                User cancelled.
                We'll allow the show to become
                completed without a rating.
            */

            if (answer === null) {

                break;

            }


            const number =
                Number(answer);


            if (
                Number.isInteger(number) &&
                number >= 1 &&
                number <= 5
            ) {

                rating =
                    number;

            } else {

                alert(
                    "Please enter a number from 1 to 5."
                );

            }

        }


        /* Save rating if one was provided */

        if (rating !== null) {

            const ratings =
                getRatings();


            ratings[show.name] =
                rating;


            saveRatings(
                ratings
            );

        }


        /*
            Refresh everything.

            The show will automatically disappear
            from Continue Watching because its
            progress now equals its total.

            It will automatically appear on
            Completed.
        */

        alert(
            `✔ ${show.name} has been moved to Completed.`
        );

    }


    /* Refresh all pages/components */

    refreshTracker();


    loadWatchlist();

    loadCompleted();

}
/* =========================================================
   REMOVE EPISODE
   ========================================================= */

function removeEpisode(showName) {

    const show =
        findShow(showName);


    if (!show) {
        return;
    }


    const progress =
        getProgress();


    let watched =
        progress[show.name] || 0;


    if (
        watched <= 0
    ) {

        return;

    }


    watched--;


    progress[show.name] =
        watched;


    saveProgress(
        progress
    );


    refreshTracker();

}


/* =========================================================
   REWATCH
   ========================================================= */

function rewatchShow(showName) {

    const show =
        findShow(showName);


    if (!show) {
        return;
    }


    const progress =
        getProgress();


    progress[show.name] =
        0;


    saveProgress(
        progress
    );


    alert(
        `${show.name} has been added back to your watching list.`
    );


    refreshTracker();

}


/* =========================================================
   LOAD CONTINUE WATCHING
   ========================================================= */

function loadContinueWatching() {

    const container =
        document.getElementById(
            "continueWatching"
        );

    const section =
        document.getElementById(
            "continueSection"
        );


    if (
        !container ||
        !section
    ) {

        return;

    }


    container.innerHTML = "";


    const progress =
        getProgress();


    const allShows =
        getAllShows();


    let watchingCount =
        0;


    allShows.forEach(show => {

        const watched =
            progress[show.name] || 0;


        if (
            watched > 0 &&
            watched < show.total
        ) {

            watchingCount++;


            const percent =
                Math.min(
                    (watched / show.total) * 100,
                    100
                );


            const card =
                document.createElement("div");

            card.className =
                "show-card";


            /* Poster */

            const poster =
                document.createElement("div");

            poster.className =
                "poster";


            if (show.image) {

                const image =
                    document.createElement("img");

                image.src =
                    show.image;

                image.alt =
                    show.name;

                poster.appendChild(
                    image
                );

            } else {

                poster.textContent =
                    "📺";

            }


            /* Information */

            const info =
                document.createElement("div");

            info.className =
                "info";


            const title =
                document.createElement("h3");

            title.textContent =
                show.name;


            const episodeText =
                document.createElement("p");


            if (
                show.type === "movie"
            ) {

                episodeText.textContent =
                    `${watched} / ${show.total}`;

            } else {

                episodeText.textContent =
                    `${watched} / ${show.total} Episodes`;

            }


            /* Progress bar */

            const progressBar =
                document.createElement("div");

            progressBar.className =
                "progress";


            const progressFill =
                document.createElement("div");

            progressFill.style.width =
                `${percent}%`;


            progressBar.appendChild(
                progressFill
            );


            /* Log button */

            const button =
                document.createElement("button");

            button.className =
                "watch";


            button.textContent =
                show.type === "movie"
                    ? "📺 Continue"
                    : "📺 Log Episode";


            button.addEventListener(
                "click",
                function () {

                    logEpisode(
                        show.name
                    );

                }
            );


            info.appendChild(
                title
            );

            info.appendChild(
                episodeText
            );

            info.appendChild(
                progressBar
            );

            info.appendChild(
                button
            );


            card.appendChild(
                poster
            );

            card.appendChild(
                info
            );


            container.appendChild(
                card
            );

        }

    });


    /* Hide if empty */

    if (
        watchingCount === 0
    ) {

        section.style.display =
            "none";

    } else {

        section.style.display =
            "block";

    }

}


/* =========================================================
   LOAD RECOMMENDATIONS
   ========================================================= */

function loadRecommendations() {

    const container =
        document.getElementById(
            "recommendations"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const progress =
        getProgress();


    const allShows =
        getAllShows();


    const watchedShows =
        Object.keys(progress);


    /*
        Nothing in the library yet.
    */

    if (
        watchedShows.length === 0
    ) {

        container.innerHTML = `

            <p style="color:#aaa;">

                Add some shows to your
                watchlist and we'll recommend
                something for you!

            </p>

        `;

        return;

    }


    /* Count genres */

    const genreCount =
        {};


    watchedShows.forEach(name => {

        const show =
            findShow(name);


        if (
            show &&
            show.genre &&
            show.genre !== "Unknown"
        ) {

            genreCount[show.genre] =
                (
                    genreCount[show.genre] || 0
                ) + 1;

        }

    });


    /*
        If we cannot determine a genre.
    */

    if (
        Object.keys(genreCount).length === 0
    ) {

        container.innerHTML = `

            <p style="color:#aaa;">

                Add more shows to get
                personalised recommendations.

            </p>

        `;

        return;

    }


    /* Favourite genre */

    const favouriteGenre =
        Object.keys(
            genreCount
        ).sort(
            (a, b) =>
                genreCount[b] -
                genreCount[a]
        )[0];


    /* Find recommendations */

    const recommendations =
        allShows.filter(show => {

            return (
                show.genre ===
                favouriteGenre &&

                !watchedShows.includes(
                    show.name
                )
            );

        });


    /*
        Nothing left in that genre.
    */

    if (
        recommendations.length === 0
    ) {

        container.innerHTML = `

            <p style="color:#aaa;">

                You've already added all our
                ${favouriteGenre} recommendations!

            </p>

        `;

        return;

    }


    /* Create recommendation cards */

    recommendations.forEach(show => {

        const card =
            document.createElement("div");

        card.className =
            "show-card";


        /* Poster */

        const poster =
            document.createElement("div");

        poster.className =
            "poster";


        if (show.image) {

            const image =
                document.createElement("img");

            image.src =
                show.image;

            image.alt =
                show.name;

            poster.appendChild(
                image
            );

        } else {

            poster.textContent =
                "📺";

        }


        /* Info */

        const info =
            document.createElement("div");

        info.className =
            "info";


        const title =
            document.createElement("h3");

        title.textContent =
            show.name;


        const genre =
            document.createElement("p");

        genre.textContent =
            show.genre;


        const button =
            document.createElement("button");

        button.className =
            "watch";

        button.textContent =
            "+ Add to Watchlist";


        button.addEventListener(
            "click",
            function () {

                addToWatchlist(
                    show.name
                );

            }
        );


        info.appendChild(
            title
        );

        info.appendChild(
            genre
        );

        info.appendChild(
            button
        );


        card.appendChild(
            poster
        );

        card.appendChild(
            info
        );


        container.appendChild(
            card
        );

    });

}


/* =========================================================
   ADD RECOMMENDED SHOW
   ========================================================= */

function addRecommendedShow(showName) {

    addToWatchlist(
        showName
    );

}


/* =========================================================
   SETTINGS
   ========================================================= */

function saveSettings() {

    const username =
        document.getElementById(
            "username"
        );

    const genre =
        document.getElementById(
            "genre"
        );

    const theme =
        document.getElementById(
            "theme"
        );

    const accent =
        document.getElementById(
            "accent"
        );


    if (username) {

        localStorage.setItem(
            "username",
            username.value.trim()
        );

    }


    if (genre) {

        localStorage.setItem(
            "genre",
            genre.value
        );

    }


    if (theme) {

        localStorage.setItem(
            "theme",
            theme.value
        );

    }


    if (accent) {

        localStorage.setItem(
            "accent",
            accent.value
        );

    }


    applySettings();


    alert(
        "Settings Saved!"
    );

}


/* =========================================================
   APPLY SETTINGS
   ========================================================= */

function applySettings() {

    const username =
        localStorage.getItem(
            "username"
        );


    const theme =
        localStorage.getItem(
            "theme"
        );


    const accent =
        localStorage.getItem(
            "accent"
        );


    /* Logo */

    const logo =
        document.getElementById(
            "logoName"
        );


    if (logo) {

        if (username) {

            logo.textContent =
                `${username}'s TV Tracker`;

        } else {

            logo.textContent =
                "TV Tracker";

        }

    }


    /* Accent */

    if (accent) {

        document.documentElement.style.setProperty(
            "--accent",
            accent
        );

    }


    /* Theme */

    document.body.classList.remove(
        "light"
    );


    if (
        theme === "light"
    ) {

        document.body.classList.add(
            "light"
        );

    }

}


/* =========================================================
   LOAD SETTINGS
   ========================================================= */

function loadSettings() {

    const username =
        document.getElementById(
            "username"
        );


    const genre =
        document.getElementById(
            "genre"
        );


    const theme =
        document.getElementById(
            "theme"
        );


    const accent =
        document.getElementById(
            "accent"
        );


    const savedUsername =
        localStorage.getItem(
            "username"
        );


    const savedGenre =
        localStorage.getItem(
            "genre"
        );


    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    const savedAccent =
        localStorage.getItem(
            "accent"
        );


    if (username) {

        username.value =
            savedUsername || "";

    }


    if (genre) {

        genre.value =
            savedGenre || "Drama";

    }


    if (theme) {

        theme.value =
            savedTheme || "dark";

    }


    if (accent) {

        accent.value =
            savedAccent || "#4da3ff";

    }


    applySettings();

}


/* =========================================================
   CLEAR ALL DATA
   ========================================================= */

function clearAllData() {

    const confirmed =
        confirm(
            "Are you sure you want to delete all your TV Tracker data? This cannot be undone."
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        "showProgress"
    );

    localStorage.removeItem(
        "customShows"
    );

    localStorage.removeItem(
        "username"
    );

    localStorage.removeItem(
        "genre"
    );

    localStorage.removeItem(
        "theme"
    );

    localStorage.removeItem(
        "accent"
    );


    alert(
        "All TV Tracker data has been deleted."
    );


    location.reload();

}


/* =========================================================
   REMOVE FROM WATCHLIST
   ========================================================= */

function removeFromWatchlist(showName) {

    const confirmed =
        confirm(
            `Remove "${showName}" from your watchlist?`
        );


    if (!confirmed) {
        return;
    }


    const progress =
        getProgress();


    delete progress[showName];


    saveProgress(
        progress
    );


    loadWatchlist();

    loadContinueWatching();

    loadRecommendations();

}


/* =========================================================
   LOAD WATCHLIST
   ========================================================= */

function loadWatchlist() {

    const container =
        document.getElementById(
            "watchlist"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const progress =
        getProgress();


    const allShows =
        getAllShows();


    let watchlistCount =
        0;


    allShows.forEach(show => {

        const watched =
            progress[show.name];


        /*
            Only shows added to the library.

            Completed shows are handled
            by completed.html.
        */

        if (
            watched === undefined ||
            watched >= show.total
        ) {

            return;

        }


        watchlistCount++;


        const percent =
            Math.min(
                (watched / show.total) * 100,
                100
            );


        /* CARD */

        const card =
            document.createElement("div");

        card.className =
            "watch-card";


        /* POSTER */

        if (show.image) {

            const image =
                document.createElement("img");

            image.className =
                "watch-poster";

            image.src =
                show.image;

            image.alt =
                show.name;

            card.appendChild(
                image
            );

        } else {

            const placeholder =
                document.createElement("div");

            placeholder.className =
                "watch-placeholder";

            placeholder.textContent =
                "📺";

            card.appendChild(
                placeholder
            );

        }


        /* INFO */

        const info =
            document.createElement("div");

        info.className =
            "watch-info";


        /* TITLE */

        const title =
            document.createElement("h2");

        title.textContent =
            show.name;


        /* GENRE */

        const genre =
            document.createElement("p");

        genre.className =
            "watch-meta";

        genre.textContent =
            show.genre;


        /* PROGRESS */

        const progressBar =
            document.createElement("div");

        progressBar.className =
            "watch-progress";


        const progressFill =
            document.createElement("div");

        progressFill.className =
            "watch-progress-fill";


        progressFill.style.width =
            `${percent}%`;


        progressBar.appendChild(
            progressFill
        );


        /* PROGRESS TEXT */

        const progressText =
            document.createElement("p");

        progressText.className =
            "watch-progress-text";


        if (
            show.type === "movie"
        ) {

            progressText.textContent =
                `${watched} / ${show.total}`;

        } else {

            progressText.textContent =
                `${watched} / ${show.total} Episodes`;

        }


        /* BUTTONS */

        const buttons =
            document.createElement("div");

        buttons.className =
            "watch-buttons";


        /* MINUS */

        const minusButton =
            document.createElement("button");

        minusButton.textContent =
            "➖ Episode";


        minusButton.addEventListener(
            "click",
            function () {

                removeEpisode(
                    show.name
                );

                loadWatchlist();

            }
        );


        /* PLUS */

        const plusButton =
            document.createElement("button");

        plusButton.textContent =
            "➕ Episode";


        plusButton.addEventListener(
            "click",
            function () {

                logEpisode(
                    show.name
                );

                loadWatchlist();

            }
        );


        /* REMOVE */

        const removeButton =
            document.createElement("button");

        removeButton.className =
            "remove-button";

        removeButton.textContent =
            "✖ Remove";


        removeButton.addEventListener(
            "click",
            function () {

                removeFromWatchlist(
                    show.name
                );

            }
        );


        buttons.appendChild(
            minusButton
        );

        buttons.appendChild(
            plusButton
        );

        buttons.appendChild(
            removeButton
        );


        /* BUILD */

        info.appendChild(
            title
        );

        info.appendChild(
            genre
        );

        info.appendChild(
            progressBar
        );

        info.appendChild(
            progressText
        );

        info.appendChild(
            buttons
        );


        card.appendChild(
            info
        );


        container.appendChild(
            card
        );

    });


    /* EMPTY WATCHLIST */

    if (
        watchlistCount === 0
    ) {

        container.innerHTML = `

            <div class="empty-watchlist">

                <h2>
                    Your watchlist is empty
                </h2>

                <p>
                    Search for a show on the
                    Home page to start tracking it.
                </p>

                <a
                    class="home-button"
                    href="index.html"
                >
                    Browse Shows
                </a>

            </div>

        `;

    }

}


/* =========================================================
   EXPORT LIBRARY
   ========================================================= */

function exportLibrary() {

    const data = {

        username:
            localStorage.getItem(
                "username"
            ) || "",

        genre:
            localStorage.getItem(
                "genre"
            ) || "Drama",

        theme:
            localStorage.getItem(
                "theme"
            ) || "dark",

        accent:
            localStorage.getItem(
                "accent"
            ) || "#4da3ff",

        showProgress:
            getProgress(),

        customShows:
            getCustomShows()

    };


    const json =
        JSON.stringify(
            data,
            null,
            2
        );


    const blob =
        new Blob(
            [json],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        "tv-tracker-backup.json";


    link.click();


    URL.revokeObjectURL(
        url
    );

}


/* =========================================================
   IMPORT LIBRARY
   ========================================================= */

function importLibrary() {

    const input =
        document.createElement(
            "input"
        );


    input.type =
        "file";


    input.accept =
        ".json,application/json";


    input.addEventListener(
        "change",
        function () {

            const file =
                input.files[0];


            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    try {

                        const data =
                            JSON.parse(
                                event.target.result
                            );


                        if (
                            data.username !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "username",
                                data.username
                            );

                        }


                        if (
                            data.genre !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "genre",
                                data.genre
                            );

                        }


                        if (
                            data.theme !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "theme",
                                data.theme
                            );

                        }


                        if (
                            data.accent !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "accent",
                                data.accent
                            );

                        }


                        if (
                            data.showProgress !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "showProgress",
                                JSON.stringify(
                                    data.showProgress
                                )
                            );

                        }


                        if (
                            data.customShows !==
                            undefined
                        ) {

                            localStorage.setItem(
                                "customShows",
                                JSON.stringify(
                                    data.customShows
                                )
                            );

                        }


                        alert(
                            "Library imported successfully!"
                        );


                        location.reload();


                    } catch (error) {

                        alert(
                            "That file is not a valid TV Tracker backup."
                        );

                    }

                };


            reader.readAsText(
                file
            );

        }
    );


    input.click();

}


/* =========================================================
   REFRESH TRACKER
   ========================================================= */

function refreshTracker() {

    loadContinueWatching();

    loadRecommendations();

    loadWatchlist();

}


/* =========================================================
   SEARCH EVENT LISTENERS
   ========================================================= */

function setupSearch() {

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const results =
        document.getElementById(
            "searchResults"
        );


    if (
        searchButton
    ) {

        searchButton.addEventListener(
            "click",
            searchShows
        );

    }


    if (
        searchInput
    ) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    searchShows();

                }

            }
        );


        /*
            Clear results when the
            search box is emptied.
        */

        searchInput.addEventListener(
            "input",
            function () {

                if (
                    searchInput.value.trim() === ""
                ) {

                    if (results) {

                        results.innerHTML =
                            "";

                        results.classList.remove(
                            "active"
                        );

                    }

                }

            }
        );

    }

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        loadSettings();

        loadContinueWatching();

        loadRecommendations();

        loadWatchlist();

        setupSearch();

    }
);
/* =========================================================
   COMPLETED SHOW RATINGS
   ========================================================= */

/*
    Ratings are stored separately from show progress.

    Example:
    {
        "Bleach": 5,
        "Cowboy Bebop": 4
    }

    Rating range:
    1 - 5 stars
*/


/* =========================================================
   GET RATINGS
   ========================================================= */

function getRatings() {

    return JSON.parse(
        localStorage.getItem("showRatings")
    ) || {};

}


function saveRatings(ratings) {

    localStorage.setItem(
        "showRatings",
        JSON.stringify(ratings)
    );

}


/* =========================================================
   SAVE RATINGS
   ========================================================= */

function saveRatings(ratings) {

    localStorage.setItem(
        "showRatings",
        JSON.stringify(ratings)
    );

}


/* =========================================================
   RATE SHOW
   ========================================================= */

function rateShow(showName) {

    const show = findShow(showName);

    if (!show) {
        return;
    }


    const ratings = getRatings();

    const currentRating =
        ratings[show.name] || 0;


    const rating = prompt(
        `Rate "${show.name}" out of 5 stars:\n\n` +
        `Enter a number from 1 to 5.`,
        currentRating || ""
    );


    /* Cancel */

    if (rating === null) {
        return;
    }


    const number =
        Number(rating);


    /* Validate */

    if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 5
    ) {

        alert(
            "Please enter a rating between 1 and 5."
        );

        return;
    }


    ratings[show.name] =
        number;


    saveRatings(
        ratings
    );


    alert(
        `⭐ ${show.name} rated ${number}/5!`
    );


    /* Refresh completed page */

    loadCompleted();

}


/* =========================================================
   DISPLAY STAR RATING
   ========================================================= */

function getStarRating(rating) {

    if (!rating) {

        return "Not Rated";

    }


    return (
        "★".repeat(rating) +
        "☆".repeat(5 - rating)
    );

}


/* =========================================================
   LOAD COMPLETED SHOWS
   ========================================================= */

function loadCompleted() {

    const container =
        document.getElementById(
            "completedGrid"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const progress =
        getProgress();


    const ratings =
        getRatings();


    const allShows =
        getAllShows();


    let completedCount = 0;


    allShows.forEach(show => {

        const watched =
            progress[show.name];


        /*
            Only display shows where
            progress has reached the
            total number of episodes.
        */

        if (
            watched === undefined ||
            watched < show.total
        ) {

            return;

        }


        completedCount++;


        const card =
            document.createElement("div");

        card.className =
            "completed-card";


        /* =================================================
           POSTER
           ================================================= */

        if (show.image) {

            const image =
                document.createElement("img");

            image.src =
                show.image;

            image.alt =
                show.name;

            card.appendChild(
                image
            );

        }


        /* =================================================
           INFO
           ================================================= */

        const info =
            document.createElement("div");

        info.className =
            "completed-info";


        /* TITLE */

        const title =
            document.createElement("h2");

        title.textContent =
            show.name;


        /* EPISODES */

        const episodes =
            document.createElement("p");

        if (show.type === "movie") {

            episodes.textContent =
                "Movie";

        } else {

            episodes.textContent =
                `${show.total} Episodes`;

        }


        /* COMPLETED BADGE */

        const badge =
            document.createElement("div");

        badge.className =
            "badge";

        badge.textContent =
            "✔ Completed";


        /* RATING */

        const rating =
            document.createElement("div");

        rating.className =
            "rating";

        rating.textContent =
            getStarRating(
                ratings[show.name]
            );


        /* RATE BUTTON */

        const rateButton =
            document.createElement("button");

        rateButton.className =
            "rewatch";

        rateButton.textContent =
            ratings[show.name]
                ? "⭐ Change Rating"
                : "⭐ Rate Show";


        rateButton.addEventListener(
            "click",
            function () {

                rateShow(
                    show.name
                );

            }
        );


        /* REWATCH BUTTON */

        const rewatchButton =
            document.createElement("button");

        rewatchButton.className =
            "rewatch";

        rewatchButton.textContent =
            "🔄 Rewatch";


        rewatchButton.addEventListener(
            "click",
            function () {

                rewatchShow(
                    show.name
                );

                loadCompleted();

            }
        );


        /* BUILD CARD */

        info.appendChild(
            title
        );

        info.appendChild(
            episodes
        );

        info.appendChild(
            badge
        );

        info.appendChild(
            rating
        );

        info.appendChild(
            rateButton
        );

        info.appendChild(
            rewatchButton
        );


        card.appendChild(
            info
        );


        container.appendChild(
            card
        );

    });


    /* =================================================
       EMPTY STATE
       ================================================= */

    if (completedCount === 0) {

        container.innerHTML = `

            <div class="empty-completed">

                <h2>
                    Nothing completed yet
                </h2>

                <p>
                    Finish a show and it will
                    automatically appear here.
                </p>

                <a
                    class="home-button"
                    href="index.html"
                >
                    Continue Watching
                </a>

            </div>

        `;

    }

}


/* =========================================================
   LOAD COMPLETED ON PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        loadCompleted();

    }
);
