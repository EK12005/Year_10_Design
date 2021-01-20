
//PROBLEM FROM LAST CLASS: PYTHON TO JAVASCRIPT CODE

val = "09:30"

h = val.substring(0,2)

h = parseInt(h,10)

m = val.substring(3,5)

timeOfDay = "AM"

if (h >= 12 && h <= 23) {
	timeOfDay = "PM"
	h = h -12
}

if (h == 0) {
	h = 12
}

console.log(h + ":" + m + " " + timeOfDay)
