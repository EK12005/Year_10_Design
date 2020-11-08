
'''
sum = 0 

for i in range(0,101,2):
	sum = sum + i

print(sum)    
'''

data = [100,65,90,32,54,12,43,65,234,654,42] 
 
sum = 0
for i in range(0, len(data), 1):
	sum = sum + data[i]

print(sum)

average = sum/len(data)
print(average)