def sum_square_differenceA(n):

	totalA = 0
	totalB = 0

	for i in range(1,n + 1,1):
		totalA = totalA + i*i
		totalB = totalB + i

	totalB = totalB * totalB

	difference = totalB - totalA
	print(difference)

sum_square_difference(10)