d = {'k1': 'v1'}

print(d)

d['k2'] = 'v1'

print(d)

d['k3'] = 'v3'
d['k2'] = 'v2a'

print(d)

for key in d:
	print(d[key])