# FizzBuzz

Solutions to FizzBuzz in various programming languages.

## Problem Statement

Write a program that takes a user's input and prints the numbers from one to the number the user entered.
However, for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

## Running Solutions

First, clone this repository.
```
git clone https://github.com/caleb-james-smith/FizzBuzz.git
```

### Web App

The web app code is stored in the directory `web_app`.
Open the file `FizzBuzz.html` in a browser (use the full path).
```
open /example/path/FizzBuzz/web_app/FizzBuzz.html
```
On the web page, enter a positive integer and click the `Run` button.

### Python

Running FizzBuzz in Python 3 (Python 2 not supported):
```
python3 python/FizzBuzz.py
```

### C++

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

### JavaScript

Running FizzBuzz in JavaScript:
```
npm install
node javascript/FizzBuzz.js
```

If you get the following error:
```
node javascript/FizzBuzz.js

node: /usr/lib/arm-linux-gnueabihf/libstdc++.so.6: version `GLIBCXX_3.4.26' not found (required by node)
```
Then you should install an use Node v16:
```
nvm install 16
nvm use 16
```
which is compatible with GCC 8 as documented [here](https://superuser.com/a/1922572/3040726) and [here](https://stackoverflow.com/a/79752025/13520993).

If you get the following error:
```
node javascript/FizzBuzz.js

Error: Cannot find module 'prompt-sync'
```
Then you should install the required packages using npm:
```
npm install
```
Alternatively, you can directly install prompt-sync using npm:
```
npm install prompt-sync
```
