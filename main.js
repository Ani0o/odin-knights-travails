import knightMoves from "./knightMoves.js";

const path = knightMoves([0, 0], [7, 7]);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

for (let i = path.length - 1; i >= 0; i--) {
  console.log(` [${path[i]}]`);
}
