def calculateGroup():
	first = input()
	second = input()
	third = input()
	fourth = input()
	fifth = input()
	sixth = input()

	win_counter = 0

	if first == "W":
		win_counter = win_counter + 1

	if second == "W":
		win_counter = win_counter + 1

	if third == "W":
		win_counter = win_counter + 1

	if fourth == "W":
		win_counter = win_counter + 1

	if fifth == "W":
		win_counter = win_counter + 1

	if sixth == "W":
		win_counter = win_counter + 1

	if win_counter == 0:
		print("-1")

	if 0 < win_counter < 3:
		print("3")

	if 2 < win_counter < 5:
		print("2")

	if 4 < win_counter < 7:
		print("1")

calculateGroup()