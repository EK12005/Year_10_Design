//PAGE NAVIGATION

var uNames = ["edwin.kim@ucc.on.ca"] //stores user names
var pWords = ["1234"] //stores passwords
var permissions = [0,0,0,0] //keeps track of permission levels
var uName = null
var pWord = null


var landing_content = document.getElementById("landing")
var home_content = document.getElementById("home")
var drills_content = document.getElementById("drills")
var discussionboard_content = document.getElementById("discussionboard")

home_content.style.display = "none";
drills_content.style.display = "none";
discussionboard_content.style.display = "none";


function getUser() {
	return uName;
}

function checkCred(name,pwd) {

	for (i = 0; i < uNames.length; i = i + 1) {
		if (uNames[i] === name) {
			if (pWords[i] == pwd) {
				return true;
			}
			return false;
		}
	}
	return false;
}

function login(e) {

    e.preventDefault() //stops page from reloading
    const email =  loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    loginForm.reset();

    if (checkCred(email,password) === true) {
        uname = email //sets variable uName to email
        pword = password //sets variable pword to password
        e.preventDefault() //stops page from reloading
        home_content.style.display = "block";
        landing_content.style.display = "none";
        drills_content.style.display = "none";
        discussionboard_content.style.display = "none";
    }
    else {
        alert("Incorrect Email or Password");
    }
   
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    
}

function logout() {
    console.log("Logout")
    home_content.style.display = "none";
    landing_content.style.display = "block";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "none";
    uName = null
    pWord = null
}

function teamInfo() {
	console.log("teaminfo_nav")
    home_content.style.display = "block";
    landing_content.style.display = "none";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "none";
}

function drills() {
	console.log("drills_nav")
    home_content.style.display = "none";
    landing_content.style.display = "none";
    drills_content.style.display = "block";
    discussionboard_content.style.display = "none";
}

function discussionBoard() {
    console.log("discussionboard_nav")
    home_content.style.display = "none";
    landing_content.style.display = "none";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "block";
}

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit',login);

const logout_BTN = document.getElementById("logout_btn")
logout_BTN.addEventListener('click',logout);

const drillsBTN = document.getElementById("drills_btn")
drillsBTN.addEventListener('click',drills);

const teaminfoBTN = document.getElementById("teaminfo_btn")
teaminfoBTN.addEventListener('click',teamInfo);

const discussionboardBTN = document.getElementById("discussionboard_btn")
discussionboardBTN.addEventListener('click',discussionBoard);

//FIREBASE PULL AND CARD CREATION


