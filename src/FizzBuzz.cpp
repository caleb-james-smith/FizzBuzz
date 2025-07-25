// FizzBuzz.cpp

#include <iostream>

void FizzBuzz(int n) {
    for (int i = 1; i <= n; ++i) {
        if (i % 3 == 0 or i % 5 == 0) {
            if (i % 3 == 0) {
                std::cout << "Fizz";
            }
            if (i % 5 == 0) {
                std::cout << "Buzz";
            }
        } else {
            std::cout << i;
        }
        std::cout << std::endl;
    }
}

int main() {
    std::cout << "It's time for FizzBuzz!" << std::endl;
    int n = 30;
    FizzBuzz(n);
    return 0;
}

