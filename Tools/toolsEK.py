'''
isEven takes a single integer parameter a >= 0 returning true 
if a is even and false if a is odd
'''
def isEven(a):

	if a % 2 == 0:
		return True

	return False

#Test Code for isEven
print(isEven(0))
print(isEven(10))
print(isEven(9))

for i in range (0, 100, 1):
	print(str(i)+ " is "+ str(isEven(i)))