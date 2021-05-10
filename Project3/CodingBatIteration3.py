def cat_dog(str):

	dog_count = 0
	cat_count = 0

	for i in range(0, len(str), 1):
		if str[i: i + 3] == "cat":
			cat_count += 1
		if str[i: i + 3] == "dog":
			dog_count += 1

	if dog_count == cat_count:
		return True
	return False

str = input()
print(cat_dog(str))