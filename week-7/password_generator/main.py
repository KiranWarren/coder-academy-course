# Password Generator

# Requirement:
# - Create a strong password
# - Length of the password
# - Uppercase & lowercase string.ascii_letters
# - Numbers string.ascii_digits
# - Symbols (_, .)

from string import ascii_letters, digits, ascii_lowercase, ascii_uppercase
from random import choice
from re import search

# Get length of password as input from the user
def get_password_length_from_user():
    password_length = int(input("Enter password length: "))

    while password_length <= 6:
        password_length = int(input("Please enter a password length larger than 6: "))

    return password_length

def password_combination(password_length):
    if password_length <= 6:
        return ""
    
    # Constant containing valid password characters
    valid_characters = ascii_letters + digits + "._"

    # Create a variable to save password
    password = ""

    # Iterate over the length of the password to get random characters
    for i in range(password_length):
        password += choice(valid_characters)

    return password

def valid_password_using_regex(password):
    if not password:
        print("Password is not valid", password)
        return False
    
    # Using regular expression
    has_uppercase = bool(search(r'[A-Z]', password))
    has_lowercase = bool(search(r'[a-z]', password))
    has_digit = bool(search(r'[0-9]', password))
    has_punctuation = bool(search(r'[_|.]', password))

    if has_uppercase and has_lowercase and has_digit and has_punctuation:
        return True
    
    # print("Password is not valid", password) # For debugging
    return False

def generate_password():
    password_length = get_password_length_from_user()
    while True:
        gen = password_combination(password_length)
        if valid_password_using_regex(gen):
            return gen

# Display password
print(generate_password())