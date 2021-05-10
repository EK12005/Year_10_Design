n = int(input())

data = []

i = 0

while i < n:
	name = input()
	value = int(input())
	data.append(name)
	data.append(value)
	i = i + 1

print(data)

largest = data[1]

largestindex = 1

for c in range(1,len(data),2):

	if largest < data[c]:
		largest = data[c]
		largestindex = c

print(data[largestindex - 1])