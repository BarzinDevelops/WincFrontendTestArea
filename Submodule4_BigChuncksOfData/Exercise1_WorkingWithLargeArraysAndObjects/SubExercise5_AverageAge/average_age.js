
/* Sub exercise: average age - 5 points

When we press the button for this command, a list of buttons appears. 
The command buttons also remain.
Each of the new buttons has a country name ("Netherlands" for example).
If we then press one of the country buttons, we see a sentence appear 
somewhere on the page with the text "The average person in {country} is {years} old".
To show that sentence we need to calculate the average age for that country.
Round the mean age to whole numbers (18.4999 → 18 and 18.5 → 19). */



// let newData = [{'region': "Slovakia", 'age': [22]}]
// let newData = {}
let newData = []
randomPersonData.forEach(({region, age}) => {
    // log(region, age)
   if(newData.length > 0){
    newData.forEach(element => {
        if (element.region === region) element.age.push(age)
        else [...newData, { 'region' : region, 'age' : [age] }]                       
    }); 
   } //else [...newData, { 'region' : region, 'age' : [age] }]
    
});

log('newdata', newData)
// log('test', test)
// log('getData', getData)





// const avrAgeBtn = document.getElementById('average-age');
// btnEventCreator(avrAgeBtn, avrAgeRender, avrAgeResults);