# Challenge: Given a string "s" consisting of words and spaces, return the length of the last word in the string.
# A word is a maximal substring consisting of non-space characters only.


def length_of_last_word(s):
    # Split the string out into substrings (splitting by spaces) and store in a list
    substring_list = s.split()

    # Check if no string was entered--empty list
    if bool(substring_list) == False:
        # Output that no string was entered so no meaningful result could be found.
        print("No string was entered!")

    else:
        # Find the length of the last substring in the list
        substring_length = len(substring_list[-1])

        # Output the last substring and its length to the user
        print(
            f"The last word in the string is '{substring_list[-1]}' and has a length of {substring_length} characters."
        )


# Get a string from the user and store in string variable 's'
s = input("Enter a string: ")

# Call the function and run with 's' as argument
length_of_last_word(s)
