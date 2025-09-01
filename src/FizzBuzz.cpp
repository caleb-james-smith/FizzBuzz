// FizzBuzz.cpp

#include <iostream>

void runFizzBuzz(int n) {
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
    int n;
    std::cout << "Please enter a positive integer (n > 0): ";
    std::cin >> n;
    std::cout << "n = " << n << std::endl;
    runFizzBuzz(n);
    return 0;
}
