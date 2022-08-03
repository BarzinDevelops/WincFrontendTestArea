const log = console.log;

// In the api-client.js create the variable API_KEY with your API key as value.
const API_KEY = "521de25bcc6e130069084c31dced4f21";
const getData = async () =>{
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
    try {
        const res = await fetch(apiUrl+API_KEY);
        if (!res.ok) throw new Error(`Status Code: ${res.status} ${res.message ? res.message : ''}\nProblem getting movie genres data.`)
        else {
             const resJSON = await res.json();
             return resJSON;
        } 
    } catch (error) {
        log(`Something went wrong!\n${error.message}`)
    }
}


/* 2. You have now learned how to retrieve 1 specific movie. Finally, add 1 <h1> to your HTML and use this to show the title of your all-time favorite movie. */
// create function that gets a movie from TMDB based on specific IMDB id:
const movie_imdb_id = 'tt0829150'
const ENDPOINT = `https://api.themoviedb.org/3/find/${movie_imdb_id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;

const getMyFavMovie = async () => {
    try {
            const fetchedData = await fetch(ENDPOINT);

            if (!fetchedData.ok) {
                throw new Error(`Status Code: ${fetchedData.status} ${fetchedData.message ? fetchedData.message : ''}\nProblem getting movie genres data.`);
            }
            else {
                const fetchedDataJSON = await fetchedData.json();
                return fetchedDataJSON;
            } 
        } catch (error) {
            log(error.message);
        }        
}


/* 3. Make a new list of 10 Top Rated Movies:
    You can choose the context yourself: all-time (default), 
    of the month (extra params?), or 2019 (extra params?).*/

const TOP_RATED_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`;

const getMyTopRatedAllTime = async () =>{
    
    try {
        const topRated = await fetch(TOP_RATED_ENDPOINT);
        if(!topRated.ok) throw new Error('Endpoint fetching issue.');
        else {
            const topRatedJSON = await topRated.json();
            if(topRatedJSON) {
                return topRatedJSON;
            } else throw new Error('JSON data issue.');
        }
    } catch (error) {
        log(error)
        console.error("Catched error: ", error.message ? error.message : error)
    }    
}


/* 4. Get the best movies (top rated) within the genre "action", 
      using TMDB API (Discover query). */

const TOP_RATED_ACTION_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28&sort_by=vote_average.desc&vote_count.gte=25000`;

const getBestActionMovies = async () =>{
    
    try {
        const bestAction = await fetch(TOP_RATED_ACTION_ENDPOINT);
        if(!bestAction.ok) throw new Error('Endpoint fetching issue.');
        else {
            const bestActionJSON = await bestAction.json();
            if(bestActionJSON) {
                return bestActionJSON;
            } else throw new Error('JSON data issue.');
        }
    } catch (error) {
        log(error)
        console.error("Catched error: ", error.message ? error.message : error)
    }    
}

/* 5. Get movies from the year 1975 , using TMDB API (Discover query).*/
const MOVIES75_ACTION_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&primary_release_year=1975`;
const getMovies1975 = async ()=>{
    try {
        const mv75Apifetch = await fetch(MOVIES75_ACTION_ENDPOINT);
        if(!mv75Apifetch.ok) throw new Error('Endpoint fetching issue.');
        else {
            const mv75JSON = await mv75Apifetch.json();
            if(mv75JSON) {
                return mv75JSON;
            } else throw new Error('JSON data issue.');
        }
    } catch (error) {
        console.error("Catched error: ", error.message ? error.message : error)
    }    
}