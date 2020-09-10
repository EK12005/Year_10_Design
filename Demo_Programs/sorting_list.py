#list has a length of 7 and indexes 0-6
list = [3, 4, 5, 2, 6, 7]
print(list)
list.sort()
print(list)

'''
Question:
How many functions am I using in this program?
	2

Question:
What are the names of the functions?
	print is a function
	sort is a function

What is the difference between print and sort?
	print is a static method meaning it is called by itself
	sort is an instance method meaning it is called with an instance
'''

str = "Paul"
str.upper()
print(str)

#Take Away:
# When talking about functions always ask yourself
#	1. What is the name of the function
#`	2. What does the function take - parameters (think of type)
#	3. Is the function called with an implied object (uses the . notation)
#	4. What does the function return