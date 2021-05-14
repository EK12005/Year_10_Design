'''
#Approach 1: Finding The Sum Of A Set List Using Recursion
def sumList1(intList):

	if len(intList) == 1:
		return intList[0]
	else:
		return intList[0] + sumList1(intList[1:])

intList = [3,2,4,4,6]
print(sumList1(intList))

'''

#Approach 2: Finding The Sum Of A Set List Using Iteration
def sumList2(intList):

	total = 0

	for i in range(0, len(intList), 1):
		total += intList[i]
	return total

intList = [3,2,4,4,6]
print(sumList2(intList))

