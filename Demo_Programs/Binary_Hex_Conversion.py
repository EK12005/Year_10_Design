binary = [
		"0000",
		"0001",
		"0010",
		"0011",
		"0100",
		"0101",
		"0110",
		"0111",
		"1000",
		"1001",
		"1010",
		"1011",
		"1100",
		"1101",
		"1110",
		"1111"]

hexadecimal = [
		"0000",
		"0001",
		"0002",
		"0003",
		"0004",
		"0005",
		"0006",
		"0007",
		"0008",
		"0009",
		"A",
		"B",
		"C",	
		"D",
		"E",
		"F",]

binput = int(input())

while (binput < 0):

	for i in range(0,len(binary),1):

		if binput == binary[i]:
			hexoutputindex = i
		
	print(hexadecimal[hexoutputindex])