// document.getElementById("owl").onclick = () => {
//   alert("owl clicked");
// };

// const img = document.getElementById("images");
// const owl = document.getElementById("owl");
// const google = document.getElementById("google");
const image = document.querySelector('#images');

// img.addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside the ul");

//     // alert("owl clicked");
//   },
//   true
// );
// owl.addEventListener(
//   "click",
//   (e) => {
//     console.log("owl clicked");
//     e.stopPropagation();
//     // alert("owl clicked");
//   },
//   true
// );
// google.addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   true
// );

image.addEventListener("click" , (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName){
        console.log(e,target.id);
        
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
 
    
});
//removeIt.parentNode.removeChild(removeIt)

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


