HH = 17
MM = "12"

AMPM = ""

if HH > 12:
	TwelveHH = HH - 12
	AMPM = "PM"
else:
	TwelveHH = HH
	AMPM = "AM"

print(str(TwelveHH) + ":" + MM + " " + AMPM)