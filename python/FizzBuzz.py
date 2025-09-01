# FizzBuzz.py

def main():
    print("It's time for FizzBuzz!")
    n = int(input("Please enter a positive integer (n > 0): "))
    print(f"n = {n}")
    runFizzBuzz(n)

def runFizzBuzz(n):
    for i in range(1, n+1):
        message = ""
        if i % 3 == 0:
            message += "Fizz"
        if i % 5 == 0:
            message += "Buzz"
        if not message:
            message = str(i)
        print(message)

if __name__ == "__main__":
    main()
