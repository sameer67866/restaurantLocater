function handleGoingHere() {
	// Check if the user is logged in
	if (auth.currentUser != null) {
		const restaurantName = placeDetails.name;
		// Add the restaurant's name to the user's list of restaurants in the database
		const userId = getCurrentUserId();
		if (userId) {
			const dbRef = firebase.database().ref(`users/${userId}/restaurants`);
			dbRef.push(restaurantName)
				.then(() => {
					console.log(`Added ${restaurantName} to the user's list of restaurants.`);
				})
				.catch((error) => {
					console.error("Error adding restaurant:", error);
				});
		} else {
			console.error("User ID not available.");
		}
	} else {
		console.log("User is not logged in.");
	}
}

// map function
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
				<script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
        const firebaseConfig = {
            apiKey: "AIzaSyDplXTrUHgAVMHyZXLUv4n9jA5YjZ6nmH8",
            authDomain: "auth-3d904.firebaseapp.com",
            databaseURL: "https://auth-3d904-default-rtdb.firebaseio.com",
            projectId: "auth-3d904",
            storageBucket: "auth-3d904.appspot.com",
            messagingSenderId: "923624233664",
            appId: "1:923624233664:web:2e600adc4d6b1972c92b25"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
    </script>
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