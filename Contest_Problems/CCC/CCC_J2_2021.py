#Approach 1 (List)
n = int(input())

data = []

i = 0

while i < n:
	name = input()
	value = int(input())
	data.append(name)
	data.append(value)
	i = i + 1

largest = data[1]

largestindex = 1

for c in range(1,len(data),2):

	if largest < data[c]:
		largest = data[c]
		largestindex = c

print(data[largestindex - 1])


#Approach 2 (Dictionary)
n = int(input())

data = {}

i = 0

while i < n:
	name = input()
	value = int(input())
	data[name] = value
	i = i + 1

keylist = list(data.keys())
lkey = keylist[0]
lvalue = data[lkey]

for c in range(1,len(keylist),1):

	if lvalue < data[keylist[c]]:
		lkey = keylist[c]
		lvalue = data[keylist[c]]

print(lkey)