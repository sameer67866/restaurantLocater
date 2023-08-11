// // Import Firebase modules
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, onCreate } from "firebase/database";
// // Your web app's Firebase configuration
//    const firebaseConfig = {
// 	 apiKey: "AIzaSyDplXTrUHgAVMHyZXLUv4n9jA5YjZ6nmH8",
// 	 authDomain: "auth-3d904.firebaseapp.com",
// 	 databaseURL: "https://auth-3d904-default-rtdb.firebaseio.com",
// 	 projectId: "auth-3d904",
// 	 storageBucket: "auth-3d904.appspot.com",
// 	 messagingSenderId: "923624233664",
// 	 appId: "1:923624233664:web:2e600adc4d6b1972c92b25"
//    };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const database = getDatabase(app);

// // Sign up logic
// const signupForm = document.getElementById('#signup-form');

// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   // Get form values
//   const email = signupForm['email'].value;
//   const password = signupForm['password'].value;

//   // Create user account
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // User signed up successfully
//     })
//     .catch(error => {
//       // Handle errors
//     });

// });

// // Listen for new users
// const usersRef = ref(database, 'users');
// onCreate(usersRef, (snapshot, context) => {

//   // Get new user data
//   const newUser = snapshot.val();

//   // Log new user account creation
//   console.log('New user signed up:', newUser);

//   // Can access properties like email, username etc
//   console.log(newUser.email); 

// });   
 
//  // Import the functions you need from the SDKs you need
//    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.7/firebase-app.js";
//    import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.7/firebase-database.js";
//    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.7/firebase-auth.js";
//    // TODO: Add SDKs for Firebase products that you want to use
//    // https://firebase.google.com/docs/web/setup#available-libraries
 
//    // Your web app's Firebase configuration
//    const firebaseConfig = {
// 	 apiKey: "AIzaSyDplXTrUHgAVMHyZXLUv4n9jA5YjZ6nmH8",
// 	 authDomain: "auth-3d904.firebaseapp.com",
// 	 databaseURL: "https://auth-3d904-default-rtdb.firebaseio.com",
// 	 projectId: "auth-3d904",
// 	 storageBucket: "auth-3d904.appspot.com",
// 	 messagingSenderId: "923624233664",
// 	 appId: "1:923624233664:web:2e600adc4d6b1972c92b25"
//    };
 
//    // Initialize Firebase
//    const app = initializeApp(firebaseConfig);
//    const database = getDatabase(app);
//    const auth = getAuth();
   
//    function handleOnSubmit() {

   

//    var firstName = document.getElementById("firstName").value;
//    var lastName = document.getElementById("lastName").value;
//    var email = document.getElementById("email").value;
//    var userName = document.getElementById("userName").value;
//    var password = document.getElementById("password").value;

//    createUserWithEmailAndPassword(auth, email, password)
//    .then((userCredential) => {

// 	const uid = userCredential.user.uid;
//     const userData = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       username: username
//     };

//     // Save to database
//     const dbRef = ref(database, 'users/' + uid);
//     set(dbRef, userData);
//    // Signed in 
//    //const user = userCredential.user;
//    alert("user created!")
//    // ...
//  })
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    alert(errorMessage);
//    // ..
//  });
// }

// import { initializeApp } from "firebase/app";
//         import { getAnalytics } from "firebase/analytics";
//         import "firebase/auth";
//         import "firebase/database";
//         // // Import the functions you need from the SDKs you need
//         // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//         // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
//         // // TODO: Add SDKs for Firebase products that you want to use
//         // // https://firebase.google.com/docs/web/setup#available-libraries
//         // import "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
//         // import "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
//         const firebaseConfig = {
//             // apiKey: "AIzaSyDQIfPZSKa0Fxd0yV-5l1YsRp0eHHAs7rI",
//             // authDomain: "restaurantlocator-98462.firebaseapp.com",
//             // databaseURL: "https://restaurantlocator-98462-default-rtdb.firebaseio.com",
//             // projectId: "restaurantlocator-98462",
//             // storageBucket: "restaurantlocator-98462.appspot.com",
//             // messagingSenderId: "746015269599",
//             // appId: "1:746015269599:web:4e6070ee699e6b28daff6a",
//             // measurementId: "G-KHMZ1VXVPZ"
// 			apiKey: "AIzaSyDQIfPZSKa0Fxd0yV-5l1YsRp0eHHAs7rI",
//             authDomain: "restaurantlocator-98462.firebaseapp.com",
//             databaseURL: "https://restaurantlocator-98462-default-rtdb.firebaseio.com",
//             projectId: "restaurantlocator-98462",
//             storageBucket: "restaurantlocator-98462.appspot.com",
//             messagingSenderId: "746015269599",
//             appId: "1:746015269599:web:4e6070ee699e6b28daff6a",
//             measurementId: "G-KHMZ1VXVPZ"
//         };

//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         const analytics = getAnalytics(app);
// import "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// const auth = firebase.auth();
// const database = firebase.database();

// function handleSignUp() {
// 	var firstName = document.getElementById("firstName").value
// 	var lastName = document.getElementById("lastName").value
// 	var email = document.getElementById("email").value
// 	var userName = document.getElementById("userName").value
// 	var password = document.getElementById("password").value
	
