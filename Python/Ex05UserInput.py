# input() = A function that prompts the user to enter data. Returns the entered data as a string.
# name = input("What is UR Name: ");
# age = int(input("How old are you?: ")) # Inputs returns string. U should type cast and do the modifications
# print(f"Hello {name}!")
# age = age + 1
# print(f"U R {age} years old")

#Exercise 1: Rectangle calculator.
# length = float(input("Enter the length: "))
# width = float(input("Enter the width: "))
# area = length * width
# print(f"The area of rectangle is {area} cm²") # Windows: Num-lock + Alt + 0178 for superscript

#Exercise 2: Shopping cart
item = input("What item would U want to buy?: ")
price = float(input("What is the price"))
quantity = int(input("How many would you like: "))

total = price * quantity
print(f"U have bought {quantity} x {item}/s")
print(f"The total bill is {total}")

#Exercise 3: Madlibs Game
# word game where u create a story by filling in blanks with randon words
adjective1 = input("Enter an adjective (Description): ")
noun1 = input("Enter a noun (person, place or thing): ")
adjective2 = input("Enter an adjective (Description): ")
verb1 = input("Enter a verb ending with 'ing': ")
adjective3 = input("Enter an adjective (Description): ")
print(f"Today I went to a {adjective1} zoo.")
print(f"In the exhibit, I saw a {noun1}.")
print(f"{noun1} was {adjective2} and {verb1}.")
print(f"I was {adjective3}!")
