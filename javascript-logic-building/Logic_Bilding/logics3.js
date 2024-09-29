    // write a function that return the reverse of a string 

/// // 1 /// ///

function reverseString(s){
   return s.split('').reverse().join('')
}
 const result = reverseString("keshav")
console.log(result);


/// ///  2  // /// 

function reverseString1(s){
    if(typeof reverseString1 !== "string"){
        throw new Error("Only strings")
    }
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
           reversed += s[i];   
    }
    return reversed;
}
const result1 = reverseString1("keshav");
console.log(result1);
