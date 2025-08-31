# FizzBuzz

Solutions to FizzBuzz in various programming languages.

## Problem Statement

Write a program that takes a user's input and prints the numbers from one to the number the user entered.
However, for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

## Running Solutions

Running FizzBuzz in Python 3 (Python 2 not supported):
```
python3 python/FizzBuzz.py
```

Running FizzBuzz in C++ with GCC version 10 and later:
```
mkdir -p bin
g++ --std=c++20 -o bin/FizzBuzz src/FizzBuzz.cpp
./bin/FizzBuzz
```

Running FizzBuzz in C++ with GCC version 9 and earlier:
```
mkdir -p bin
g++ --std=c++2a -o bin/FizzBuzz src/FizzBuzz.cpp
./bin/FizzBuzz
```

Running FizzBuzz in JavaScript:
```
node javascript/FizzBuzz.js
```

If you get the following error when running FizzBuzz in JavaScript with node:
```
node javascript/FizzBuzz.js

Error: Cannot find module 'prompt-sync'
```
Then you need to install prompt-sync using npm:
```
npm install prompt-sync
```
