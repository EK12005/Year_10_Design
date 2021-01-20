import math

#Don't print out anything except for the required output


#Strategy: Always start of by setting your inputs if possible
#Once the problem works setup the inputs or read from file

x1 = 2
y1 = 4
x2 = 4
y2 = 8

#r = math.sqrt((y2 - y1)*(y2 - y1) + (x2 - x1)*(x2 - x1))

#Python Shortcut - ** means power

r = ((y2 - y1)**2 + (x2 - x1)**2)**(1/2)

a = 3.14159*r**2

print(a)

