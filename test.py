array = [5, 1, 22, 25, 6, -1, 8, 10]

def isValidSubsequence(array, sequence):
  # Write your code here.
  counter = 0
  for num in sequence:
    for i in range(len(array)):
      if num == array[i]:
        array = array[i + 1:];
        counter += 1
        break
  return counter == len(sequence)

sequence = [1, 6, -1, 10]
print(isValidSubsequence(array, sequence))
sequence = [1, 6, -1]
print(isValidSubsequence(array, sequence))
sequence = [5, 1, 6, -1, 10]
print(isValidSubsequence(array, sequence))
sequence = [5, 1, 22, 25, 6, -1, 8, 10, 7]
print(isValidSubsequence(array, sequence))