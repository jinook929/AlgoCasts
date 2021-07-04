def palindrome(str):
    return str == str[::-1]

print(palindrome('aba'))
print(palindrome('aba '))
print(palindrome('greetings'))
print(palindrome('1000000001'))
print(palindrome('Fish hsif'))
print(palindrome('pennep'))