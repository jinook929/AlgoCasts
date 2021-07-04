def fizzBuzz(n):
    for i in range(n):
        currentNum = i + 1
        if currentNum % 3 == 0 and currentNum % 5 == 0:
            print('fizzbuzz')
        elif currentNum % 3 == 0:
            print('fizz')
        elif currentNum % 5 == 0:
            print('buzz')
        else:
            print(currentNum)

fizzBuzz(17)