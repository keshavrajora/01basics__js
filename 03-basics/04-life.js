// Immediately Invoked Function Expression (IIFE)

(function by(){
    // nameed IIFE
    console.log(`DB CONNECTED`);
})();

((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})(`keshav`)
