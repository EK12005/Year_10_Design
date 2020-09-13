#TOOL 1
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


#TOOL 2
#CODINGBAT - missing_char

#APPROACH 1
#This approach highlights your understanding of string construction and substring

def missing_char(str, n):
  newStr = ""
  newStr = str[0:n] + str[n + 1: len(str)]
  return newStr
  
#APPROACH 2: Python Specific Approach
#This approach we have used python specific notation

  newStr = "" #Create an empty string
  newStr = str[0:n] + str[n+1:] #used the [a:] notation to grab from a to end of string
  return newStr
 
#APPROACH 3: One Liner

  return str[0:n] + str[n+1:]
