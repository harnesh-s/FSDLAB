def firstUniqChar(s: str) -> int:
    count = {}
    for ch in s:
        count[ch] = count.get(ch, 0) + 1
    for i, ch in enumerate(s):
        if count[ch] == 1:
            return i
    return -1

# Example 1
print(firstUniqChar("leetcode"))  # Output: 0
# Example 2
print(firstUniqChar("aabbcc"))    # Output: -1


def isPalindrome(s: str) -> bool:
    clean = "".join(ch.lower() for ch in s if ch.isalnum())
    return clean == clean[::-1]

# Example 1
print(isPalindrome("A man, a plan, a canal: Panama"))  # Output: True
# Example 2
print(isPalindrome("race a car"))  # Output: False


def reverseString(s: list[str]) -> None:
    # Two-pointer approach
    i, j = 0, len(s) - 1
    while i < j:
        s[i], s[j] = s[j], s[i]
        i += 1
        j -= 1
    # In-place modification, no return

# Example 1
arr1 = ["h","e","l","l","o"]
reverseString(arr1)
print(arr1)  # Output: ["o","l","l","e","h"]

# Example 2
arr2 = ["H","a","n","n","a","h"]
reverseString(arr2)
print(arr2)  # Output: ["h","a","n","n","a","H"]


def fizzBuzz(n: int) -> list[str]:
    result = []
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result

# Example 1
print(fizzBuzz(3))  # Output: ["1","2","Fizz"]

# Example 2
print(fizzBuzz(5))  # Output: ["1","2","Fizz","4","Buzz"]


def removeElement(nums: list[int], val: int) -> int:
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k

# Example
nums = [3,2,2,3]
length = removeElement(nums, 3)
print(length)  # Output: 2
print(nums)    # Updated cart: [2,2,_,_]
