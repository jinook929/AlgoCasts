def capitalize(str):
    words = str.split()
    tmp = []
    result = ""
    for word in words:
        tmp.append(f"{word[0].upper()}{word[1:]}")
        result += f"{word[0].upper()}{word[1:]} "
    return result.strip()

print(capitalize('hi there, how is it going?'))
print(capitalize('i love breakfast at bill miller bbq'))