// 	// Validate input fields
// 	if (validateField(firstName) == false) {
// 		alert("First Name Cannot be Empty!");
// 		return;
// 	}
// 	if (validateField(lastName) == false) {
// 		alert("Last Name Cannot be Empty!");
// 		return;
// 	}
// 	if (validateEmail(email) == false) {
// 		alert("Please Enter a Valid Email Address!");
// 		return;
// 	}
// 	if (validateField(userName) == false) {
// 		alert("Username Cannot be Empty!");
// 		return;
// 	}
// 	if (validatePassword(password) == false) {
// 		alert("Please Enter a Password of at Least 8 Characters!");
// 		return;
// 	}


// auth.createUserWithEmailAndPassword(email,password)
// .then(function(){
// 	var user = auth.currentUser;
// 	// Adding user to Firebase Database
// 	var databaseRef = database.ref();
// 	// Create User data
// 	var userData = {
// 		firstName : firstName,
// 		lastName : lastName,
// 		email : email,
// 		userName : userName,
// 		password : password,
// 	};
// 	databaseRef.child("users/" +  user.uid).set(userData)
// 	alert("user Created!");

// })
// .catch(function(error){
// 	var errorCode = error.errorCode;
// 	var errorMessage = error.message;

// 	alert(errorMessage);
// });
// }
// function validateEmail(email) {
// 	expression = /^[^@]+@\w+(\.\w+)+\w$/;
// 	if (expression.test(email) == true) {
// 		return true;
// 	} 
// 	return false;
// }
// function validatePassword(password) {
// 	if (password.length < 8) {
// 		return false;
// 	}	
// 	return true;
// }
// function validateField(check) {
// 	if (check.length < 1) {
// 		return false;
// 	} 
// 	return true;
// }


let markers = [];
let nextPageToken = null;
let infoWindow;

async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	const map = new Map(document.getElementById("map"), {
		center: { lat: latitude, lng: longitude },
		zoom: 11.56,
	});

	infoWindow = document.createElement("div");
	infoWindow.id = "info-window";
	document.body.appendChild(infoWindow);

	const service = new google.maps.places.PlacesService(map);
	const request = {
		location: new google.maps.LatLng(latitude, longitude),
		radius: 2000,
		type: 'restaurant'
	};

	function fetchPlaces() {
		if (nextPageToken) {
			request.pageToken = nextPageToken;
		}

		service.nearbySearch(request, (results, status, pagination) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				for (const result of results) {
					createMarker(result);
				}
				if (pagination.hasNextPage) {
					nextPageToken = pagination.nextPageToken;
					fetchPlaces();
				}
			}
		});
	}
	fetchPlaces();

	function createMarker(place) {
		const marker = new google.maps.Marker({
			position: place.geometry.location,
			map: map,
			title: place.name,
			icon: {
				url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
				scaledSize: new google.maps.Size(40, 40),
			},
		});

		markers.push(marker);

		marker.addListener('click', () => {
			service.getDetails({
				placeId: place.place_id,
				fields: ['name', 'formatted_address', 'rating']
			}, (placeDetails, status) => {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					updateInfoWindow(placeDetails);
				}
			});
		});
	}

	function updateInfoWindow(placeDetails) {
		infoWindow.innerHTML = `
            <div>
                <strong>${placeDetails.name}</strong><br>
                Address: ${placeDetails.formatted_address}<br>
				Rating: ${placeDetails.rating}/5<br>
				<div id = "viewBtnContainer">
					<a id = "viewBtn" 
					href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeDetails.formatted_address)}" 
					target="_blank">View on Google Maps</a>
				</div>
				<div id = "hereBtnContainer">
					<button id = "hereBtn" onclick="handleGoingHere()">I am going here</button>
				</div>
            </div>
        `;

		const mapWidth = map.getDiv().offsetWidth;
		const mapHeight = map.getDiv().offsetHeight;
		const infoWindowWidth = infoWindow.offsetWidth;
		const infoWindowHeight = infoWindow.offsetHeight;

		infoWindow.style.position = "absolute";
		infoWindow.style.top = `${(mapHeight - infoWindowHeight) / 2}px`;
		infoWindow.style.left = `${mapWidth + 100}px`;
		infoWindow.style.backgroundColor = "#a47e1b";
		infoWindow.style.padding = "10px";
		infoWindow.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
		infoWindow.style.zIndex = 9999;
		// infoWindow.style.width = "30%";
		// infoWindow.style.height = "30%";

		const viewButton = document.getElementById("viewBtnContainer");
		viewButton.style.marginTop = "2%";

		const goingHereButton = document.getElementById("hereBtnContainer");
		goingHereButton.style.border = "none";
		goingHereButton.style.cursor = "pointer";
		goingHereButton.style.marginTop = "5%";
		goingHereButton.style.marginLeft = "35%";

		const goingHereBtn = document.getElementById("hereBtn");
		goingHereBtn.style.width = "40%";
		goingHereBtn.style.height = "40%";
		goingHereBtn.style.fontSize = "16px";
		goingHereBtn.style.alignContent = "center";
		goingHereBtn.style.backgroundColor = "green";
		goingHereBtn.style.color = "white";
	}
}