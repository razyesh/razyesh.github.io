"""
19. Write a Python program to create Fibonacci series upto n using Lambda.
"""

"""
lambda function to create fibonacci series of n
"""
from functools import reduce
from utils import get_integer

fibo = (0, 1)

n = get_integer()

for i in range(n):
    fibo += (reduce(lambda a, b: a + b, fibo[-2:]), )

result = fibo[:n]
print(result)