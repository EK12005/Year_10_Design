//********************* AUTHENTICATION AND PAGE NAVIGATION ******************/

var uNames = ["edwin.kim@ucc.on.ca","chicken@chicken.com"] //stores user names
var pWords = ["1234","1234"] //stores passwords
var uName = null
var pWord = null

var landing_content = document.getElementById("landing")
var home_content = document.getElementById("home")
var drills_content = document.getElementById("drills")
var discussionboard_content = document.getElementById("discussionboard")

home_content.style.display = "none";
drills_content.style.display = "none";
discussionboard_content.style.display = "none";

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
    const email =  loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    loginForm.reset();

    if (checkCred(email,password) === true) {
        uName = email //sets variable uName to email
        pWord = password //sets variable pWord to password
        home_content.style.display = "block";
        landing_content.style.display = "none";
        drills_content.style.display = "none";
        discussionboard_content.style.display = "none";
    }
    else {
        M.toast({html: "Error: Invalid Email Or Password"})
    }
   
    const modallogin = document.querySelector("#modal-login");
    M.Modal.getInstance(modallogin).close();
    
}

function logout() {
    uName = null
    pWord = null
    landing_content.style.display = "block";
    home_content.style.display = "none";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "none";
}

function teamInfo() {
    landing_content.style.display = "none";
    home_content.style.display = "block";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "none";
}

function drills() {
    landing_content.style.display = "none";
    home_content.style.display = "none";
    drills_content.style.display = "block";
    discussionboard_content.style.display = "none";
}

function discussionBoard() {
    landing_content.style.display = "none";
    home_content.style.display = "none";
    drills_content.style.display = "none";
    discussionboard_content.style.display = "block";
}

const loginForm = document.querySelector("#login-form")
loginForm.addEventListener("submit",login);

const logout_BTN = document.getElementById("logout_btn")
logout_BTN.addEventListener("click",logout);

const drillsBTN = document.getElementById("drills_btn")
drillsBTN.addEventListener("click",drills);

const teaminfoBTN = document.getElementById("teaminfo_btn")
teaminfoBTN.addEventListener("click",teamInfo);

const discussionboardBTN = document.getElementById("discussionboard_btn")
discussionboardBTN.addEventListener("click",discussionBoard);

//********************* TEAM INFO COLLAPSIBLE FUNCTION (REPETITVE HTML) ******************/

function createCollapsible(teamname) {

    const collapsible =

    `<li>
        <div class="collapsible-header orange darken-4"><b style="color:white;">${teamname}</b></div>
          <div class="collapsible-body">

            <h5>Coaches</h5>

                <div class="row">
                    <div class="col s12 m6">

                        <img src="images/Placeholder.jpg" height="150" width="150">
                        <p>Email: coach1@ucc.on.ca</p>
                        <p>Phone Number: XXX-XXX-XXXX</p>

                    </div>

                    <div class="col s12 m6">

                        <img src="images/Placeholder.jpg" width="150">
                        <p>Email: coach2@ucc.on.ca</p>
                        <p>Phone Number: XXX-XXX-XXXX</p>

                    </div>

                </div>

                <div class="divider"></div>

                <h5>Schedule</h5>

                <table class="highlight">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Directions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>12 November 2021</td>
                            <td>Royal St. George's College</td>
                            <td>Upper Canada College</td>
                            <td><a target="_blank" href="https://www.google.com/maps/dir/Upper+Canada+College,+200+Lonsdale+Rd,+Toronto,+ON+M4V+2X8/Royal+St.+George's+College,+120+Howland+Ave,+Toronto,+ON+M5R+3B5/@43.6813409,-79.4254611,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x882b33684057775d:0x3dd2a9840eeeced9!2m2!1d-79.4037458!2d43.6933068!1m5!1m1!1s0x882b3490f2282119:0xd9caf76dd3591d53!2m2!1d-79.410477!2d43.6693777!3e0" class="waves-effect waves-light btn orange darken-4">Route</a></td>
                        </tr>
                        <tr>
                            <td>19 November 2021</td>
                            <td>Upper Canada College</td>
                            <td>St. Michael's College School</td>
                            <td><a onclick="homeTeamError()" class="waves-effect waves-light btn orange darken-4">Route</a></td>
                        </tr>
                        <tr>
                            <td>3 December 2021</td>
                            <td>Crescent School</td>
                            <td>Upper Canada College</td>
                            <td><a target="_blank" href="https://www.google.com/maps/dir/Upper+Canada+College,+200+Lonsdale+Rd,+Toronto,+ON+M4V+2X8/Crescent+School,+Bayview+Avenue,+North+York,+ON/@43.7131735,-79.4139001,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x882b33684057775d:0x3dd2a9840eeeced9!2m2!1d-79.4037458!2d43.6933068!1m5!1m1!1s0x89d4cd3515f54deb:0xf3235abe67362418!2m2!1d-79.379074!2d43.732938!3e0" class="waves-effect waves-light btn orange darken-4">Route</a></td>
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
                </table>
            </div>
        </div>
    </li>`

return collapsible

}

