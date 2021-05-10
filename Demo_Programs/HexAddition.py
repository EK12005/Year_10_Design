def addHex(a,b):

	ah = int(a)

	bh = int(b)

	sum = ah + bh

	result = hex(sum)

	return result

x = addHex("111","010")
print(x)