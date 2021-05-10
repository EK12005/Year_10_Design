def findAP():

	temp = input()

	AP = 5 * int(temp) - 400

	print(AP)

	if AP == 100:
		print(0)
	if AP < 100:
		print(1)
	if AP > 100:
		print(-1)

findAP()