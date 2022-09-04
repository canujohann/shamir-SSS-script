import secrets from "secrets.js-grempe";
import minimist from "minimist";

const DEFAULT_SHARES_NUMBER = 5;
const DEFAULT_THRESHOLD_NUMBER = 3;

// extract arguments from CLI
const argv = minimist(process.argv.slice(2));

const sharesNumber = argv.shares || DEFAULT_SHARES_NUMBER;
const threshold = argv.threshold || DEFAULT_THRESHOLD_NUMBER;
const secret = argv.secret || "secret";

// Basic validation
if (threshold > sharesNumber) {
  console.error("threshold cannot be higher than shares");
  process.exit(0);
}

// Need to transform string into hexa
const key = secrets.str2hex(secret); // => hex string

// Split into shares with a threshold
const shares = secrets.share(key, sharesNumber, threshold);

console.log("shares information are as below:");
shares.forEach((share, index) => console.log(`#${index + 1}: ${share}`));
