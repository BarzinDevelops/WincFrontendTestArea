
/* Sub-exercise 3: old credit cards - 4 points
    Some people's credit card is about to expire, 
    we're going to call them to warn them.

    Make a list of people:
    show the following data per person
        first name Last Name
        phone number
        credit card number
        expiration date
        The list should contain adults only.

    The expiration date must be in the future (this year).

    The expiration date must be within the next year.
    Sort the list so that the fastest expiring credit cards are at the top.
    Read here about how to get the current date. Your script should also work properly in 2 months.
*/

const customSelectedPeople = peopleData => {
    const date = new Date();
    const currentYear = Number(date.getFullYear().toString().substring(2));
    // log('current year', currentYear, typeof currentYear);
    const currentMonth = date.getMonth();
    // log('current month', currentMonth, typeof currentMonth);
    const nexYear = currentYear + 1;
    let counter = 0;
    let cc_exp_year = null;
    let cc_exp_month = null;
    let newMatches = []
    let newPeopleData = null;
    return peopleData
            .filter(person => person.age >= 18)
            .filter(person => {
                cc_exp_year = Number(person.credit_card.expiration.split('/')[1])
                cc_exp_month = Number(person.credit_card.expiration.split('/')[0])
                if(currentYear <= cc_exp_year && cc_exp_year <= (nexYear) ){
                    counter++
                    if(cc_exp_year == currentYear && cc_exp_month > currentMonth){
                        // log(`cc_exp_year == currentYear:`, cc_exp_year == currentYear, cc_exp_year);
                        // log(`cc_exp_month > currentMonth:`, cc_exp_month > currentMonth, cc_exp_month);
                        // log(`cardYear ${cc_exp_year}, cardMonth ${cc_exp_month}`);
                        // newMatches = [...newMatches, cc]
                        person.exp_month = cc_exp_month;
                        // cc_exp_month = cc_exp_month
                        log('Person type of exp_month', typeof person.exp_month)
                        return person
                    } 
                }
            })      
            // .map(person => [...newMatches, person.name, person.credit_card.expiration, person.exp_month])      
            // .map(person => [...newMatches, person.name, person.credit_card.expiration, person.exp_month])
            
}

// objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))

// log('testing results of customSelectedPeople function:\n', customSelectedPeople(randomPersonData));

const resultOfSelection = customSelectedPeople(randomPersonData);
log(`UnSorted -> resultOfSelection:`, resultOfSelection);


const sortOnExpirationDate = (card1, card2) => card1.exp_month < card2.exp_month ? 1 : -1;

log(`Sorted -> resultOfSelection:`, resultOfSelection.sort(sortOnExpirationDate));


const renderToPage = (...selectedPeople) => {
    log('selectedPeople', selectedPeople)
    selectedPeople.forEach(person => {
     
        const persContainer = document.createElement('div');
        persContainer.classList.add('person-card');
        resultsContainer.appendChild(persContainer);

        const name = document.createElement('li');
        name.textContent = `Name: ${person.name}`;
        name.style.color = 'purple';

        const surname = document.createElement('li');
        surname.textContent = `Surname: ${person.surname}`;
        surname.style.color = 'blue';

        const age = document.createElement('li');
        age.textContent = `Age: ${person.age}`;
        age.style.color = 'purple';

        const phone_number = document.createElement('li');
        phone_number.textContent = `Phone-number: ${person.phone}`;
        phone_number.style.color = 'blue';

        const creditcard_number = document.createElement('li');
        creditcard_number.textContent = `Creditcard number: ${person.credit_card.number}`;
        creditcard_number.style.color = 'purple';

        const creditcard_expiration_date = document.createElement('li');
        creditcard_expiration_date.textContent = `Creditcard expiration date: ${person.credit_card.expiration}`;
        creditcard_expiration_date.style.color = 'blue';
        
        persContainer.appendChild(name);
        persContainer.appendChild(surname);
        persContainer.appendChild(age);
        persContainer.appendChild(phone_number);
        persContainer.appendChild(creditcard_number);
        persContainer.appendChild(creditcard_expiration_date);

    });
};

const oldCreditCardBtn = document.getElementById('old-creditcard');
oldCreditCardBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = oldCreditCardBtn.innerText;
    resultsContainer.appendChild(titleOfLists);
    renderToPage(...customSelectedPeople(randomPersonData));
});
