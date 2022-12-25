const letter = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","w","x","j","k","z"];

const number = [1,2,3,4,5,6,7,8,9,0];

const symbol = ["@","#","§","*","ç"];

const final = letter + number + symbol ;


function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);




    
  }
  
  const arr = final;
 let one =  getMultipleRandom(arr, 25); //change number to change password lenght
  let finale = one;
console.table(finale)
// Create element:
const para = document.createElement("p");
para.innerText = finale;

// Append to body:
document.body.appendChild(para);

