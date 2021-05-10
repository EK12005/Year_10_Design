def addBinary(a,b):

	ai = int(a,2)

	bi = int(b,2)

	sum = ai + bi

	result = bin(sum)

	return result

x = addBinary("111","010")
print(x)