def double_char(str):
  
	newStr = ""
  
	for i in range(0, len(str), 1):
		newStr += str[i] * 2
		#this is shortform for newStr = newStr + str[i] + str[i]
	return newStr

str = input()
print(double_char(str))
