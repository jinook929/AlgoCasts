def chunk(arr, size):
    result = []
    while arr != []:
        result.append(arr[0:size])
        for i in range(size):
            if len(arr) > 0:
                del arr[0]
    return result

print(chunk([1, 2, 3, 4], 2))
print(chunk([1, 2, 3, 4, 5], 2))
print(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
print(chunk([1, 2, 3, 4, 5], 10))