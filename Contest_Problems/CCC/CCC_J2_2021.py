'''
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
'''

#Approach 2 (Dictionary)
n = int(input())

data = {
	"bidname": [],
	"bidvalue": []
}

i = 0

while i < n:
	name = input()
	value = int(input())
	data["bidname"].append(name)
	data["bidvalue"].append(value)
	i = i + 1

largest = data["bidvalue"][0]

largestindex = 0

for c in range(1,len(data["bidvalue"]),1):

	if largest < data["bidvalue"][c]:
		largest = data["bidvalue"][c]
		largestindex = c

print(data["bidname"][largestindex])