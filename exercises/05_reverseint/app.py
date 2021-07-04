def reverseInt(n):
    string = str(n)[::-1]
    # print(len(string))
    if string[len(string) - 1] == "-":
        return f"-{string[0:len(string) - 1]}"
    else:
        return string

print(reverseInt(0))
print(reverseInt(15))
print(reverseInt(2359))
print(reverseInt(-5))
print(reverseInt(-15))
print(reverseInt(-2359))
