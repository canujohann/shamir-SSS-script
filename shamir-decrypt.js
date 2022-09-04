import secrets from "secrets.js-grempe";
import minimist from "minimist";

// extract arguments from CLI
const argv = minimist(process.argv.slice(2));
const sharesArg = argv.shares || "";
const shares = sharesArg.split(",");

// Combine shares to get the original secret
let comb = secrets.combine(shares);
comb = secrets.hex2str(comb);

console.log(`Secret value is ${comb}`);
