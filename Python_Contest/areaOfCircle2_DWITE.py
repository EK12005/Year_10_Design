import math

#Contest Recommendation - Define Function

def areaOfCircle():

	#Casting Types - Changing the type

	x1 = input()
	x1 = float(x1)

	y1 = input()
	y1 = float(y1)

	x2 = input()
	x2 = float(x2)
	
	y2 = input()
	y2 = float(y2)

	r = ((y2 - y1)**2 + (x2 - x1)**2)**(1/2)

	a = 3.14159*r**2

	print(a)

areaOfCircle()

