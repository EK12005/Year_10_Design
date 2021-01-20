def calculateTime():

	val = input()	

	h = int(val[0:2])

	m = (val[3:5])

	timeOfDay = "AM"

	if (12 <= h <= 23):
		timeOfDay = "PM"
		h = h - 12

	if (h == 0):
		h = 12

	print(str(h) + ":" + m + " " + timeOfDay)

for i in range(0,3,1):
	calculateTime()