def checkLetters():

	word = input()

	counter = 0

	for i in word:
		if "I" in word:
			counter = counter + 1
		elif "O" in word:
			counter = counter + 1
		elif "S" in word:
			counter = counter + 1
		elif "H" in word:
			counter = counter + 1
		elif "Z" in word:
			counter = counter + 1
		elif "X" in word:
			counter = counter + 1
		elif "N" in word:
			counter = counter + 1
		else:
			return("NO")

	return("YES")

print(checkLetters())


