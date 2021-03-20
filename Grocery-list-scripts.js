let firstItem = prompt('Enter the first grocery item:');
let firstItemAmount = prompt(`How much ${firstItem} would you like?`);

let secondItem = prompt('Enter the second grocery item:');
let secondItemAmount = prompt(`How much ${secondItem} would you like?`);

let thirdItem = prompt('Enter the third grocery item:');
let thirdItemAmount = prompt(`How much ${thirdItem} would you like?`);

let totalAmount = (Number(firstItemAmount) + Number(secondItemAmount) + Number(thirdItemAmount));

console.log(`
Shopping List:
${firstItemAmount} ${firstItem}
${secondItemAmount} ${secondItem}
${thirdItemAmount} ${thirdItem}
Total number of items: ${totalAmount}`);

Part 2
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
let newTwister = tongueTwister.toLowerCase();
console.log(newTwister);


let panagram = "The quick brown fox jumps over the lazy dog.";
let index = panagram.indexOf("fox");
console.log(panagram.charAt(index).toUpperCase());


let anotherPanagram = "The five boxing wizards jump quickly.";
console.log(anotherPanagram[10]);






