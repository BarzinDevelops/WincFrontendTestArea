const log = console.log;
const titleOfLists = document.createElement('h1');
const resultsContainer = document.getElementById('results');

const countryListBtn = document.getElementById('country-list');



/* Sub-exercise: country list - 1 point
    List all countries, sorted by country name. */

// Get county of eacht person in randomPersonData array:
const getCountries = randomPersonData.map(person => person.region);

// return an array of countries with no doubles (using Set()): 
const countryList = [...new Set(getCountries)].sort();

const render = (arrayToRender, ...myRest) => {
    arrayToRender.forEach(element => {
        const newItem = document.createElement('li');
        newItem.textContent = element;
        resultsContainer.appendChild(newItem);
    });
}
countryListBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = countryListBtn.innerText;
    resultsContainer.append(titleOfLists);
    render(countryList);
});
// -------------------------------------------------------------//
