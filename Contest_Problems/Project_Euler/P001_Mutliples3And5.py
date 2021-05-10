
#Step1: Write a loop that goes from 1 to 999 inclusive

'''
for i in range(1,1000,1):
	print(i)
'''

#Step 2: How do I check if a number is a multiple of 3 or 5
#We do this using the % operator If a % b == 0 then a is a multiple of b or b is a factor of a

'''
x = input()
x = int(x)

if x % 3 == 0:
	print(x,"is a factor of 3")
if x % 5 == 0:
	print(x,"is a factor of 5")
'''

#Step 3: We need to check if a number is a factor of 5 or 3
'''
x = input()
x = int(x)

if x % 3 == 0 or x % 5 == 0:
	print(x,"is a factor of 3 and/or 5")

#Step 4: We need to make a sum

total = 0

for i in range(0,1000,1):
	total = total + i

print(total)
'''
def sumMultiplesA()
	
	total = 0

	for i in range(1,10,1):
		if i % 3 == 0 or i % 5 == 0:

			total = total + i

	print(total)

sumMultiples()

'''
In this version we return the value instead of printing
'''

def sumMultiplesB()
	
	total = 0

	for i in range(1,10,1):
		if i % 3 == 0 or i % 5 == 0:

			total = total + i

	return total

result = sumMultiplesB()
print(result)