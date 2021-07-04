def maxChar(str):
    chars = {}
    for ch in str:
        # chars[ch] = chars[ch] + 1 || 1
        # if ch in chars:
        if chars.get(ch):
            chars[ch] += 1
        else:
            chars[ch] = 1
    return max(chars, key=chars.get)

print(maxChar("abacgbda"))
print(maxChar("a"))
print(maxChar("abcdefghijklmnaaaaa"))
print(maxChar("ab1c1d1e1f1g1"))
