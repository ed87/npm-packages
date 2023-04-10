const sum = require('./sum');
test ('add 1 + 2 equal to 3', ()=>{
         expect (sum ( 1,2)).toBe(3);

});

test ('add 0 + 100 equal to 100', ()=>{
    expect (sum ( 0,100)).toBe(100);

});