def anagrams(strA, strB):
    import re
    return "".join(sorted(re.sub(r"[^A-Za-z]", "", strA.lower()))) == "".join(sorted(re.sub(r"[^A-Za-z]", "", strB.lower())))

print(anagrams('Whoa! Hi!', 'Hi! Whoa!'))