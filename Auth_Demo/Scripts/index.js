//Big Takeaway
//Two wasy to run your javascript
//
// 1. For quick testing you can run script right inside a browser
// 
// 2. We typically link script files to web pages. When a script is linked it automatically runs

console.log("Running script")

var uNames = ["user1@test.com","user2@test.com","user3@test.com"]
var pWords = ["pword1","pword2","pword3"]

//Task: Wirte a function that a user name u and a password p
//return true if u is in uNames and p matches the password
//uNames[n] has password pWOrds[n]

function checkCred(u,p) {
	for (i = 0; i < uNames.length; i = i + 1) {
		if (uNames[i] === u) {
			if (pWords[i] == p) {
				return true
			}
		}
	}
	return false
}

x = checkCred("user1@test.com","pword1")
console.log(x)