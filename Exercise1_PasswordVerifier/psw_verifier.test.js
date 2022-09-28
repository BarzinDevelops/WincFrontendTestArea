const log = console.log; // preference for writing shorter syntax for console.log()
//----------------------------------------------------------------------------------
const myFunc = require('./psw_verifier');

toTestValue = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null];

/* test(`1.Password '${ toTestValue[0] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[0])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[0]));
});
test(`1.Password '${ toTestValue[1] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[1])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[1]));
});
test(`1.Password '${ toTestValue[2] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[2])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[2]));
});
test(`1.Password '${ toTestValue[3] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[3])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[3]));
});
test(`1.Password '${ toTestValue[4] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[4])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[4]));
});
test(`1.Password '${ toTestValue[5] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[5])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[5]));
});
test(`1.Password '${ toTestValue[6] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[6])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[6]));
});
test(`1.Password '${ toTestValue[7] }' => is shorter than 9 characters?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[7])).toBeLessThan(9);
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[7]));
}); */

test(`1.Password '${ toTestValue[0] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[0])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[0]));
});
test(`1.Password '${ toTestValue[1] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[1])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[1]));
});
test(`1.Password '${ toTestValue[2] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[2])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[2]));
});
test(`1.Password '${ toTestValue[3] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[3])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[3]));
});
test(`1.Password '${ toTestValue[4] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[4])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[4]));
});
test(`1.Password '${ toTestValue[5] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[5])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[5]));
});
test(`1.Password '${ toTestValue[6] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[6])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[6]));
});
test(`1.Password '${ toTestValue[7] }' => is not null?: `, ()=>{
    expect(myFunc.lessThan9Chars(toTestValue[7])).not.toBeNull();
    log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[7]));
});





/* 
test('2.Password is not null:', ()=>{

});
test('3.Password has 1 or more uppercase characters: ', ()=>{

});
test('4.Password has 1 or more lowercase characters: ', ()=>{

});
test('5.Password has 1 or more digits: ', ()=>{

});
 */