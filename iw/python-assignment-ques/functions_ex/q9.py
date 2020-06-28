"""
9. Write a Python function that takes a number as a parameter and check the
number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 and that
has no positive divisors other than 1 and itself.
"""
from utils import get_integer


def check_prime(n):
    """
    function to check whether the number n is prime or not
    :param n: any number
    :return: prime if prime else not prime
    """
    flag = 0
    for i in range(2, n):
        if n % i == 0:
            flag += 1

    if flag == 0:
        return "Prime"
    else:
        return "Not Prime"


if __name__ == "__main__":
    n = get_integer()
    result = check_prime(n)
    print(result)