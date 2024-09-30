// Write a function that generates and prints a multiplication table for a given number up to a specified range.

function table1() {
  for (let i = 1; i <= 10; i++) {
    for (let b = 1; b <= 10; b++) {
      console.log(i, "*", b, "=", i * b);
    }
  }
}
table1();

////////////// or //////////////////

function table2(tableOf, tableTill){
    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${i * tableOf}`);
        
        
    }
}

table2(4,10)

/////////////// or /////////////

function table3(tableOf, tableTill){
for(let i = tableOf; i <= tableOf * tableTill; i = i+ tableOf){
    console.log(i);
    
}
}
table3(8, 20)