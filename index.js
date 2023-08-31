
username = 'Paula';
greeting = 'nice to see you again!'
let saveEl = document.getElementById("save-el");
//something to store data in code - the variable is storing data in code
// intialize the count as 0
let count = 0;
// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")//pass in arguments - data//DOM Document Object Mode;
let welcomeEl = document.getElementById("welcome-el");
console.log(countEl)
// listen for clicks on the increment button
//--> for that we need to create onclick="increment()" attribute in HTML
//--> and then write the increment() function in js
// change the count-el in the HTML to reflect the new count
function increment(){
    // increment the count variable when the button is clicked
  count += 1;
   // set countEl's innerText to the count
  countEl.innerText = count;
    //check if the count is incenmented
  console.log(count);

}
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    //welcomeEl.innerText = username + ', '+ greeting;
    //console.log(welcomeEl);
    counter = " "+ count + ' - ' ;

    saveEl.textContent += counter; // to have previouse count += otherwise you delete previouse count
  //text context, better than inner.text - Node library, developer Mozilla.org
    resetCount()
    count = 0
    console.log(counter)

}
// Function that resets the count to 0
function resetCount(){
    countEl.textContent = 0

}









