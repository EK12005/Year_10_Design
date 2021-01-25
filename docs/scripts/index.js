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
var displayON = document.getElementById("onClickDisplay")
var submitBTN = document.getElementById("enter_dataBTN")

var userUpdate = database.ref('users')

    

/**********************GENERAL FUNCTIONS*****************/
function createCard(u,m) {

    const html = `<div class="col s12">
                        <div class="card small orange darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">${u}</span>
                                <p>Message : ${m}</p>
                                <br>
                                <a class="waves-effect waves-light btn orange darken-5">Delete</a>
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

    username = document.getElementById("username").value
    message = document.getElementById("message").value
            
            
    // Get a key for a new post
    var newUserKey = database.ref().child('users').push().key;
    //console.log(newUserKey)
    writeUserData(newUserKey,username,message)
            
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

function onChangeB(snapshot) {
    console.log("onChangeB")
    console.log(snapshot.val())
    
}

userUpdate.orderByChild("username").on('child_added', onChange)

        //userUpdate.on('child_changed', onChange)

        //userUpdate.on('child_removed', onChange);
        //userUpdate.on('value',onChange);

        /*******************ONCE COMMAND*******************/
        /*
        Big Idea:  When this command is invoked it uses the value trigger which 
        passes the entire contents as a list.  This means that if we want to sort 
        the data we have to first pass it into a temp structure then sort it and 
        use that structure to display it.  

        This is not the best approach, but as a beginning programmer is highlights 
        many essential concepts.  In the approach below we have written a selection 
        sort to help with this. 
        */


function onClick(snapshot) {

    //STEP 0: CLEAR THE DIV FROM PAST UPDATE
    //resets the display to remove what was there from last update
    displayON.innerHTML = ""
        
    //STEP 1: GRAB ALL THE DATA
    //Grab the values from the snapshot.  This is a list. 
    const data = snapshot.val();
            

    //STEP 2: COPY DATA FROM DATABASE COLLECTION INTO 
            
    //temp array to hold the data from the database.
    //We will be creating an array of objects
    let temp = []


    //Copy all the data into an array of objects we can work with 
    //Standard Loop for traversing through COLLECTION (IB Term) from database
    for (key in data){
        //Build an object
        b = {
            username: data[key]["username"],
            message: data[key]["message"],
        }
        //Push data onto array
        temp.push(b)
    }

    //STEP 3: SORT DATA
    //Sort Data: In this case I will use the selection Sort
    for (i = 0; i < temp.length - 1; i = i + 1) {
                
        front = i
        minIndex  = i
        for (j = i + 1; j < temp.length; j = j + 1) {


            if (temp[j]["username"] < temp[minIndex]["username"]) {
                minIndex = j;
            }

        }

        tempValue = temp[front]
        temp[front] = temp[minIndex]
        temp[minIndex] = tempValue
        //Swap

    }

    //STEP 4: 
    //TAKE EACH ELEMENT AND CREATE A CARD ELEMENT FOR DISPLAY
    for (i = 0; i < temp.length; i = i + 1) {
        d = document.createElement("div")
        d.innerHTML = createCard(temp[i]["username"],temp[i]["message"])
        displayON.appendChild(d)    
                
    }
            
            
}

//THIS FUNCTION IS CALLED WHEN THE ONCE BUTTON IS CLICKED
function updateOnce() {
    userUpdate.once('value',onClick)
            
}

//SETUP BUTTON FOR UPDATE
var onceBTN = document.getElementById("onceBTN")
onceBTN.addEventListener("click",updateOnce)


