//"AUTHENTICATION"

var uNames = ["edwin.kim@ucc.on.ca"] //stores user names
var pWords = ["1234"] //stores passwords
var permissions = [0,0,0,0] //keeps track of permission levels
var uName = null
var pWord = null

//PAGE NAVIGATION

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
        uName = email //sets variable uName to email
        pWord = password //sets variable pWord to password
        e.preventDefault() //stops page from reloading
        home_content.style.display = "block";
        landing_content.style.display = "none";
        drills_content.style.display = "none";
        discussionboard_content.style.display = "none";
        console.log(uName)
    }
    else {
        M.toast({html: 'Incorrect Email or Password'})
    }
   
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    
}

function logout() {
    console.log("Logout")
    console.log(uName)
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

//TEAM INFO DROPDOWN FUNCTION

function createCollapsible() {

    const collapsible =

    `<h5>Coaches</h5>

    <div class="row">
        <div class="col s12 m6">

            <img src="images/Placeholder.jpg" height="150" width="150">
            <p>Email: test1@ucc.on.ca</p>
            <p>Phone Number: XXX-XXX-XXXX</p>

        </div>

        <div class="col s12 m6">

            <img src="images/Placeholder.jpg" width="150">
            <p>Email: test2@ucc.on.ca</p>
            <p>Phone Number: XXX-XXX-XXXX</p>

        </div>

    </div>

    <div class="divider"></div>

    <h5>Schedule</h5>

    <table class="highlight">
        <thead>
            <tr>
                <th>Home</th>
                <th>Away</th>
                <th>Directions</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Upper Canada College</td>
                <td>Royal St. George's College</td>
                <td><a class="waves-effect waves-light btn orange darken-4">Route</a></td>
            </tr>
            <tr>
                <td>Upper Canada College</td>
                <td>St. Michael's College School</td>
                <td><a class="waves-effect waves-light btn orange darken-4">Route</a></td>
            </tr>
            <tr>
                <td>Crescent School</td>
                <td>Upper Canada College</td>
                <td><a class="waves-effect waves-light btn orange darken-4">Route</a></td>
            </tr>
        </tbody>
    </table>

    <div class="divider"></div>

    <h5>W-L Record</h5>

    <table class="highlight">
        <thead>
            <tr>
                <th>Wins</th>
                <th>Losses</th>
                <th>Pct%</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>.XXX%</td>
            </tr>
        </tbody>
    </table>`

return collapsible

}

const teamInfoDropdown1 = document.getElementById("collapsiblefunction1")
const teamInfoDropdown2 = document.getElementById("collapsiblefunction2")
const teamInfoDropdown3 = document.getElementById("collapsiblefunction3")
const teamInfoDropdown4 = document.getElementById("collapsiblefunction4")

teamInfoDropdown1.innerHTML = createCollapsible()
teamInfoDropdown2.innerHTML = createCollapsible()
teamInfoDropdown3.innerHTML = createCollapsible()
teamInfoDropdown4.innerHTML = createCollapsible()

//FIREBASE PULL AND CARD CREATION

var firebaseConfig = {

    apiKey: "AIzaSyCocbFNd60hcZuomW1_jrzSaT-0NaXMimY",
    authDomain: "design10-firebasebpm-2a1c5.firebaseapp.com",
    databaseURL: "https://design10-firebasebpm-2a1c5.firebaseio.com",
    projectId: "design10-firebasebpm-2a1c5",
    storageBucket: "design10-firebasebpm-2a1c5.appspot.com",
    messagingSenderId: "605717327024",
    appId: "1:605717327024:web:fe62694746b46fc2131f75",
    measurementId: "G-91TPHZJC99"
        
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
        

//*********************GENERAL ELEMENTS******************/

var database = firebase.database();
        
var display = document.getElementById("live")
var submitBTN = document.getElementById("enter_dataBTN")

var userUpdate = database.ref('users')

    

/**********************GENERAL FUNCTIONS*****************/

function createCard(u,m) {

    const html = `<div class="col s12">
                        <div class="card small orange darken-4">
                            <div class="card-content white-text">
                                <span class="card-title"><h4>${u}</h4></span>
                                <h5>U16B</h5>
                                <p>Message: ${m}</p>
                                <br>
                                <a class="waves-effect waves-light btn white" style="color:black;">Delete</a>
                            </div>
                        </div>
                    </div>`
            
    return html
}
            
/*********************WRITING DATA**********************/

function writeUserData(userId, username, message) {

    data = {

        username: username,
        message: message,

    }

    database.ref('users/' + userId).set(data);

}

function enterData() {

    username = uName

    if (document.getElementById("message").value === "") {

        M.toast({html: 'Error: Message Input Must Be Filled'}) //error checking: ensures no posts with empty message body

    } else {

        message = document.getElementById("message").value

        // Get a key for a new post
        var newUserKey = database.ref().child('users').push().key;

        //console.log(newUserKey)
        writeUserData(newUserKey,username,message)

    }
            
}
        
submitBTN.addEventListener("click",enterData)


/*******************ON COMMAND*******************/
        
function onChange(snapshot) {

    const data = snapshot.val();
            

    //This will loop through every object
        
    d = document.createElement("div")
    d.innerHTML = createCard(data["username"],data["message"])
    display.appendChild(d)
            
}

userUpdate.on('child_added', onChange)