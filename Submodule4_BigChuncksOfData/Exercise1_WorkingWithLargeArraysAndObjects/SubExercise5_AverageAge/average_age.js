
/* Sub exercise: average age - 5 points

When we press the button for this command, a list of buttons appears. 
The command buttons also remain.
Each of the new buttons has a country name ("Netherlands" for example).
If we then press one of the country buttons, we see a sentence appear 
somewhere on the page with the text "The average person in {country} is {years} old".
To show that sentence we need to calculate the average age for that country.
Round the mean age to whole numbers (18.4999 → 18 and 18.5 → 19). */


let countryData = randomPersonData
                  .filter(person => person.age>17)
                  .map(people => people.region);
countryData = [... new Set(countryData)]
            .sort((country1, country2) => country1 < country2? -1 : 1);

const getAmountPeople = country =>{
    const countPeople = randomPersonData.filter(people => people.region === country);
    const totalAge = countPeople.reduce((sum, curr) => sum + curr.age , 0);
    const avgAge = Math.round(totalAge / countPeople.length);   
    return avgAge  
}

const avrAgeRender = (...avrgArr) =>{
    let avrAgeDiv = document.createElement('div');
    let avrAgeResultDiv = document.createElement('div');
    avrAgeDiv.className = 'avrage_age_div';
    avrAgeResultDiv.className = 'avrage_age_result-div';
    resultsContainer.append(avrAgeDiv, avrAgeResultDiv);
    avrgArr.forEach(item =>{   
        let newCountryBtn = document.createElement('button');
        avrAgeDiv.appendChild(newCountryBtn);
        newCountryBtn.id = 'country-id'
        newCountryBtn.classList.add('country-items', 'something');
        newCountryBtn.innerText = `${item}`;
        newCountryBtn.addEventListener('click', (e)=> {
            const getCountryName = newCountryBtn.innerText;
            const countryAvgAge = getAmountPeople(getCountryName);
            avrAgeResultDiv.innerHTML = `The average age for <span class='avr-item'>${item}</span> is <span class='avr-item'>${countryAvgAge}</span>`;
        });
    });
};

const avrAgeBtn = document.getElementById('average-age');
btnEventCreator(avrAgeBtn, avrAgeRender, countryData);
