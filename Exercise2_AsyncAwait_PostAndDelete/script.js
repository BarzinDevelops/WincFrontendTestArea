
// ---------------------------------------------------------------------
/* Part1: assignment 1: Make a list of all available genres and
                        their corresponding IDs in the TheMovieDB
*/
// ---------------------------------------------------------------------
const genresWrapper = document.getElementById('mv-genres-list');
// Function to render each list item (genre name and id) on the page.
const renderGenres = (...items) =>{
        let newListItem = document.createElement('li');
        newListItem.className = "list-item";
        newListItem.textContent = `genre naam: ${items[0]}, id: ${items[1]}`;
        genresWrapper.append(newListItem);   
}

//  Function to generate a list of all available genres (using getData()):
const getMovieGenres = async () =>{
    try {
        const getDataResponse = await getData();
        if(getDataResponse){
            getDataResponse.genres
            .forEach((genre, i) => {               
                renderGenres(...[genre.name, genre.id]);
            })
        }else throw new Error(`There's no data available.`)     
    } catch (error) {
        log(`\n${error.message}`)
    }
};
getMovieGenres();


// ---------------------------------------------------------------------
/* Part1: assignment 2: using and rendering the received data 
                        form getMyFavMoie(): 
*/
// ---------------------------------------------------------------------

const myFavMovie = document.getElementById('my-fav-mv');
const getFavMoieTitle = async () =>{
    try {
        // gets an object(movie_results) of different categorie arrays.
        const myMovieResponse = await getMyFavMovie();
        // returns the title of the favorite movie:
        if(myMovieResponse){
            const myFavMovieTitle = myMovieResponse.movie_results[0].title;
            myFavMovie.textContent = myFavMovieTitle;
        } else throw new Error(`There's no data received. Check the source!`)
    } catch (error) {
        log(`\n${error}\n${error.message}`)
    }
}
getFavMoieTitle();



// ---------------------------------------------------------------------
/* Part1: This render function is used for outputting results of each
          api search to the page, in the right list wrapper */
// ---------------------------------------------------------------------
const renderResults = (pageWrapper,listLength=0, ...resultArr) =>{
    resultArr.forEach((movie, i) => { 
        if(i<=listLength-1){
            let newListItem = document.createElement('li');
            newListItem.className = "list-item";
            newListItem.textContent = movie.title;
            pageWrapper.append(newListItem);
        }              
    });
}

// ---------------------------------------------------------------------
/* Part1: assignment 3: list 10 top rated movies all times 
                        Get top rated movies all time by calling
                        getMyTopRatedAllTime() and render to page: 
*/
// ---------------------------------------------------------------------
const topRatedMoviesWrapper = document.getElementById('top-rated-mv');
const topRatedAllTimesMovies = async () =>{
    try{
        const data = await getMyTopRatedAllTime();
        if(data){
            const resultArr = data.results;
            renderResults(topRatedMoviesWrapper, 10, ...resultArr);
        }
        else throw new Error(`There's no data available.`);  
    } catch (error) {
        log(`\n${error.message}`)
    }
}
topRatedAllTimesMovies();

// ---------------------------------------------------------------------
/* Part1: assignment 4: Create a new list of the best movies (top rated) */
// ---------------------------------------------------------------------
const bestActionMoviesWrapper = document.getElementById('best-action-mv');
const bestActionMovies = async ()=>{
    const resultsBestAction = await getBestActionMovies();
    if(resultsBestAction){
        const resultArr = resultsBestAction.results;
        renderResults(bestActionMoviesWrapper, resultArr.length, ...resultArr);
    }
}
bestActionMovies();


// ---------------------------------------------------------------------
/* Part1: assignment 5: Create a new list with movies from the year 1975. */
// ---------------------------------------------------------------------
const movies75 = document.getElementById('mov-from-1975');
const moviesFrom1975 = async () =>{
    const data = await getMovies1975();
    if(data){
        const resultArr = data.results;
        renderResults(movies75, resultArr.length, ...resultArr);
        log('resultArr: ', resultArr)
    }
    
}
moviesFrom1975()
