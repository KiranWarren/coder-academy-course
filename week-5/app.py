# 1 First program
# print("Hello World")


# 2 Drawing a shape
# print("   /|")
# print("  / |")
# print(" /  |")
# print("/___|")


# 3 Introduction to using variables
# character_name = "Tom"
# character_age = "58"
# print("There once was a man named " + character_name + ", ")
# print("he was " + character_age + " years old. ")

# character_name = "Mike"
# print("He really liked the name " + character_name + ", ")
# print("but didn't like being " + character_age + ".")

    # Main variable types:
# string_variable = "string"
# integer_variable = 25
# boolean_variable = True


# 4 String lesson
# print("Coder\n\"Academy\"")

# phrase = "Hello there"
# print(phrase + " my friend")
# print(phrase.lower())
# print(phrase.upper())
# print(phrase.upper().isupper())
# print(len(phrase))
    #String indexed starting with 0--first character is at 0 position
# print(phrase[0])
    #Find parameter within string
    #Finds first instance of "e" within "Hello there"
# print(phrase.index("t"))
    #Replace function
# print(phrase.replace("Hello", "Goodbye"))


# 5 Integer/Number Lesson

    # Importing math module
# from math import *

# print((3+4.5)*3)
    # Modulo operator - remainder from division
    # E.g. 26 % 3 = 24/3 + 2/3 --24 divides cleanly with 2 remainder
# print(26 % 3)

# my_num = -5
    # Absolute value
# print(abs(my_num))
    # Power function
    # E.g. 3 ^ 2
# print(pow(3, 2))
    # Min and max
# print(min(4,5,6,3,7,2))
# print(max(4,5,6,3,7,2))
    # Rounding numbers to closest integer
# print(round(6.54545435))
    # Truncating function and rounding up
# print(floor(6.54545435))
# print(ceil(6.54545435))
    # Square root function
# print(sqrt(49))


# 6 Getting input from User

# user_name = input("Enter your name: ")
# user_age = input("Enter your age: ")
# print("Hello, " + user_name + ". :) You are " + user_age + " years old.")

# 7 Calculator program

    # Input from user is a string by default
    # Convert input string: int() -> whole numbers only, float() -> any number inc. decimals
# num1 = input("Enter first value: ")
# num2 = input("Enter second value: ")
# num_result = float(num1) + float(num2)
# print(num_result)

# 8 Madlibs game

color = input("Enter a color: ")
plural_noun = input("Enter a plural noun: ")
celebrity = input("Enter a celebrity: ")

print("Roses are " + color + ".")
print(plural_noun + " are blue.")
print("I love " + celebrity + ".")
