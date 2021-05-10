def count_hi(str):
  
	counter = 0

	for i in range(0, len(str), 1):
		check = str[i: i + 2]
		if check == "hi":
			counter += 1
      
	return counter

str = input()
print(count_hi(str))