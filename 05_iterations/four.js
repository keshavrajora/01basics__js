
const programmings = ["js", "cpp", "rb", "swift", "python", "c", "go", "java", "c#", "ts"];

for (const [key,value] of programmings.entries()) {
    // console.log(key, ":-", value);
    
}


// for in loops

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple",
}

for (const [key, value] in Object.entries (myObject)) {
    // console.log(key, ":-", value);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}


const programming = ["js", "cpp", "rb", "swift", "python", "c", "go", "java", "c#", "ts"];

for (const key in programming) {
    // console.log(programming[key]);
    
}

