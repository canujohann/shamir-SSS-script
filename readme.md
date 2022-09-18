# How to use it

## Prepare environment

Rum `npm i` to install the packages.

## Encrypt a string with shamir

Call "shamir-encrypt" with the proper parameters :

```
node shamir-encrypt.js --secret="mysecret" --shares=5 --threshold=4
```

> Only "secret" is mandatory. By default, 5 shares with a threshold of 3 will be used.

## Decrypt a string with shamir

Call "shamir-decrypt" with the proper parameters :

```
node shamir-decrypt.js --shares=share1,share2,share3
```

> Shares need to be separated with "," in the arguments !

# TODO

This code is for testing purpose. Feel free to add tests, or enhance the code ;-)
