def occupiedParking():

	spots = int(input())
	ySpaces = input()
	tSpaces = input()

	counter = 0

	for i in range(0, spots, 1):
		if ySpaces[i] == "C" and tSpaces[i] == "C":
			counter += 1

	print(counter)

occupiedParking()