const teamInfoDropdown = document.getElementById("collapsibleConstant")

var teams = {

    "collapsibles": [

        {
            "teamname": "U14"
        },

        {
            "teamname": "U16B"
        },

        {
            "teamname": "U16A"
        },

        {
            "teamname": "Varsity"
        }

    ]

}

for (i = 0; i < 4; i = i + 1) {

    teamInfoDropdown.innerHTML += createCollapsible(teams["collapsibles"][i]["teamname"])

}

function homeTeamError() {

    M.toast({html: "Directions Unavailable: UCC Is Home Team"})

}

//********************* EMAIL FUNCTION ******************/

function openEmail() {

    window.open('mailto:edwin.kim@ucc.on.ca?subject=Drill Suggestion for UCC Upper School Basketball Website');

}

//********************* FIREBASE PULL ******************/


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

var database = firebase.database();
        
var display = document.getElementById("postDisplay")

var submitBTN = document.getElementById("enter_dataBTN")

var postsUpdate = database.ref('posts')

function createCard(username,teamname,message,key) {

    const card = `<div class="col s12">
                        <div class="card small orange darken-4">
                            <div class="card-content white-text">
                                <span class="card-title""><h4>${username}</h4></span>
                                <h5>${teamname}</h5>
                                <p>Message: ${message}</p>
                                <br>
                                <a class="waves-effect waves-light btn white" id = ${key} style="color:black;">Delete</a>
                            </div>
                        </div>
                    </div>`
            
    return card
}

function writePostData(userId, username, teamname, message) {

    data = {

        username: username,
        teamname: teamname,
        message: message,

    }

    database.ref('posts/' + userId).set(data);

}

function enterData() {

    username = uName

    if (document.getElementById("opbox").value === "") {

        M.toast({html: "Error: Team Must Be Selected"}) //error checking: ensures no posts with no teamname label

    } else if (document.getElementById("message").value === "") {

        M.toast({html: "Error: Message Body Must Be Filled"}) //error 

    } else {

        teamname = document.getElementById("opbox").value

        message = document.getElementById("message").value

        var newPostKey = database.ref().child('posts').push().key;

        writePostData(newPostKey,username,teamname,message)

        post_form.reset()

    }
            
}
     
submitBTN.addEventListener("click",enterData)
        
function onChange(snapshot) {

    const data = snapshot.val()
        
    d = document.createElement("div")
    key = snapshot.key
    d.id = key + "c"

    d.innerHTML = createCard(data["username"],data["teamname"],data["message"],snapshot.key)
    display.appendChild(d)

    btn = document.getElementById(key)
    btn.onclick = deleteCard;

}

postsUpdate.on("child_added", onChange)


function deleteCard() {

    div = document.getElementById(this.id + "c")
    ref = database.ref(/posts/+this.id)

    div.remove()
    ref.remove()

}

function deleteAllCards() {

    username = uName

    const modalconfirm = document.querySelector("#modal-confirm")

    M.Modal.getInstance(modalconfirm).close()

    if (username === "edwin.kim@ucc.on.ca") {

        database.ref(`/posts/`).remove()

        M.toast({html: "Changes Made - Refresh Browser"})

    } else {

        M.toast({html: "Error: Invalid Permissions"})

    }

}